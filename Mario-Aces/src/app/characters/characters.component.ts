import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-characters';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[];

  selectedCharacter: Character;

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

}
