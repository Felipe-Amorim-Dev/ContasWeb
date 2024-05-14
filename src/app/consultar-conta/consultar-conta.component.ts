import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consultar-conta',
  templateUrl: './consultar-conta.component.html',
  styleUrls: ['./consultar-conta.component.css']
})
export class ConsultarContaComponent implements OnInit {

  contas: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit(): void {
    this.spinner.show();
    this.httpClient.get(environment.apiContas + '/consultar-conta')
      .subscribe({
        next: (data) => {
          this.contas = data as any[];
        }
      }).add(() =>{
        this.spinner.hide();
      })
  }

  onDelete(id: string): void {
    if (window.confirm('Deseja realmente excluir a conta?'))

      this.spinner.show();

      this.httpClient.delete(environment.apiContas + "/" + id)
        .subscribe({  
          next: (data: any) => {
            this.mensagem = `Conta ${data.nome}, excluida com sucesso.`
            this.ngOnInit();
          }
        }).add(() => {
          this.spinner.hide();
        })
  }
}
