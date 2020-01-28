import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../../../shared/consultas/model/consulta';
import { ConsultaService } from '../../../../shared/consultas/service/consulta.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css']
})
export class ListarConsultasComponent implements OnInit {
  
  private titulo: string = "Listado de consultas";
  listarConsultas : any;

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.consultaService.getListarConsultasAbogados().subscribe(
      consultas => {this.listarConsultas = consultas}
    );
  }

}
