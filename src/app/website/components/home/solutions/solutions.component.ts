import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { TranslateService } from '../../../../core/services/translate.service';
import { CommonModule } from '@angular/common';


export interface Solutions {
  title:string;
  img?:string;
  description?:string;
}

@Component({
  selector: 'solutions',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  public translateService = inject( TranslateService );

  public solutions = signal<Solutions[]>([
    {
      title:'home.solutions.card-1.title',
      img:'',
      description:'home.solutions.card-1.description',
    },
    {
      title:'home.solutions.card-2.title',
      img:'',
      description:'home.solutions.card-2.description',
    },
    {
      title:'home.solutions.card-3.title',
      img:'',
      description:'home.solutions.card-3.description',
    },
    {
      title:'home.solutions.card-4.title',
      img:'',
      description:'home.solutions.card-4.description',
    },
    {
      title:'home.solutions.card-5.title',
      img:'',
      description:'home.solutions.card-5.description',
    },
    {
      title:'home.solutions.card-6.title',
      img:'',
      description:'home.solutions.card-6.description',
    },
  ]);

}
