import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environment/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.css']
})
export class EditarContaComponent implements OnInit {

  mensagem: string ='';
  tipo: string[] = ['Conta a pagar', 'Conta a receber'];
  categoria: string[] = ['Despesas de casa', 'Cartões de credito', 'Alimentação', 'Saúde', 'Lazer', 'Viagens', 'Trabalho e Renda', 'Outros']            

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ){}

  formEdicao = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    observacao: new FormControl(''),
    categoria: new FormControl('', [Validators.required])
  })

  get form(): any{
    return this.formEdicao.controls;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.spinner.show();
    this.httpClient.get(environment.apiContas + "/" + id)
      .subscribe({
        next: (data: any) => {
          this.formEdicao.patchValue(data);
        }
      }).add(() => {
        this.spinner.hide();
      })
  }

  onSubmit(): void {
    this.spinner.show();
    this.httpClient.put(environment.apiContas + '/atualizar-conta', this.formEdicao.value)
      .subscribe({
        next: (data: any) =>{
          this.mensagem = `Conta ${data.nome}, atualizada com sucesso.`
        }
      }).add(() =>{
        this.spinner.hide();
      })
  }
}
