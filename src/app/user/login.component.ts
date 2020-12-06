import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
    `]
})
export class LoginComponent {
    mouseoverLogin;
    userName;
    password;
    loginInvalid = false;

    constructor(private auth:AuthService, private router:Router){

    }

    login(formValues) {
        this.auth.loginUser(formValues.userName, formValues.password)
            .subscribe(resp => {
                if(!resp){
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            })
    }

    cancel(){
        this.router.navigate(['events']);
    }

}