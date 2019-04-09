import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MeComponent } from './components/me/me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LogrosComponent } from './components/logros/logros.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { SoftwareComponent } from './components/software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavigationComponent,
    MeComponent,
    ExperienciaComponent,
    LogrosComponent,
    EducacionComponent,
    ConocimientosComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
