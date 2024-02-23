import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { Observable, catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchivoServices extends MainService {

    constructor(public http: HttpClient) {
      super(http);
    }
    //Agregar
    // agregar(objeto: any) {
    //     return this.postAsync(this.gatawayArchivos + 'AdminArchivos/adArchivos/Agregar/30ce9955-e4d0-4c45-ac38-33a093900ab0', objeto);
    // }
    // obtenerUrlCompleta(token: string) {
    //     return this.gatawayArchivos + 'AdminArchivos/adArchivos/visor/30ce9955-e4d0-4c45-ac38-33a093900ab0/' + token;
    // }
    consultarExcel(objeto: any)
    {
      return this.postAsync("https://localhost:7071/api/Excel/BuscarExcel", objeto)
    }
    obtenerPDF(){
      return this.getAsync("https://www.proturbiomarspa.com/files/_pdf-prueba.pdf")
    }
    public descargarCertificado(): Observable<any> {
      return this.http.post("aqui va tu endpoint para descargar el archivo, debera recibir un arreglo de bytes",{}, {responseType: "arraybuffer"}).pipe(
        (response: any) => {
          return response;
        },catchError(this.handleErrorGET));
    }
    private handleErrorGET(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      let respuesta: any;
      respuesta.Exito=false;
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        respuesta.Mensaje = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        respuesta.Mensaje = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

      return of(respuesta);
    }

  }
