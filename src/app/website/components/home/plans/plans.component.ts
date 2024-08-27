import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../../core/services/translate.service';

import { PlansMenu } from '../../../interfaces/plans.interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'plans',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent  {

  public translateService = inject( TranslateService );

  public plansMenu = signal<PlansMenu[]>([
    {
      plan:'STARTED',
      description:'home.plans.plan-1.description',
      price:'$3,450.00',
      month:1,
      list:[
        'home.plans.plan-1.li.li-1',
        'home.plans.plan-1.li.li-2',
        'home.plans.plan-1.li.li-3',
        'home.plans.plan-1.li.li-4',
        'home.plans.plan-1.li.li-5',
        'home.plans.plan-1.li.li-6',
        'home.plans.plan-1.li.li-7',
        'home.plans.plan-1.li.li-8',
      ],
    },
    {
      recommended:true,
      plan:'STANDARD',
      description:'home.plans.plan-2.description',
      price:'$7,450.00',
      month:2,
      list:[
        'home.plans.plan-2.li.li-1',
        'home.plans.plan-2.li.li-2',
        'home.plans.plan-2.li.li-3',
        'home.plans.plan-2.li.li-4',
        'home.plans.plan-2.li.li-5',
        'home.plans.plan-2.li.li-6',
        'home.plans.plan-2.li.li-7',
        'home.plans.plan-2.li.li-8',
        'home.plans.plan-2.li.li-9',
        'home.plans.plan-2.li.li-10',
      ],
    },
    {
      plan:'PRO',
      description:'home.plans.plan-3.description',
      price:'$9,250.00',
      month:3,
      list:[
        'home.plans.plan-3.li.li-1',
        'home.plans.plan-3.li.li-2',
        'home.plans.plan-3.li.li-3',
        'home.plans.plan-3.li.li-4',
        'home.plans.plan-3.li.li-5',
        'home.plans.plan-3.li.li-6',
        'home.plans.plan-3.li.li-7',
        'home.plans.plan-3.li.li-8',
        'home.plans.plan-3.li.li-9',
        'home.plans.plan-3.li.li-10',
      ],
    },
  ]) 

}
