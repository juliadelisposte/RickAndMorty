import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  public allCharacters: any[] = [];

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  setCharacters(characters: any[]): void {
    this.allCharacters = characters;
  }

  getCharactersList(): any[] {
    return this.allCharacters;
  }
}
