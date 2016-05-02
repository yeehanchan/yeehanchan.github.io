import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {LoginService}        from './login.service';

@Component({
    templateUrl: 'app/templates/login.component.html',
    styleUrls: ['app/css/login.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
})
export class LoginComponent implements OnInit{

    constructor(
        private _router: Router,
        private _loginService: LoginService
        ) { }

    errorMessage: string;

    ngOnInit() { 
    }


    signin(username, password) {
        console.log(username, password);
        this._loginService.signin(username, password).subscribe((res) => { 
            console.log(res)
        });
            
    }

    signup(email, username, password) {
        console.log(email, username, password);
        console.log(this._loginService.signup(email, username, password,
                    response => {
                        console.log(response);
                        this._router.navigate(['/Home', {}]);
                    },
                    error => this.errorMessage = error));

            // response => this.loggedIn = true,
            // response => this.errorMessage = response)
    }


}