import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Alumno, TipoSeccion } from 'src/app/modelos/alumno';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent  {
  public sct: Array<string>= [
  'A',
  'B',
  'C',
  'D',
  ]
  public Alumno: Alumno = {
    id: 0, // input tipe number
    rut: '',  // input tipe text
    nombre: '',  // input tipe text
    apellido: '',  // input tipe text
    edad: 0, // input tipe number
    Seccion: 'A' // Select
  }
  @Output() public enviarAlumno = new EventEmitter<Alumno>()
  public guardarElemento(){
    const copia: Alumno = {
      ...this.Alumno
    }
    this.enviarAlumno.emit(copia);
  }

  public cId(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.Alumno.id = Number.parseInt(ele.value) || 0;
  }

  public cRut(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.Alumno.rut = ele.value;
  }
  public cNombre(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.Alumno.nombre = ele.value;
  }
  public cApellido(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.Alumno.apellido = ele.value;
  }
  public cEdad(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.Alumno.edad = Number.parseInt(ele.value) || 0;
  }
  public cSeccion(evento: Event): void{
    const ele = evento.target as HTMLSelectElement;
    this.Alumno.Seccion = ele.value as TipoSeccion;
  }
}
