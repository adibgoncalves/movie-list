import { Component, Input, OnInit } from '@angular/core';
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

  @Input() midias: Midia[] = []
  
  constructor(private servico: MidiaService) { }

  deleteMidia(id: number) {
    let confirm: any = window.confirm('Deseja excluir a mídia?');
    if(confirm === true) {
      this.servico.deleteMidiaById(id).subscribe({
        next: (midia: Midia) => console.log(midia),
        error: (erro) => console.log(erro),
        complete: () => console.log('Mídia deletada')
      })

      this.servico.getMidias().subscribe({
        next: (midias: Midia[]) => this.midias = midias,
        error: (erro) => console.log(erro),
        complete: () => console.log('Mídias carregadas')
      })
  
      document.location.reload();
    }
  }

  ngOnInit(): void {
    this.servico.getMidias().subscribe({
      next: (midias: Midia[]) => this.midias = midias,
      error: (erro) => console.log(erro),
      complete: () => console.log('Mídias carregadas')
    })
  }
}
