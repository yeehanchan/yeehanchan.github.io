import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router'
import {Post} from './post';
import {PostService} from './post.service'

@Component({
	templateUrl: 'app/templates/post_list.component.html',
	styleUrls: ['app/css/post_list.component.css']
})
export class PostListComponent implements OnInit{
	public postlist : Post[];
	public topicName: string;
	public topicId: number;
	public loaded: boolean;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams, 
		private _postService: PostService) {
			this.postlist = new Array<Post>();
	}

  	errorMessage: string;

  	ngOnInit() {
		this.topicName = decodeURI(this._routeParams.get('topic_name'));
  		this.getPostList();
  	}

  	getPostList() {
  		console.log('component getpostlist called');
			this._postService.getPostList(this.topicName)
				.subscribe(
							postlist => { this.postlist = postlist; this.loaded = true },
                          	error => this.errorMessage = <any>error);
  	}


	addPost(newLink = "http://google.com", newTitle = "title", newTopic=1) {
		this._postService.addPost(newLink, newTitle, newTopic)
						 .subscribe(
                     		post => this.postlist.push(post),
                     		error =>  this.errorMessage = <any>error);
	}

	upVote(post: Post){
		if(post.vote === -1){
			post.score++;
			post.vote = 0;
		}
		if(!post.vote){
			post.score++;
			post.vote = 1;
			this._postService.updateLink(post)
							 .subscribe(
							 	updatedPost => post = updatedPost,
							 	error => this.errorMessage = <any>error);
		}
	}

	downVote(post: Post){
		if(post.vote === 1){
			post.score--;
			post.vote = 0;
		}
		if(!post.vote){
			post.score--;
			post.vote = -1;
			this._postService.updateLink(post)
							 .subscribe(
							 	updatedPost => post = updatedPost,
							 	error => this.errorMessage = <any>error);
		}
	}

}