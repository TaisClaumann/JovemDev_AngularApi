import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moeda } from '../../models/moeda';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public valor: number = 0;
  public moedas!: Moeda;

  constructor(private http: HttpClient){}

  getMoedas(): Observable<any>{
    let url = 'https://api.hgbrasil.com/finance?format=json-cors&key=1a5e6380';
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }

  public calcular(){
    this.getMoedas().subscribe((moedas) => {
      const realParaDolar = (this.valor / moedas.USD.buy).toFixed(2);
      const realParaEuro = (this.valor / moedas.EUR.buy).toFixed(2);
      const realParaPeso = (this.valor / moedas.ARS.buy).toFixed(2);

      this.moedas = {
        dolar: Number(realParaDolar),
        euro: Number(realParaEuro),
        peso: Number(realParaPeso)
      }
    });
  }
}
