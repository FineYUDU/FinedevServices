import { Component, inject } from '@angular/core';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';

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

}
