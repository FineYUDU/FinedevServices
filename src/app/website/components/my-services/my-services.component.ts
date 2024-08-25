import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';

export interface ServicesMenu {
  icon:string;
  title:string;
  description:string;
}

@Component({
  selector: 'my-services',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.css'
})
export class MyServicesComponent {

  public translateService = inject( TranslateService );

  public servicesMenu = signal<ServicesMenu[]>([
    {
      icon:'',
      title:'web-design',
      description:'',
    },
    {
      icon:'',
      title:'UX UI Design',
      description:'',
    },
    {
      icon:'',
      title:'Menu QR',
      description:'',
    },
  ]) 

}
