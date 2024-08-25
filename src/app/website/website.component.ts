import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { enviroment } from '../../enviroment/enviroment';

import { fromEvent, map } from 'rxjs';

import { TranslatePipe } from '../shared/pipes/translate.pipe';

import { TranslateService } from '../core/services/translate.service';
import { LocalStorageService } from '../core/services/localstorage.service';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavHeaderComponent } from '../shared/components/nav-header/nav-header.component';
import { NavMovilComponent } from '../shared/components/nav-movil/nav-movil.component';
import { CompanyService } from '../core/services/company.service';



@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavHeaderComponent,
    NavMovilComponent,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css',
})
export default class WebsiteComponent {

  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public companyService = inject( CompanyService );
  
  public whatsapp = computed(()=> this.companyService.whatsApp() );

  public hideMenu = signal<boolean>(false);


  constructor() {

    const calcularPorcentajeScroll = ( event:any ) => {
      const { scrollTop } = event.target.documentElement;

      // console.log( 'scrollTop websiteComponent',scrollTop);

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
          this.hideMenu.set(true);          }
      }
    )
  }

}
