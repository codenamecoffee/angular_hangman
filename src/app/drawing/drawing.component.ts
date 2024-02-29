import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-drawing',
  standalone: true,
  imports: [
    CommonModule,
    ThemeButtonComponent
  ],
  template: `
    <div class="container2">
      <div *ngIf="mistakes>0" class="head"
        [style.borderColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>1" class="hangmanBody"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>2" class="rightArm"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>2" class="rightForeArm"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>3" class="leftArm"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>3" class="leftForeArm"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>4" class="rightLeg"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>4" class="rightCalf"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>5" class="leftLeg"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
      <div *ngIf="mistakes>5" class="leftCalf"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>

      <app-theme-button>
      </app-theme-button>

      <div class="hook"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
			<div class="top"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
			<div class="column"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
			<div class="bottom"
        [style.backgroundColor]="
          gameService.theme === 'light'
            ? 'black'
            : 'white'
        "
      ></div>
    </div>
  `,
  styleUrl: './drawing.component.css'
})

export class DrawingComponent {
  gameService: GameService = inject(GameService);
  @Input() mistakes!:number;
}
