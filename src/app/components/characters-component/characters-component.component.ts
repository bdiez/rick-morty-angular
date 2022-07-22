import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css']
})
export class CharactersComponentComponent implements OnInit {

  characters: Character[] = [];
  
  constructor(private service:CharacterService) { }

  ngOnInit(): void {
    this.service.findCharacters().subscribe(characters => this.characters = characters.results);
  }

}
