import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta} from '../app/interfaces/pregunta.interface';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  info:Pregunta={};
  cargada=false;
  constructor(private http:HttpClient){
    console.log("servicio corriendo");
    this.http.get(environment.API_URL+'questions').subscribe((resp:Pregunta) => {
       this.info=resp;
       this.cargada=true;

    });



  }

}
