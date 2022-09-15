import { Component, NgModule } from '@angular/core';
import { Alumno } from './modelos/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public primeraImagen: string = 'https://i.pinimg.com/originals/18/d7/fa/18d7fa976c480fdf29e11ff90c823bac.png';
  public segundaImagen: string = 'https://pbs.twimg.com/media/EsMJa80XAAQ2b24?format=jpg&name=large';
  public terceraImagen: string = 'https://https://static.wixstatic.com/media/a604ca_b08dba561b73459fbaa5fce71c0e6947.jpg/v1/fill/w_600,h_812,al_c,q_90/a604ca_b08dba561b73459fbaa5fce71c0e6947.jpg'

  public elementosGuardados: Array<Alumno> = [];

  public listaAlumnos: Array<Alumno> = [
    {
      id: 1,
      rut: '21.525.235-2',
      nombre: 'JUAN',
      apellido: 'gomez',
      edad: 19,
      Seccion: 'A',
    },
    {
      id: 2,
      rut: '20.829.203-6',
      nombre: 'PEDRO',
      apellido: 'muñoz',
      edad: 22,
      Seccion:'C',
    }
  ]


  public escucharAlumno(nuevoA: Alumno): void {
    this.listaAlumnos.push(nuevoA);
  }
  public borrarElemento(pos: number): void {
    this.elementosGuardados.splice(pos,1);
    console.log('La pos es', pos);
  }









}
