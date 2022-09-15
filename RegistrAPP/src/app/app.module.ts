import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { MostrarImagenComponent } from './componentes/mostrar-imagen/mostrar-imagen.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { SeccionComponent } from './modelos/seccion/seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    MostrarImagenComponent,
    ListarAlumnosComponent,
    FormularioComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
