import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {LoginService}        from './login.service';

@Component({
    templateUrl: 'app/templates/profile.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
})
export class ProfileComponent implements OnInit {}