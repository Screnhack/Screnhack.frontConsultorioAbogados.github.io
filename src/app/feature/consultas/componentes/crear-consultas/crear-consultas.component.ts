import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-consultas',
  templateUrl: './crear-consultas.component.html',
  styleUrls: ['./crear-consultas.component.css']
})
export class CrearConsultasComponent implements OnInit {

  private titulo: string = "Crear consulta de abogado";
  constructor() { }

  ngOnInit() {
  }

}
