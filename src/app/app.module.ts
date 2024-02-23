import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { FormsModule } from '@angular/forms';
import { GanttComponent } from './components/gantt/gantt.component';
import { DxGanttModule } from 'devextreme-angular';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  Service, Task, Dependency, Resource, ResourceAssignment,
} from './app.service';
import { WordComponent } from './components/word/word.component';
import { VisorComponent } from './components/visor/visor.component';
import { DiagramaComponent } from './components/diagrama/diagrama.component';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@NgModule({
  declarations: [
    AppComponent,
    EncriptarComponent,
    GanttComponent,
    WordComponent,
    VisorComponent,
    DiagramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    DxGanttModule,
    HttpClientModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
