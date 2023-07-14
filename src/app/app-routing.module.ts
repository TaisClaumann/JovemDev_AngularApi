import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { AgrupadorComponent } from './modules/home/pages/agrupador/agrupador.component';
import { HomeComponent } from './modules/hg-finance/pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
