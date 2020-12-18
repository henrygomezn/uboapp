import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre = '';
  apellido = '';
  correo = '';
  contrasena = '';
  rut = '';
  sexo = '';
  isLoadingResults = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


 guardar(forma:NgForm){
  this.isLoadingResults = true;

 console.log(forma.value);

  this.authService.register(forma.value)
    .subscribe((res: any) => {
      this.isLoadingResults = false;
   

      this.router.navigate(['/login']).then(_ => console.log('You are registered now!'));

      


    }, (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No has ingresado todos los datos, o el correo ya existe'
  
      }  );
      console.log(err);
      this.isLoadingResults = false;
    });
 }


}
