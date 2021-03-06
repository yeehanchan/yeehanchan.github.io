import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams,ROUTER_DIRECTIVES} from 'angular2/router'
import {Link} from './link';
import {Topic} from './topic';
import {TopicService} from './topic.service';
import {LinkService} from './link.service'
import {CommentsComponent} from './comment.component'
import {StateService}		from './state.service';

@Component({
	templateUrl: 'app/templates/topic.component.html',
	styleUrls: ['app/css/topic.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        CommentsComponent
    ],
})
export class TopicComponent implements OnInit{
	public links : Link[];
	public topicName: string;
	public searchString: string;
	public trajectoryId: number;
	public topic: Topic;
	public loaded: boolean;
	public currentLink: Link;
	public showAddLink: boolean;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams, 
		private _linkService: LinkService,
		private _topicService: TopicService,
		public state: StateService) {
			this.links = new Array<Link>();
	}

  	errorMessage: string;

  	ngOnInit() {
		this.topicName = decodeURI(this._routeParams.get('topic_name'));
		this.searchString = decodeURI(this._routeParams.get('search_string'));
		this.trajectoryId = parseInt(this._routeParams.get('trajectory_id'));
		if(isNaN(this.trajectoryId)){
			this.trajectoryId = undefined;
		}
  		this.getTopic();
		this.getLinkList();
  	}

  	getTopic() {
		this._topicService.getTopic(this.topicName)
			.subscribe( 
				topic => {
					this.topic = topic;
				},
              	error => this.errorMessage = <any>error
			)
  	}

  	getLinkList() {
		this._linkService.getTopic(this.topicName)
			.subscribe(
						links => { 
							this.links = links; 
							this.currentLink = links[0];
							this.loaded = true;
						},
                      	error => this.errorMessage = <any>error);
  	}

  	openLink(link) {
		this.currentLink = link;
  	}

  	toggleAddLink() {
		this.showAddLink = !this.showAddLink;
  	}

	addLink(newLink, newTitle, newTopic=1) {

		this._linkService.addLink(newLink.value, newTitle.value, newTopic)
						 .subscribe(
                     		link => {
									this.links.push(link);
									newLink.value = "";
									newTitle.value = "";
								},
                     		error =>  this.errorMessage = <any>error);
	}

	upVote(link: Link){
		if(link.vote === -1){
			link.score++;
			link.vote = 0;
		}
		if(!link.vote){
			link.score++;
			link.vote = 1;
			this._linkService.updateLink(link)
							 .subscribe(
							 	updatedLink => link = updatedLink,
							 	error => this.errorMessage = <any>error);
		}
	}

	remove(linkIndex: number){
		// this.downVote(this.links[linkIndex]);
		this.links.splice(linkIndex);
	}

	pin(linkIndex: number){
		var link: Link = this.links[linkIndex];
		link.pinned = !link.pinned;
		// this.upVote(link);
		if (linkIndex > 0 && link.pinned){
			this.links.splice(linkIndex);
			this.links.splice(0, 0, link);
		}
	}

	downVote(link: Link){
		if(link.vote === 1){
			link.score--;
			link.vote = 0;
		}
		if(!link.vote){
			link.score--;
			link.vote = -1;
			this._linkService.updateLink(link)
							 .subscribe(
							 	updatedLink => link = updatedLink,
							 	error => this.errorMessage = <any>error);
		}
	}

}