import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Respuesta} from '../app/interfaces/respuesta';

const API_URL = 'https://survey-proyect.herokuapp.com/';



@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private http:HttpClient) { }

  private ArrayG: Array<Respuesta>;


  guardarRespuestas(data: any):  Observable<Respuesta>  {

     console.log("serv corre!")

      return this.http.post<Respuesta>(API_URL + 'test_response', data);
    

  }




}
