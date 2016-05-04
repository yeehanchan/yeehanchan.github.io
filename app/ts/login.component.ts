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

    errorMessage: string;

    ngOnInit() { 
    }

    signup(email, username, password) {
        console.log(email, username, password);
        console.log(this._loginService.signup(email, username, password,
                    response => {
                        console.log(response);
                        this.state.loggedIn = true;
                        this.state.username = username;
                        this._router.navigate(['/Home', {}]);
                    },
                    error => this.errorMessage = error));
    }

    signin(username, password) {
        console.log(this._loginService.signin(username, password,
            response => {
                console.log(response);
                this.state.loggedIn = true;
                this.state.username = username;
                this._router.navigate(['/Home', {}]);
            },
            error => this.errorMessage = error));
    }
}