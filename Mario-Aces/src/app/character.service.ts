import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService: MessageService) { }

  getCharacters(): Observable<Character[]> {
    this.messageService.add('CharacterService: fetched characters');
    return of(CHARACTERS);
  }

  getCharacter(name: string): Observable<Character> {
    this.messageService.add(`CharacterService: fetched character name=${name}`);
    return of(CHARACTERS.find(character => character.name === name));
  }
}
