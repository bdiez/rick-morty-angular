import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  @Input() character!: Character;

}
