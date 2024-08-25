import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal} from '@angular/core';
import { RouterModule } from '@angular/router';

import { fromEvent, map } from 'rxjs';

import { enviroment } from '../../../../enviroment/enviroment';

import { MenusService } from '../../../core/services/menus.service';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { NavMovilComponent } from '../nav-movil/nav-movil.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { TranslateDropdownComponent } from '../translate-dropdown/translate-dropdown.component';
import { CompanyService } from '../../../core/services/company.service';

@Component({
  selector: 'nav-header',
  standalone: true,
  imports: [
    CommonModule,
    NavMovilComponent,
    NgOptimizedImage,
    RouterModule,
    ThemeToggleComponent,
    TranslateDropdownComponent,
    TranslatePipe,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  public companyService = inject( CompanyService );
  public menusService = inject( MenusService );
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );

  public companyName = computed<string>(()=> this.companyService.company());
  public hideMenu = signal<boolean>(false);

  constructor() {

    const calcularPorcentajeScroll = ( event:any ) => {
      const { scrollTop } = event.target.documentElement;

      // console.log( 'scrollTop navbarComponent',scrollTop);

      return scrollTop;
    }
    const scroll$ = fromEvent(document,'scroll');
    const hideNavbar$ = scroll$.pipe(
      map(  calcularPorcentajeScroll ),
    )
    hideNavbar$.subscribe(
      scroll => {
        if (scroll < 200 ) {
          this.hideMenu.set(false);  
        }
        else {
          this.hideMenu.set(true);  
        }
      }
    )
  }

}
