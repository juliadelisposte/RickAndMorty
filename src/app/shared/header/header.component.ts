import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  favoritesCount: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadFavoritesCount();
  }
  

  currentPage = 'first-component';

setPage(page: string) {
  if (this.currentPage !== page) {
    this.currentPage = page;
    this.navigateTo(`/${page}`);
  }
}


  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  loadFavoritesCount(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      this.favoritesCount = favorites.length;
    }
  }
}
