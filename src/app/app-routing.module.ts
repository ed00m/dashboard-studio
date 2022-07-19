import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresComponent } from './service/indicadores/indicadores.component';
import { AbacusComponent } from './service/abacus/abacus.component';
import { DashboardComponent } from './service/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'abacus', component: AbacusComponent },
  { path: 'indicadores', component: IndicadoresComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/indicadores', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
