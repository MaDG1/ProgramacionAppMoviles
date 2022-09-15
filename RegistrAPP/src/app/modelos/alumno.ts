export interface Alumno {
}

export type TipoSeccion = 'A' | 'B' | 'C' | 'D';
export type TipoClase = 'Lenguaje' | 'Matematicas' | 'Ingles' | 'E.Fisica';
export interface Alumno {
  id: number
  rut: string;
  nombre: string;
  apellido: string;
  edad: number;
  Seccion: TipoSeccion;

}
