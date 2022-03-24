import { Component } from '@angular/core';
import { faEye, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faEye = faEye;
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  title = 'movie-list';
}
