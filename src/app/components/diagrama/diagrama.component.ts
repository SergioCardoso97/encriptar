import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagrama',
  templateUrl: './diagrama.component.html',
  styleUrls: ['./diagrama.component.scss']
})
export class DiagramaComponent implements OnInit {

  listSemanas: any[] = []

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 30; i++) {
      this.listSemanas.push({
        semana: "S"+i
      })
    }
  }

}
