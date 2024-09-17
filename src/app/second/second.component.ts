import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../shared/header/header.component';
import { CharacterService } from '../services/character.service';
import { NoResultsComponent } from '../no-results/no-results.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [NoResultsComponent, CardHeaderComponent, HeaderComponent, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  favorites: any[] = [];
  filteredFavorites: any[] = [];

  @Input() showReturnButton: boolean = false;

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
      this.filteredFavorites = this.favorites;
    }
  }

  filterCharacters(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (searchTerm) {
      this.filteredFavorites = this.favorites.filter(character =>
        character.name.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredFavorites = this.favorites;
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

  saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(character: any): boolean {
    return this.favorites.some(fav => fav.id === character.id);
  }

  goToHome(): void {
    this.router.navigate(['/first-component']);
  }
}
