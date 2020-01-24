import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/model/consulta';
import { ConsultaService } from '../shared/service/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-consultas',
  templateUrl: './editar-consultas.component.html',
  styleUrls: ['./editar-consultas.component.css']
})
export class EditarConsultasComponent implements OnInit {

  private titulo: string = 'Editar Consulta de Cliente'
  private consultaAbogado: Consulta = new Consulta();
  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarConsultaAbogado();
  }

  public cargarConsultaAbogado() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        this.consultaService.getConsultaAbogado(id).subscribe(
          (consulta) => this.consultaAbogado = consulta
        )
      }
    )
  }

}
