import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostListComponent} from './post_list.component';
import {HomeComponent}     from './home.component';

import {HTTP_PROVIDERS}    from 'angular2/http';
import {PostService}       from './post.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
    	PostListComponent
    ]
    providers: [
    	HTTP_PROVIDERS,
    	PostService
    ]
})
@RouteConfig([
    { path: '/',                  name: 'Home',       component: HomeComponent },
    { path: '/topic', name: 'PostList',   component: PostListComponent }
]) 
export class AppComponent { }			