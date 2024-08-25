import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenusService } from '../../../core/services/menus.service';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { enviroment } from '../../../../enviroment/enviroment';
import { CompanyService } from '../../../core/services/company.service';

@Component({
  selector: 'nav-movil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './nav-movil.component.html',
  styleUrl: './nav-movil.component.css'
})
export class NavMovilComponent {

  public companyService = inject( CompanyService );
  public menusService = inject( MenusService );
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );

  public footer = computed<string>(()=> this.companyService.footer());
  isOpenDropdown:boolean = false;
  isDropdownLangOpen:boolean = false;
  isDropdownThemeOpen:boolean = false;
  
  collapseDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
    this.isDropdownLangOpen = false;
    this.isDropdownThemeOpen = false;
  }
  
  openLangDropdown() {
    this.isDropdownLangOpen = !this.isDropdownLangOpen;
    this.isDropdownThemeOpen = false;
  }
  
  openThemeDropdown() {
    this.isDropdownThemeOpen = !this.isDropdownThemeOpen;
    this.isDropdownLangOpen = false;
  }

}
