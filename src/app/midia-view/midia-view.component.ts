import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Midia } from '../midia';
import { MidiaService } from '../midia.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-midia-view',
  templateUrl: './midia-view.component.html',
  styleUrls: ['./midia-view.component.css']
})
export class MidiaViewComponent implements OnInit {

  midia: Midia = {
    id: 0,
    nome: "",
    anotacao: "",
    ano: "",
    tipo: "",
    genero: "",
    duracao: 0,
    poster: "",
    assistido: 0
  }

  assistido: string = "";

  constructor(private servico: MidiaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servico.getMidiaById(id).subscribe({
      next: (midia: Midia) => this.midia = midia,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisição finalizada')
    })

    if(this.midia.assistido === 1){
      this.assistido = "Sim"
    }else {
      this.assistido = "Não"
    }
    
  }
}
