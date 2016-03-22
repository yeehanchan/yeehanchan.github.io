import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Post}           from './post';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class PostService {
  constructor (private http: Http) {}

  private _baseUrl = 'http://education-project.herokuapp.com/'
  private _postlistUrl = this._baseUrl + 'topicLinks/';  // URL to web api
  private _addlinkUrl = this._baseUrl + 'links/';
  private _updatelinkUrl = this._baseUrl + 'links/';

  getPostList (topic_name) {
  	console.log("services get called")
    return this.http.get(this._postlistUrl+topic_name+'/')
                    .map(res => <Post[]> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }
  addPost(newLink:string, newTitle = "", newTopic=1) : Observable<Post>{
    var newPost = new Post(newLink, newTitle, newTopic);
    let body = JSON.stringify(newPost);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._addlinkUrl, body, options)
                    .map(res =>  <Post> res.json())
                    .do(data => console.log("add link", data))
                    .catch(this.handleError);
  }

  updateLink(post : Post) : Observable<Post> {
    let body = JSON.stringify(post);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,
                                       url: this._updatelinkUrl + post.pk + "/" });
    return this.http.put(this._updatelinkUrl, body, options)
                    .map(res => <Post> res.json())
                    .do(data => console.log("update link", data))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}