import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../shared/header/header.component';
import { CardHeaderComponent } from '../card-header/card-header.component'
import { NoResultsComponent } from '../no-results/no-results.component'

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [NoResultsComponent, CardHeaderComponent, HeaderComponent, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  favorites: any[] = [];
  noResultsFound: boolean = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
    this.loadFavorites();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.filteredCharacters = this.characters;
      this.characterService.setCharacters(this.characters);
    });
  }

  filterCharacters(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm) {
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.noResultsFound = this.filteredCharacters.length === 0;
    } else {
      this.filteredCharacters = this.characters;
      this.noResultsFound = false;
    }
  }

  toggleFavorite(character: any): void {
    const index = this.favorites.findIndex(fav => fav.id === character.id);
    if (index === -1) {
      this.favorites.push(character);
    } else {
      this.favorites.splice(index, 1);
    }
    this.saveFavorites();
  }

  isFavorite(character: any): boolean {
    return this.favorites.some(fav => fav.id === character.id);
  }

  loadFavorites(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
