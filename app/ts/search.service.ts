import {Injectable}     from 'angular2/core';
// import {Http, Response, URLSearchParams} from 'angular2/http';
// import {Observable}     from 'rxjs/Observable';
// import {Headers, RequestOptions} from 'angular2/http';
/// <reference path="reference_files/gapi.youtube.d.ts" />

@Injectable()
export class SearchService {

	constructor() {
		if (typeof gapi === 'undefined') {
			console.log("API not ready")
		}
		else {

			gapi.client.setApiKey("AIzaSyDKOp81YTLT1fdWD4wJ9lQMZldD2faIkGg");
			gapi.client.load("youtube", "v3", function() {
				console.log("API Ready")
			});
		};
	 }

	getResult(){
		var result = gapi.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: "technical",
			maxResults: 5,
			order: "viewCount",
		});
		
	}

	// getResult(){

	// 	return this.http.get(this.baseUrl)
	// 					.map(res => <SearchResult[]>res.json())
	// 					.do(data => console.log(data))
	// 					.catch(this.handleError);

	// }

	// private extractData(res: Response) {
	// 	if (res.status < 200 || res.status >= 300) {
	// 		throw new Error('Bad response status: ' + res.status);
	// 	}
	// 	let body = res.json();
	// 	return body.data || {};
	// }

	// private handleError(error: any) {

	// 	let errMsg = error.message || 'Server error';
	// 	console.error(errMsg); // log to console instead
	// 	return Observable.throw(errMsg);
	// }
}