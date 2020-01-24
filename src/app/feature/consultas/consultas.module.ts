import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { FormsModule } from '@angular/forms';
import { ListarConsultasComponent } from './componentes/listar-consultas/listar-consultas.component';
import { CrearConsultasComponent } from './componentes/crear-consultas/crear-consultas.component';
import { EditarConsultasComponent } from './componentes/editar-consultas/editar-consultas.component';

@NgModule({
  declarations: [
    ConsultasComponent,
    ListarConsultasComponent,
    CrearConsultasComponent,
    EditarConsultasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
