import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostListComponent} from './post_list.component';
import {HomeComponent}     from './home.component';

import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService}    from './post.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    providers: [
    	HTTP_PROVIDERS,
    	PostService
    ],
    directives: [
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/topic/:topic_name/', name: 'Topic',   component: PostListComponent }
])
export class AppComponent { }			