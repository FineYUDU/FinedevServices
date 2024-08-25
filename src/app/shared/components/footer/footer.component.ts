import { Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenusService } from '../../../core/services/menus.service';
import { ScrollTopService } from '../../../core/services/scroll-top.service';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';
import { CompanyService } from '../../../core/services/company.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
    NgOptimizedImage,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public companyService = inject( CompanyService );
  public menusService = inject( MenusService );
  public scrollTopService = inject( ScrollTopService );
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );
  
  public footer = computed(()=> this.companyService.footer());
  public email = computed(()=> this.companyService.email());
  public whatsapp = computed(()=> this.companyService.whatsApp());
}
