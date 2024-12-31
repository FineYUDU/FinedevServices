import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../../core/services/translate.service';
import { ThemeService } from '../../../../core/services/theme.service';
import { NgOptimizedImage } from '@angular/common';

export interface Clients {
  name:string;
  url?:string;
}

@Component({
  selector: 'my-clients',
  standalone: true,
  imports: [
    TranslatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './my-clients.component.html',
  styleUrl: './my-clients.component.css'
})
export class MyClientsComponent {

  public translateService = inject( TranslateService );

  
  public themeService = inject (ThemeService);

  public clients = signal<Clients[]>([
    {
      name:'dista-clean',
      url:'https://dista-clean.com/'
    },
    {
      name:'bizflow',
      url:'https://bizflow.pe/'
    },
  ])


}
