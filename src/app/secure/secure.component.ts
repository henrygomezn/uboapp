import { Component, OnInit } from '@angular/core';
import { infPag } from '../interfaces/info-pagina.interface';

import { UserService } from '../user.service';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  currentUser: any;
  content: string;
  info:infPag={};
  cargada=false;
  constructor(public infopag:UserService) { }

  ngOnInit(): void {
    this.infopag.getuser().subscribe(resp => {
      this.info=resp;
      this.cargada=true;
      console.log('Response '+resp);
   }, error =>{
     console.log('error  '+error.message);
   });
  }

}
