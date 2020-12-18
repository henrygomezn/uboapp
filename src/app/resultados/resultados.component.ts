
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  Input
} from '@angular/core';

import { LastResultService } from '../last-result.service';

import { Router } from '@angular/router';
import { Resultados } from '../interfaces/resultados.interface';
import { UserService } from '../user.service';
import { Porcentajes } from '../interfaces/porcentajes.interface';
import {interval,timer} from 'rxjs';
import Swal from 'sweetalert2';
import { TestComponent } from '../test/test.component';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
 



  resultados: Resultados[] = [];
  por1:number=50;
  por2:number=50;
  por3:number=50;
  url:any;
  
  constructor( public json: LastResultService,public infopag:UserService) {
    this.json.getJson().subscribe((res: any) => {
      console.log(res);
      this.resultados=res;
      console.log(this.resultados);

    });
   }

  ngOnInit(): void {     
  
   this.url=localStorage.getItem('urlPDF');
  }


  enviarPDF(){

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Haz descargado PDF exitosamente',
    showConfirmButton: false,
    timer: 1000
  })
 }
  
}


 


