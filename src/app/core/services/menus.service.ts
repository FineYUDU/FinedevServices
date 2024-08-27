import { computed, inject, Injectable, signal } from '@angular/core';

import { NavMenu } from '../interfaces/menu.interfaces';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  public companyService = inject( CompanyService );
  
  menuNavigation = signal<NavMenu[]>([
    {
      txt:'menu.home',
      router:'home'
    },
    {
      txt:'menu.about',
      router:'about'
    },
    {
      txt:'menu.contact',
      router:'contact'
    },
  ]);

}
