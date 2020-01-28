import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../../../shared/consultas/model/consulta';
import { ConsultaService } from '../../../../shared/consultas/service/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

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


  public editarConsultaAbogado(): void {

    swal.fire({
      title: 'Esta Seguro de Actualizar la Consulta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((resultado) => {
      if (resultado.value) {
        this.consultaService.putCrearConsultaAbogado(this.consultaAbogado).subscribe(
          response => {
            if (response != null) {
              swal.fire({
                title: 'Actualización de Consulta Abogado Exitosa',
                icon: "success",
                timer: 2000,
                showConfirmButton: false
              });
              this.router.navigate(['/consultas/listar']);
            }
          },
          error => {
            swal.fire({
              title: 'Error: ' + error.error.mensaje,
              icon: 'warning',
              timer: 2000,
              showConfirmButton: false
            });
          });
      }
    })
  }

}
