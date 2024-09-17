import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-header',
  standalone: true,
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent {
  @Input() title: string = '';
  @Output() search = new EventEmitter<Event>();

  onSearch(event: Event): void {
    this.search.emit(event);
  }
}
