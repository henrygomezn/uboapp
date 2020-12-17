import './areaPerteneciente.interface';
import { AreaPerteneciente } from '../interfaces/areaPerteneciente.interface';
export interface Resultados {
    id?:                 number;
    areaPerteneciente?:  AreaPerteneciente;
    puntajeObtenido?:    number;
    porcentajeAsociado?: number;
    createdAt?:          Date;
}