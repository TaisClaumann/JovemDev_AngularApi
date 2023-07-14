import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrupadorComponent } from './modules/home/pages/agrupador/agrupador.component';
import { HomeComponent } from './modules/hg-finance/pages/home/home.component';

const routes: Routes = [
  { path: 'viacep', component: HomeComponent },
  { path: 'hg-finance', component: AgrupadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
