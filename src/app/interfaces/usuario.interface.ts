import { Sexo } from'../interfaces/sexo.interface';
export interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena?: string;
  telefono: string;
  sexo?: Sexo;

  // UserDetails
  authorities?: string[];
  username?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
}
