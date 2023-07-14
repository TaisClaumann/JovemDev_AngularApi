import { Component, Input } from '@angular/core';
import { Moeda } from '../../models/moeda';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  @Input() moedas!: Moeda;
}
