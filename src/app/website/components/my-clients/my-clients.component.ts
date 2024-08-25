import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';
import { ThemeService } from '../../../core/services/theme.service';

export interface Clients {
  url:string;
}

@Component({
  selector: 'my-clients',
  standalone: true,
  imports: [
    TranslatePipe,
  ],
  templateUrl: './my-clients.component.html',
  styleUrl: './my-clients.component.css'
})
export class MyClientsComponent {

  public translateService = inject( TranslateService );

  
  public themeService = inject (ThemeService);

  public clients = signal<Clients[]>([
    {
      url:'dista-clean'
    },
    // {
    //   url:'Vertro'
    // },
    // {
    //   url:'Bizflow'
    // },
  ])


}
