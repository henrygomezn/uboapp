
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { LastResultService } from '../last-result.service';

import { Router } from '@angular/router';
import { Resultados } from '../interfaces/resultados.interface';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
 


  constructor( private router: Router, private inf: LastResultService) {

    this.inf.getJson().subscribe((res: any) => {
   console.log(res);
    });

   }

  ngOnInit(): void {


  }






}
