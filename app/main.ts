import {AppComponent} from './ts/app.component';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {Headers, BrowserXhr, HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';

// Add all operators to Observable
import 'rxjs/Rx';
bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS
]);