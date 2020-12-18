import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  constructor(private http: HttpClient) { }


}
