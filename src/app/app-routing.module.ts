import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { GanttComponent } from './components/gantt/gantt.component';
import { WordComponent } from './components/word/word.component';

const routes: Routes = [
  {
    path: 'encriptar',
    component: EncriptarComponent
  },
  {
    path: 'gantt',
    component: GanttComponent
  },
  {
    path: 'word',
    component: WordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
