import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../app/models/user.model';
import { map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { infPag} from '../app/interfaces/info-pagina.interface'
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  info:infPag={};
  cargada=false;


  constructor(private http:HttpClient){
    console.log("servicio corriendo");
    this.http.get(environment.API_URL+'authUser').subscribe((resp:infPag) => {
       this.info=resp;
       this.cargada=true;
       console.log(resp);
    });



  }





}
