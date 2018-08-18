import { Component, OnInit } from '@angular/core';
import * as tnsOAuthModule from 'nativescript-oauth'
import { Router } from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }


  public onButtonTap(){
      tnsOAuthModule
          .ensureValidToken()
          .then((token: string) => {
              console.log("token: " + token);
              this.router.navigateByUrl("/register")
          })
          .catch(er => {
              //do something with the error
          });
    }


    ngOnInit() { }

}
