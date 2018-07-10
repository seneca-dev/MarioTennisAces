import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  character: Character = {
    name: 'Mario',
    class: 'All-Around'
  }

  characters = CHARACTERS;

  selectedCharacter: Character;

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  constructor() { }

  ngOnInit() {
  }

}
