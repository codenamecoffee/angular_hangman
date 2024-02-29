import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <button
      [ngClass]="{
        'theme-btn': true
      }"
      (click)="gameService.toggleTheme()"
      [style.backgroundColor]="
        gameService.theme === 'light' ? 'whitesmoke' : 'gray'
      "
      [style.color]="
        gameService.theme  === 'light' ? '#000' : 'blue'
      "
      [style.borderColor]="
        gameService.theme  === 'light' ? 'black' : 'black'
      "
    >
      {{gameService.theme  === 'light' ? 'NightMode:Off' : 'NightMode:On'}}
    </button>
  `,
  styleUrl: './theme-button.component.css'
})

export class ThemeButtonComponent {
  gameService: GameService = inject(GameService);
  @Input() dynamicText!: string;
}
