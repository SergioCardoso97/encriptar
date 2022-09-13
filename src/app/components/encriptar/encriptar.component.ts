import { Component, OnInit } from '@angular/core';
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
    this.encriptado = this.encriptarService.Encrypt(this.encriptar, "0X47&$#7");
    console.log('encriptado',this.encriptado);
  }

  desencriptarPalabra(){
    this.desencriptado = this.encriptarService.Decrypt(this.desencriptar, "0X47&$#7");
    console.log('desencriptado',this.desencriptar);
  }

}
