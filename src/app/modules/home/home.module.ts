import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrupadorComponent } from './pages/agrupador/agrupador.component';
import { FormComponent } from './components/form/form.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgrupadorComponent,
    FormComponent,
    TabelaComponent
  ],
  exports: [
    AgrupadorComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
