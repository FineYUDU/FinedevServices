import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateService } from '../../../core/services/translate.service';

import { ThemeService } from '../../../core/services/theme.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    RouterModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );

}
