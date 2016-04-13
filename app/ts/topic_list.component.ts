import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router'
import {Topic} from './topic';
import {TopicService} from './topic.service';

@Component({
	templateUrl: 'app/templates/topic_list.component.html',
	styleUrls: ['app/css/topic_list.component.css']
})
export class TopicListComponent implements OnInit{
	public topicList : Topic[];
	public searchString: string;
	public loaded: boolean;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams, 
		private _topicService: TopicService
		) {
			this.topicList = new Array<Topic>();
	}

  	errorMessage: string;

  	ngOnInit() {
		this.searchString = decodeURI(this._routeParams.get('search_string'));
  		this.getTopicList();
  	}

  	getTopicList() {
  		console.log('component getTopic called');
			this._topicService.getTopicList(this.searchString)
				.subscribe(
					Topic => {
						this.topicList = Topic;
						this.loaded = true;
					},
                  	error => this.errorMessage = <any>error
                );
  	}

	addTopic(newTopicName="") {
		this._topicService.addTopic(newTopicName)
						 .subscribe(
                     		topic => {
									this.topicList.push(topic);
									this._router.navigate(['/Topic', { topic_name: topic.name }]);
								},
                     		error =>  this.errorMessage = <any>error);
	}

	openTopic(topicName) {
		this._router.navigate(['/TopicWithSearch', { topic_name: topicName, search_string: this.searchString }]);
	}
}