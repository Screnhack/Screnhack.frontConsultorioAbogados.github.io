import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ListarConsultasComponent } from './componentes/listar-consultas/listar-consultas.component';
import { CrearConsultasComponent } from './componentes/crear-consultas/crear-consultas.component';

@NgModule({
  declarations: [
    ConsultasComponent, 
    ListarConsultasComponent, 
    CrearConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
