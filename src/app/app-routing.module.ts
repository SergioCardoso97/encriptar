import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { GanttComponent } from './components/gantt/gantt.component';
import { WordComponent } from './components/word/word.component';
import { VisorComponent } from './components/visor/visor.component';

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
  },
  {
    path: 'visor',
    component: VisorComponent
  },
  {
    path: '',
    component: VisorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
