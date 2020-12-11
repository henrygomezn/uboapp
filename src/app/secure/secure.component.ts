import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  currentUser: any;
  content: string;
 
  constructor(public infopag:UserService) { }

  ngOnInit(): void {
   
  }

}
