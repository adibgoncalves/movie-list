import { Component, OnInit } from '@angular/core';
import { faEye, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Midia } from '../midia';
import { MidiaService } from '../midia.service';

@Component({
  selector: 'app-midia-list',
  templateUrl: './midia-list.component.html',
  styleUrls: ['./midia-list.component.css']
})
export class MidiaListComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  midias: Midia[] = [];
  
  constructor(private servico: MidiaService) { }

  ngOnInit(): void {
    this.servico.getMidias().subscribe({
      next: (midias: Midia[]) => this.midias = midias,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisição finalizada')
    })
  }

}
