import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PreguntaService } from '../pregunta.service';
import { Router } from '@angular/router';
import { Respuesta } from '../interfaces/respuesta';
import { Pregunta } from '../interfaces/pregunta.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  accepted: Boolean = false;

  respuestas: Respuesta[] = [];

  isChecked;
  isCheckedName;

  posSelect : number = -1;
  valueSelect : number = 0;
  preguntaSelect : string = "";

  constructor(public infopag: PreguntaService, private router: Router) {}

  ngOnInit(): void {}

  onChange(e) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

  savedRespuesta(pos, value, pregunta) {
    this.preguntaSelect = pregunta;
    var respuesta: Respuesta = {} as Respuesta;
    respuesta.respuesta = parseInt(value);
    respuesta.questionResponse = {} as Pregunta;
    respuesta.questionResponse.id = pos + 1;
    this.posSelect = pos;
    this.valueSelect = value;
    this.ngOnInit();
    if (this.respuestas.length != 0) {
      var index = -1;
      var index2 = this.respuestas.find(function (res, i) {
        if (res.questionResponse.id == respuesta.questionResponse.id) {
          index = i;
          return i;
        }
      });
      if (index == -1) {
        this.respuestas.push(respuesta);
      } else {
        this.respuestas.splice(pos, 1);
        this.respuestas.push(respuesta);
      }
    } else {
      this.respuestas.push(respuesta);
    }

    console.log(this.respuestas);
  }
}
