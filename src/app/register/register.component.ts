import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { TokenService } from '../token.service';
import { CountryI, CityI } from '../models/model.interface';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[DataService]
})
export class RegisterComponent implements OnInit {

  isLoadingResults = false;

  
  public selectedCountry: CountryI = {id:0, name: ''};
  public countries: CountryI[];
  public cities: CityI[];


  constructor(private dataSvc: DataService,private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.tokenService.removeToken();
    this.countries = this.dataSvc.getCountries();
   
  }


  onSelect(id:number):void{
  
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);

  }



 guardar(forma:NgForm){
  this.isLoadingResults = true;

 console.log(forma.value);

  this.authService.register(forma.value)
    .subscribe((res: any) => {
      this.isLoadingResults = false;


       this.authService.login(res.username,res.username)
       .subscribe(() => {
         this.isLoadingResults = false;
         Swal.fire(
           '¡Registro exitoso!',
           '',
           'success'
         )
         this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
       }, (err: any) => {
       //  console.log(err);
         this.isLoadingResults = false;
       });


     // this.router.navigate(['/login']).then(_ => console.log('You are registered now!'));




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
