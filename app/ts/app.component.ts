import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostListComponent} from './post_list.component';
import {TopicListComponent} from './topic_list.component';
import {HomeComponent}     from './home.component';

import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService}    from './post.service';
import {TopicService}    from './topic.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    providers: [
    	HTTP_PROVIDERS,
    	PostService,
        TopicService
    ],
    directives: [
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/topic/:topic_name/', name: 'Topic',   component: PostListComponent },
    { path: '/searchTopics/:search_string/', name: 'Search',   component: TopicListComponent }
])
export class AppComponent { }			