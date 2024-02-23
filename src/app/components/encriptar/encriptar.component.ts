import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EncriptarService } from 'src/app/Services/encriptar.service';
@Component({
  selector: 'app-encriptar',
  templateUrl: './encriptar.component.html',
  styleUrls: ['./encriptar.component.scss']
})
export class EncriptarComponent implements OnInit {


  encriptar: string = '';
  encriptado: string = ''
  desencriptar: string = '';
  desencriptado: string = '';

  constructor(
    private encriptarService: EncriptarService

  ) { }

  ngOnInit(): void {

  }

  encriptarPalabra(){
    this.encriptado = this.encriptarService.Encrypt(this.encriptar, "363c246596532b1db9c0129e741c14510c7296b2");
    console.log('encriptado',this.encriptado);
  }

  desencriptarPalabra(){
    this.desencriptado = this.encriptarService.Decrypt(this.desencriptar, "363c246596532b1db9c0129e741c14510c7296b2");
    console.log('desencriptado',this.desencriptar);
  }
  @ViewChild("myNameElem") myNameElem!: ElementRef;
  getValue() {
    console.log("Elemento -> ",this.myNameElem);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Divide Time with a year
    const d = new Date().getHours();
    //let years = Math.round(d.getTime() / minute);
    this.myNameElem.nativeElement.innerHTML = d;
  }

}
