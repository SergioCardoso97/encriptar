import { Component } from '@angular/core';
import { ArchivoServices } from './Services/archivos.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'encriptar';
  filtro: any = {
    IdGrupo: 0,
    IdSemestre: 0,
    IdMateria: 0,
    IdParcial: 0
  }
  /**
   *
   */
  constructor(private archivos: ArchivoServices) {
    sessionStorage.setItem("test","test");
    let objeto = {
      name: "sergio",
      latname: "cardoso"
    }
    Cookie.set('cookieName', JSON.stringify(objeto));
    console.log("cookie -> ", JSON.parse(Cookie.get('cookieName')));

  }
  async buscarExcel(){
    let res = await this.archivos.consultarExcel(this.filtro);
    console.log("res -> ", res);
    // var blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    // var url = window.URL.createObjectURL(blob);
    // window.open(url);

  }
}
