export interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena?: string;
  sexo?: string;

  // UserDetails
  authorities?: string[];
  username?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
}
