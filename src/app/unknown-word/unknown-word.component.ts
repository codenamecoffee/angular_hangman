import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-unknown-word',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="container3">
      <span 
        class="placeForLetters"
        *ngFor="let letter of secretWord"
        [style.borderBottomColor]="
          gameService.theme === 'light' ? 'black' : 'white'
        "  
      >
        <span
          [style.visibility]="
            chosenLetters.includes(letter)||showWord
              ? 'visible'
              : 'hidden'
          "
          [style.color]="
            !chosenLetters.includes(letter)||showWord
              ? 'darkred'
              : gameService.theme === 'light' ? 'skyblue' : 'gray'
          "
        >
          {{letter}}
        </span>
      </span>
    </div>
  `,
  styleUrl: './unknown-word.component.css'
})

export class UnknownWordComponent {
  gameService: GameService = inject(GameService);
  
  @Input() chosenLetters!: string[];
  @Input() secretWord!: string[];
  @Input() showWord!: boolean;

}
