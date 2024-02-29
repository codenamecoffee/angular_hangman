import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingComponent } from './drawing/drawing.component';
import { UnknownWordComponent } from './unknown-word/unknown-word.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DrawingComponent,
    UnknownWordComponent,
    KeyboardComponent
  ],
 template: `
  <div class="container1">
    <div 
      class="text"
      [style.color]="
        gameService.theme === 'light'
          ? 'black'
          : 'white'
      "
    >
      <p *ngIf="wonGame">Winner! - Refresh or press 'Enter' to try again</p>
      <p *ngIf="loseGame">Nice Try - Refresh or press 'Enter' to try again</p>
    </div>
    <app-drawing
      [mistakes]="wrongLetters.length"
    >
    </app-drawing>
    <app-unknown-word
      [chosenLetters]="chosenLetters"
      [secretWord]="secretWord"
      [showWord]="loseGame"
    >
    </app-unknown-word>
    <app-keyboard
      [style.display]="'contents'"
      [disabled]="loseGame || wonGame"
      [chosenLetters]="chosenLetters"
      [correctLetters]="correctLetters"
      [wrongLetters]="wrongLetters"
      (updateChosenLetters)="addChosenLetter($event)"
    >
    </app-keyboard>
  </div>
 `,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'angular-hangman';

  gameService: GameService = inject(GameService);

  @HostListener('window:keydown', ['$event'])

  keydownHandler(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Enter') {
      this.chosenLetters = [];
      this.updateLetters(this.chosenLetters);
      this.updateGameState();
      this.secretWord = this.gameService.getNewWord();
      console.log(this.secretWord.join(''));
    };
    if(key.match(/^[a-z]$/)){
      event.preventDefault();
      this.addChosenLetter(key);
    };
  };

  updateGameState(): void {
    this.loseGame = this.wrongLetters.length >= 6;
    this.wonGame = this.secretWord
      .every(letter => this.chosenLetters.includes(letter));
  }

  updateLetters(chosenLetters: string[]): void {
    this.correctLetters = chosenLetters.filter(letter => this.secretWord.includes(letter));
    this.wrongLetters = chosenLetters.filter(letter => !this.secretWord.includes(letter));
  }

  addChosenLetter(letter: string): void {
    if(this.chosenLetters.includes(letter)||this.loseGame||this.wonGame){
      return
    };
    this.chosenLetters = [...this.chosenLetters, letter];
    this.updateLetters(this.chosenLetters);
    this.updateGameState();
    if(this.loseGame || this.wonGame) {
      window.scrollTo(0,0);
    }
  };

  secretWord: string[] = [];
  chosenLetters: string[] = [];
  correctLetters: string[] = [];
  wrongLetters: string[] = [];
  loseGame: boolean = false;
  wonGame: boolean = false;

  ngOnInit(): void {
    this.secretWord = this.gameService.getNewWord();
    console.log(this.secretWord.join(''));
  }

}
