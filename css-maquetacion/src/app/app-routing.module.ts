import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntosComponent } from './components/puntos/puntos.component';
import { UberComponent } from './components/uber/uber.component';

const routes: Routes = [
  {
    path: 'puntos',
    component: PuntosComponent,
  },
  {
    path: 'uber',
    component: UberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
