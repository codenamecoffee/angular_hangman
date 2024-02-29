import { Injectable } from '@angular/core';

import wordList from '../../wordList.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  theme: string = 'light';

  toggleTheme():void{
    if(this.theme === 'light'){
      document.body.style.backgroundColor = 'black';
      this.theme = 'dark';
    }
    else {
      document.body.style.backgroundColor = 'white';
      this.theme = 'light';
    };
    console.log("Theme: " + this.theme);
  };

  getNewWord(): string[]{
    return wordList[Math.floor(Math.random()*wordList.length)].split('');
  };
}
