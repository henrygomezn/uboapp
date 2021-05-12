import { Injectable } from '@angular/core';
import {CountryI, CityI} from './models/model.interface'


@Injectable()
export class DataService {

  private countries : CountryI[] = [
    {
      id: 0,
      name: 'Escoge Facultad de interés'
    }
    ,
    {
      id: 1,
      name: 'FACULTAD DE CIENCIAS SOCIALES'
    },
    {
      id: 2,
      name: 'FACULTAD DE EDUCACIÓN'
    },
    {
      id: 3,
      name: 'FACULTAD DE INGENIERÍA, CIENCIA Y TECNOLOGÍA'
    },
    {
      id: 4,
      name: 'FACULTAD DE CIENCIAS DE LA SALUD'
    },
    {
      id: 5,
      name: 'FACULTAD DE CIENCIAS MÉDICAS'
    }
  ];

  private cities : CityI[] = [
    {
      id: 1,
      countryId:1,
      name:'Derecho'
    },
    {
      id: 2,
      countryId:1,
      name:'Periodismo'
    },
    {
      id: 3,
      countryId:1,
      name:'Psicología'
    },
    {
      id: 4,
      countryId:1,
      name:'Trabajo Social'
    },
    {
      id: 5,
      countryId:2,
      name:'Pedagogía en Educación Diferencial con Mención'
    },
    {
      id: 6,
      countryId:2,
      name:'Pedagogía en Educación Física, Deporte y Recreación'
    },
    {
      id: 7,
      countryId:2,
      name:'Pedagogía en Inglés para Enseñanza Básica y Media'
    },
    {
      id: 8,
      countryId:2,
      name:'Pedagogía en Educación General Básica con Mención'
    },
    {
      id: 9,
      countryId:2,
      name:'Pedagogía en Historia y Geografía en Enseñanza Media'
    },
    {
      id: 10,
      countryId:2,
      name:'Pedagogía en Educación Parvularia'
    },
    {
      id: 11,
      countryId:2,
      name:'Licenciatura en Ciencias de la Actividad Física y Deporte'
    },
    {
      id: 12,
      countryId:3,
      name:'Ingeniería Comercial'
    },
    {
      id: 13,
      countryId:3,
      name:'Ingeniería Civil Industrial'
    },
    {
      id: 14,
      countryId:3,
      name:'Ingeniería Civil en Medio Ambiente y Sustentabilidad'
    },
    {
      id: 15,
      countryId:3,
      name:'Ingeniería en Informática'
    },
    {
      id: 16,
      countryId:3,
      name:'Contador Auditor'
    },
    {
      id: 17,
      countryId:3,
      name:'Ingeniería en Realidad Virtual y Diseño de Juegos Digitales'
    },
    {
      id: 18,
      countryId:3,
      name:'Ingeniería en Geomensura y Cartografía'
    },
    {
      id: 19,
      countryId:4,
      name:'Fonoaudiología'
    },
    {
      id: 20,
      countryId:4,
      name:'Kinesiología'
    },
    {
      id: 21,
      countryId:4,
      name:'Nutrición y Dietética'
    },
    {
      id: 22,
      countryId:4,
      name:'Tecnología Médica'
    },
    {
      id: 23,
      countryId:4,
      name:'Terapia Ocupacional'
    },
    {
      id: 24,
      countryId:5,
      name:'Obstetricia y Puericultura'
    },
    {
      id: 25,
      countryId:5,
      name:'Química y Farmacia'
    },
    {
      id: 26,
      countryId:5,
      name:'Enfermería'
    },
    {
      id: 27,
      countryId:5,
      name:'Medicina Veterinaria'
    },
    {
      id: 28,
      countryId:5,
      name:'Medicina'
    }
  ];


   getCountries(): CountryI[]{
     return this.countries;
   }

   getCities(): CityI[]{
     return this.cities;
   }

}
