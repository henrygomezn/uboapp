export interface infPag {
    id?:                    number;
    rut?:                   string;
    nombre?:                string;
    apellido?:              string;
    correo?:                string;
    sexo?:                  string;
    authorities?:           string[];
    enabled?:               boolean;
    accountNonExpired?:     boolean;
    accountNonLocked?:      boolean;
    credentialsNonExpired?: boolean;
    username?:              string;
}