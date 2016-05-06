import {Component, Input, OnInit} from 'angular2/core';
import {Http, Response, URLSearchParams, Headers, RequestOptions} from 'angular2/http';
import {Comment} from './comment';
import {Observable} from 'rxjs/Observable';
import {Env} from './environment';
import {StateService} from './state.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'comments',
	template: `
		<ul *ngIf="comments" class="list-group comments">
			<li class="list-group-item title">
				<i class="icon-refresh" (click)="loadComments()" aria-hidden="true"></i>
				<h3 *ngIf="comments.length === 0">No Comments</h3>
				<h3 *ngIf="comments.length > 0">{{comments.length}} Comments</h3>
			</li>
			<li class="list-group-item comment" *ngFor="#comment of comments">
				<div><span class="username">{{comment.user_name}}</span> <span class="date">{{comment.submit_date.toLocaleString()}}</span></div>
				<div class="text">
					{{comment.comment}}
				</div>
			</li>
			<li class="list-group-item add-comment" *ngIf="state.loggedIn">
				<textarea class="comment-text" #commentText></textarea>
				<div class="submit-comment-wrapper">
					<div class="submit-comment" (click)="submitComment(commentText)">Submit Comment</div>
				</div>
			</li>
			<li class="list-group-item not-logged-in" *ngIf="!state.loggedIn">
				Please <a [routerLink]="['/Login']">log in</a> to comment
			</li>
		</ul>
	`,
	styles: [`
		.comments {
			color: black;
		}
		.comments .icon-refresh {
			float: right;
			color: #f77a76;
			cursor: pointer; 
		}
		.comment .username {
			font-weight: bold;
		}
		.comment .date {
			color: #666;
		}
		.comments textarea.comment-text {
			width: 100%;
		}
		.comments .submit-comment-wrapper {
			text-align: right;
		}
		.comments .submit-comment {
			display: inline-block;
			padding: 5px;
			background-color: #f77a76;
			margin-top: 3px;
			cursor: pointer;
		}
		.comments .add-comment {
			background-color: #DDD;
		}
		.comments .not-logged-in {
			padding-top: 2px;
			padding-bottom: 2px;
			background-color: #DDD;
			color: #444;
		}
	`],
	directives: [
		ROUTER_DIRECTIVES
	]
})
export class CommentsComponent implements OnInit {
	@Input() objectType: string;
	@Input() objectPk: number;
	@Input() loggedIn: boolean;

	private _getCommentsUrl = Env._baseUrl + 'getComments/';
	private _postCommentsUrl = Env._baseUrl + 'comments/post/';
	private comments: Comment[];
	private errorMessage: string;

	constructor(
		private http: Http,
		public state: StateService
	){}

	ngOnInit() {
		this.loadComments();	
	}

	loadComments() {
		return this.http.get(this._getCommentsUrl + this.objectType + '/' + this.objectPk + '/')
			.map(res => res.json().map(Comment.cast))
			.catch(this.handleError)
			.subscribe(
				comments => {
					this.comments = comments;
					console.log(this.comments);
				},
				error => this.errorMessage = <any>error
			)
	}

	submitComment(comment_text) {
		console.log(typeof (comment_text));
		var creds = "content_type=" + this.objectType + "&object_pk=" + this.objectPk + "&comment=" + comment_text.value;

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		let options = new RequestOptions({ headers: headers });
		this.http.post(this._postCommentsUrl, creds, { headers: headers })
			.map(res => Comment.cast(res.json()))
			.catch(this.handleError)
			.subscribe(
				comment => {
					this.comments.push(comment);
					comment_text.value = "";
				},
				error => this.errorMessage = <any>error
		);
	}

	handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
