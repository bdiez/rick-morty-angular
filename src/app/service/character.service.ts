import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../model/character';
import { ResponseApi } from '../model/responseApi';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  /**
   * Find the list of all characters
   * @returns List of all characters
   */
  findCharacters(){
    console.log(environment.apiUrl + '/character');
      return this.http.get<ResponseApi>(environment.apiUrl + '/character')
  }
}
