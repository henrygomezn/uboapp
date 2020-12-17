import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Resultados} from '../app/interfaces/resultados.interface';


const API_URL = 'https://survey-proyect.herokuapp.com/';



@Injectable({
  providedIn: 'root'
})
export class LastResultService {
  

 constructor(private http: HttpClient){}
 
  getJson() {
   

    return this.http.get(API_URL + 'test_response/last_result');
  }



 }


 
