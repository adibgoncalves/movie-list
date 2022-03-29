import { Midia, MidiaClass } from './../midia';
import { Component, Input, OnInit } from '@angular/core';
import { MidiaService } from '../midia.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-midia-form',
  templateUrl: './midia-form.component.html',
  styleUrls: ['./midia-form.component.css']
})
export class MidiaFormComponent implements OnInit {

  formMidia: any;

  constructor(private servico: MidiaService) { }

  ngOnInit(): void {
    this.createForm(new MidiaClass());
  }

  createForm(midia: Midia) {
    this.formMidia = new FormGroup({
      nome: new FormControl(midia.nome),
      anotacao: new FormControl(midia.anotacao),
      ano: new FormControl(midia.ano),
      tipo: new FormControl(midia.tipo),
      genero: new FormControl(midia.genero),
      duracao: new FormControl(midia.duracao),
      poster: new FormControl(midia.poster),
      assistido: new FormControl(midia.assistido)
    })
  }

  saveMidia(midia: Midia) {
    this.servico.createMidia(this.formMidia).subscribe({
      next: (midia: Midia) => console.log(midia),
      error: (erro) => console.log(erro),
      complete: () => console.log('Mídia deletada')
    })
  }

}
