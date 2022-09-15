import { Component, Input, EventEmitter , Output} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent {

  @Input() public Alumnos!: Array<Alumno>;
  @Output() public posIndex = new EventEmitter<number>();
}
