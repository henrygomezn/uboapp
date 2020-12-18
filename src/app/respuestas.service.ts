import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Respuesta} from '../app/interfaces/respuesta';
import { ResponseTest} from '../app/interfaces/responseTest.interface';
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private http:HttpClient) { }

  private ArrayG: Array<ResponseTest>;


  guardarRespuestas(data: any):  Observable<ResponseTest>  {

     console.log("serv corre!")

      return this.http.post<ResponseTest>(environment.API_URL + 'test_response', data);


  }




}
