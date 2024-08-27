import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';
import { ThemeService } from '../../../core/services/theme.service';


@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );

  public liSubtitle = signal<string[]>([
    "home.hero.li-1",
    "home.hero.li-2",
    "home.hero.li-3",
  ])

}
