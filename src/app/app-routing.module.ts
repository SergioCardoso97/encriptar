import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { GanttComponent } from './components/gantt/gantt.component';

const routes: Routes = [
  {
    path: 'encriptar',
    component: EncriptarComponent
  },
  {
    path: 'gantt',
    component: GanttComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
