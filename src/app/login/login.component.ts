import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 


  username = '';
  password = '';
  isLoadingResults = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {


  }



  guardar(forma:NgForm) {
    this.isLoadingResults = true;
    this.authService.login(forma.value)
      .subscribe(() => {
        this.isLoadingResults = false;
        Swal.fire(
          '¡Inicio de sesion exitoso!',
          '',
          'success'
        )
        this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }


}
