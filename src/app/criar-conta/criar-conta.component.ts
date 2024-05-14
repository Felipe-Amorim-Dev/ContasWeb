import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent {


      mensagem: string = '';
      tipo: string[] = ['Conta a pagar', 'Conta a receber'];
      categoria: string[] = ['Despesas de casa', 'Cartões de credito', 'Alimentação', 'Saúde', 'Lazer', 'Viagens', 'Trabalho e Renda', 'Outros']            

      constructor(
        private httpClient: HttpClient,
        private spinner: NgxSpinnerService
      ){}

      formCriarConta = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        valor: new FormControl('', [Validators.required]),
        tipo: new FormControl('', [Validators.required]),
        observacao: new FormControl(''),
        categoria: new FormControl('', [Validators.required])
      });

      get form(): any {
        return this.formCriarConta.controls;
      }      

      onSubmit(): void {        
        this.spinner.show();
        this.httpClient.post(environment.apiContas + '/cadastrar-conta', this.formCriarConta.value)
          .subscribe({
            next: (data: any) => {                                          
              this.mensagem = `Conta ${data.nome}, Criada com sucesso.`
              this.formCriarConta.reset();
            },            
          }).add(() => {
            this.spinner.hide();
          });
      }
}
