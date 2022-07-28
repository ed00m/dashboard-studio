import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'indicadores', component: IndicadoresComponent },
  { path: '**', redirectTo: '/indicadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
