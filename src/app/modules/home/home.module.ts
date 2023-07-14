import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrupadorComponent } from './pages/agrupador/agrupador.component';
import { FormComponent } from './components/form/form.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AgrupadorComponent,
    FormComponent,
    TabelaComponent
  ],
  exports: [
    AgrupadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
