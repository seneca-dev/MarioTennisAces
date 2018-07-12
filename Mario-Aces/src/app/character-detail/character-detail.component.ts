import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private location: Location) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.characterService.getCharacter(name).subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }

}
