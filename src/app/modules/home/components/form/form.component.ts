import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public endereco !: Endereco;
  public cep: string = "";

  constructor(private http: HttpClient){}

   getData(): Observable<any> {
    let url = `https://viacep.com.br/ws/${this.cep}/json/`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscar(){
    this.getData().subscribe((data) => {
      this.endereco = {
        rua: data['logradouro'],
        bairro: data['bairro'],
        cidade: data['localidade'],
        estado: data['uf'],
        cep: data['cep'],
      };
    });
  }
}
