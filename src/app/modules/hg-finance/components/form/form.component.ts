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

  public valor: string = "";
  public moeda!: Moeda;

  constructor(private http: HttpClient){}

  getMoedas(): Observable<{ [key: string]: Moeda }>{
    let url = 'https://api.hgbrasil.com/finance?format=json-cors&key=1a5e6380';
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }

  public calcular(){
    this.getMoedas().subscribe((moedas) => {
      const moedasFiltradas = Object.entries(moedas)
      .filter(([key, value]) => ['USD', 'EUR', 'ARS'].includes(key))
      .map(([key, value]) => value);
    });
  }

}
