import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArchivoServices } from 'src/app/Services/archivos.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  tryDoctype:any;
  constructor(private servicio: ArchivoServices, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.servicio
    .descargarCertificado()
    .subscribe({
      next: (response) => {

        if (response.Exito == false) {
          // this.spinner.hide();
          // this.mensaje.titulo='Error'
          // this.mensaje.mensaje='No se pudo imprimir el formato';

          document.getElementById("modalBoton")?.click();
        }
        else {

          var blob = new Blob([response],{type:'application/pdf'});
          let fileURL = URL.createObjectURL(blob);

    //if you have any error then try this
    this.tryDoctype = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);

    //this.tryDoctype = fileURL;
        }
        //ACIONES A REALIZAR DESPUES DE DESCARGAR EL ARCHIVO

      },
      error: (err) => {
        console.log(err);
        // this.spinner.hide();
        // this.mensaje.titulo='Error'
        //     this.mensaje.mensaje="Error en el proceso de impresión";

            document.getElementById("modalBoton")?.click();
      }
    });

  }

}
