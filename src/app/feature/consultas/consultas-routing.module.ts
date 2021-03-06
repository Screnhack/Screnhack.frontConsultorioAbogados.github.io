import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarConsultasComponent } from './componentes/listar-consultas/listar-consultas.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { CrearConsultasComponent } from './componentes/crear-consultas/crear-consultas.component';
import { EditarConsultasComponent } from './componentes/editar-consultas/editar-consultas.component';


const routes: Routes = [
  { path: '', component: ConsultasComponent },
  { path: 'listar', component: ListarConsultasComponent },
  { path: 'crear', component: CrearConsultasComponent },
  { path: 'consultas/editar/:id', component: EditarConsultasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
