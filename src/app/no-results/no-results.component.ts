import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  standalone: true,
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.css']
})
export class NoResultsComponent {
  @Input() message: string = 'Nada foi encontrado';
  @Input() subMessage: string = 'Tente realizar uma nova busca.';
  @Input() showReturnButton: boolean = false;

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/first-component']);
  }
}
