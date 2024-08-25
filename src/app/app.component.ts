import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageService } from './core/services/localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private localStorageService = inject(LocalStorageService); 
}
