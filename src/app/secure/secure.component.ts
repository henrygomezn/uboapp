import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  currentUser: any;
  content: string;
 
  constructor(public infopag:UserService, private router: Router) { }

  ngOnInit(): void {
   
  }



  mandarTest(){
    Swal.fire({
      title: '¿Estas seguro de comenzar?',
      text: "El test contiene 90 preguntas.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/test']).then(_ => console.log('te juiste'));
      }
    })
  }







}
