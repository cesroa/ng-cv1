import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from "./components/principal/principal.component";
import { MeComponent } from "./components/me/me.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { LogrosComponent } from "./components/logros/logros.component";
import { SoftwareComponent } from "./components/software/software.component";


const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "me",
    component: MeComponent
  },
  {
    path: "experiencia",
    component: ExperienciaComponent
  },
  {
    path: "logros",
    component: LogrosComponent
  },
  {
    path: "educacion",
    component: EducacionComponent
  },
  {
    path: "conocimientos",
    component: ConocimientosComponent
  },
  {
    path: "software",
    component: SoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
