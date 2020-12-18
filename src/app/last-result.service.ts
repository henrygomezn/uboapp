import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Resultados} from '../app/interfaces/resultados.interface';
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LastResultService {


  constructor(private http:HttpClient){ }


   getJson(){
     console.log("corriendo! last");
     return this.http.get(environment.API_URL+ 'test_response/last_result');
   }




}
