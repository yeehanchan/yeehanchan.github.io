import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TopicComponent}		from './topic.component';
import {TopicListComponent}	from './topic_list.component';
import {HomeComponent}		from './home.component';
import {TrajectoryComponent}from './trajectory.component';

import {HTTP_PROVIDERS}		from 'angular2/http';
import {LinkService}		from './link.service';
import {TopicService}		from './topic.service';
import {TrajectoryService}	from './trajectory.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
	styleUrls: ['app/css/app.component.css'],
	providers: [
		HTTP_PROVIDERS,
		LinkService,
		TopicService,
		TrajectoryService
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
@RouteConfig([
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/topic/:topic_name/', name: 'Topic',   component: TopicComponent },
	{ path: '/topic/:search_string/:topic_name/', name: 'TopicWithSearch', component: TopicComponent },
	{ path: '/searchTopics/:search_string/', name: 'Search',   component: TopicListComponent },
	{ path: '/trajectory/:trajectory_id/', name: 'Trajectory',   component: TrajectoryComponent },
	{ path: '/trajectory/:trajectory_id/:topic_name/', name: 'TrajectoryTopic',   component: TopicComponent }
])
export class AppComponent { }			