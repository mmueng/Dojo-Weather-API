import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'seattle' },
  { path: '**', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
