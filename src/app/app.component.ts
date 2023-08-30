import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-test';
  searchText = ""
  selected_count: number = 0
  selected_games: any

  games = [
    {
      name: 'Chess',
      id: 1,
      selected: true,
    },
    {
      name: 'Ludo',
      id: 2,
      selected: false,
    },
    {
      name: 'Snakes & Ladders',
      id: 3,
      selected: false,
    },
    {
      name: 'Carrom',
      id: 4,
      selected: false,
    },
    {
      name: 'Scrabble',
      id: 5,
      selected: false,
    },
    {
      name: 'Monopoly',
      id: 6,
      selected: true,
    },
    {
      name: 'Uno',
      id: 7,
      selected: false,
    },
  ];
}
