import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-pdf',
  templateUrl: './mostrar-pdf.component.html',
  styleUrls: ['./mostrar-pdf.component.css']
})
export class MostrarPdfComponent implements OnInit {

  @Input() src: string= "";

  constructor() {
    this.src=localStorage.getItem('urlPDF').replace('http','https');
    //var src2 = this.src.replace('http','https');
  // this.src = src2;
    //console.log(this.src);
   }

  ngOnInit(): void {
    console.log("ejecuto componente");
    console.log(this.src);
  }

}
