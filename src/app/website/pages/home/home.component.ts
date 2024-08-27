import { Component, inject } from '@angular/core';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';

import { HeroComponent } from '../../components/home/hero/hero.component';
import { MyClientsComponent } from '../../components/home/my-clients/my-clients.component';
import { MyServicesComponent } from '../../components/my-services/my-services.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeroComponent,
    TranslatePipe,
    MyServicesComponent,
    MyClientsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  public translateService = inject( TranslateService );

}
