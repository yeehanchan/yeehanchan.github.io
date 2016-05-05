import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {LoginService}        from './login.service';
import {StateService}        from './state.service';

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
        private _loginService: LoginService,
        public state: StateService
    ) {}

    signupErrorMessage: string;
    signinErrorMessage: string;

    ngOnInit() { 
    }

    signup(email, username, password) {
        console.log(email, username, password);
        console.log(this._loginService.signup(email, username, password,
                    response => {
                        // localStorage.setItem('auth_token', res.auth_token);
                        // console.log(response);
                        this.state.loggedIn = true;
                        this.state.username = username;
                        this._router.navigate(['/Home', {}]);
                    },
                    error => this.signupErrorMessage = error
                ));
    }

    signin(username, password) {
        console.log(this._loginService.signin(username, password,
            response => {
                this.state.loggedIn = true;
                this.state.username = username;
                this._router.navigate(['/Home', {}]);
            },
            error => this.signinErrorMessage = error));
    }


}