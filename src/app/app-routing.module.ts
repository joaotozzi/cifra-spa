import { ListaCifrasComponent } from './lista-cifras/lista-cifras.component';
import { CifraComponent } from './cifra/cifra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'cifras', component: ListaCifrasComponent},
  {path: 'cifras/:id', component: CifraComponent},
  {path:'', redirectTo: '/cifras', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
