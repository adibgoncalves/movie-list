import { ActivatedRoute, Router } from '@angular/router';
import { Midia } from './../midia';
import { Component, Input, OnInit } from '@angular/core';
import { MidiaService } from '../midia.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-midia-form',
  templateUrl: './midia-form.component.html',
  styleUrls: ['./midia-form.component.css']
})
export class MidiaFormComponent implements OnInit {

  id?: number;
  isNew: boolean = true;

  formMidia: FormGroup = this.formBuilder.group({
    id: [0],
    nome: ['', Validators.required],
    ano: [],
    tipo: ['', Validators.required],
    genero: ['', Validators.required],
    duracao: [],
    anotacao: [],
    poster: [],
    assistido: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private servico: MidiaService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!) : 0;
    if(this.id > 0) {
      this.isNew = false;
      this.servico.getMidiaById(this.id).subscribe({
        next: (midia: Midia) => {
          this.formMidia.setValue(midia);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Dados da midia existente carregados')
      })
    }else {
      this.isNew = true;
    }
  }

  saveMidia(): void {
    if(this.isNew) {
      this.servico.createMidia(this.formMidia.value).subscribe({
        next: (midia: Midia) => {
          this.router.navigate(['/midia-list'])
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('A mídia foi salva.')
      })
    }else {
      this.servico.updateMidia(this.formMidia.value).subscribe({
        next: (midia: Midia) => {
          this.router.navigate(['/midia-list']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('A mídia foi atualizada.')
      })
    }
  }
}
