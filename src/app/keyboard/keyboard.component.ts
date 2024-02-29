import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="keyboard">
      <button
        *ngFor="let key of KEYS"
        [ngClass]="{
          'buttonKey': true,
          'active': correctLetters.includes(key),
          'inactive': wrongLetters.includes(key)
        }"
        (click)="updateLetters(key)"
        [disabled]="correctLetters.includes(key) || wrongLetters.includes(key) || disabled"
        [style.cursor]="
          disabled ? 'not-allowed' 
            : correctLetters.includes(key) ? 'not-allowed'
            : wrongLetters.includes(key) ? 'not-allowed'
            : 'pointer'
        "
        [style.borderColor]="
          gameService.theme === 'light' ? 'black' : 'white'
        "
        [style.color]="
          gameService.theme === 'light' ? 'black' : 'white'
        "
      >
        {{key}}
      </button>
    </div>
  `,
  styleUrl: './keyboard.component.css'
})

export class KeyboardComponent {
  KEYS: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  gameService: GameService = inject(GameService);

  @Input() disabled!: boolean;
  @Input() chosenLetters!: string[];
  @Input() correctLetters!: string[];
  @Input() wrongLetters!: string[];

  @Output() updateChosenLetters = new EventEmitter<string>();

  updateLetters(value: string){
    this.updateChosenLetters.emit(value);
  }

  
}
