import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TopicComponent}		from './topic.component';
import {TopicListComponent}	from './topic_list.component';
import {HomeComponent}		from './home.component';
import {TrajectoryComponent}from './trajectory.component';
import {LoginComponent} 	from './login.component';
import {ProfileComponent} 	from './profile.component';

import {HTTP_PROVIDERS}		from 'angular2/http';
import {LinkService}		from './link.service';
import {TopicService}		from './topic.service';
import {TrajectoryService}	from './trajectory.service';
import {LoginService}		from './login.service';
import {StateService}		from './state.service';
// import {SearchService}		from './search.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
	styleUrls: ['app/css/app.component.css'],
	providers: [
		HTTP_PROVIDERS,
		LinkService,
		TopicService,
		TrajectoryService,
		LoginService,
		StateService
	],
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/login', name: 'Login', component: LoginComponent },
	{ path: '/profile', name: 'Profile', component: ProfileComponent },
	{ path: '/topic/:topic_name/', name: 'Topic',   component: TopicComponent },
	{ path: '/topic/:search_string/:topic_name/', name: 'TopicWithSearch', component: TopicComponent },
	{ path: '/searchTopics/:search_string/', name: 'Search',   component: TopicListComponent },
	{ path: '/trajectory/:trajectory_id/', name: 'Trajectory',   component: TrajectoryComponent },
	{ path: '/trajectory/:trajectory_id/:topic_name/', name: 'TrajectoryTopic',   component: TopicComponent }
])
export class AppComponent {
	constructor(
        private _loginService: LoginService,
		public state: StateService
	){
	// 	_loginService.currentUser(
	// 			response => { 
	// 				// console.log(response);
	// 				state.loggedIn = true;
	// 				state.username = response._body;
	// 			},
	// 			()=> undefined
	// 		)
	}
}			