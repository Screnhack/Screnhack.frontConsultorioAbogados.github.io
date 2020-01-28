import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../../../../shared/consultas/model/consulta';
import { ConsultaService } from '../../../../shared/consultas/service/consulta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-consultas',
  templateUrl: './crear-consultas.component.html',
  styleUrls: ['./crear-consultas.component.css']
})
export class CrearConsultasComponent implements OnInit {

  private titulo: string = "Crear consulta de abogado";
  private consultaAbogado: Consulta = new Consulta();
  apiError: boolean = true;
  apiErrorMensaje: string = '';

  constructor(
    private consultaService: ConsultaService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  public crearConsultaAbogado(): void {
    swal.fire({
      title: 'Esta Seguro de Guardar la Consulta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((resultado) => {
      if (resultado.value) {
        this.consultaService.postCrearConsultaAbogado(this.consultaAbogado).subscribe(
          response => {
            if (response != null) {
              swal.fire({
                title: 'Registro de Consulta Abogado Exitosa',
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
