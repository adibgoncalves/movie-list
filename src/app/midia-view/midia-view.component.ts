import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Midia } from '../midia';
import { MidiaService } from '../midia.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-midia-view',
  templateUrl: './midia-view.component.html',
  styleUrls: ['./midia-view.component.css']
})
export class MidiaViewComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  
  midia: Midia = {
    id: 0,
    nome: "",
    anotacao: "",
    ano: "",
    tipo: "",
    genero: "",
    duracao: 0,
    poster: "",
    assistido: ""
  }

  assistido: string = "";

  constructor(private servico: MidiaService, private route: ActivatedRoute, private router: Router) { }

  deleteMidia(id: number) {
    let confirm: any = window.confirm('Deseja excluir a mídia?');
    if(confirm === true) {
      this.servico.deleteMidiaById(id).subscribe({
        next: (midia: Midia) => {
          this.router.navigate(['/midia-list'])
        },
        error: (erro) => console.log(erro),
        complete: () => console.log('Mídia deletada')
      })
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servico.getMidiaById(id).subscribe({
      next: (midia: Midia) => this.midia = midia,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisição finalizada')
    })    
  }
}
