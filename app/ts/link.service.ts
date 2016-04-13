import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Link}           from './link';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';

@Injectable()
export class LinkService {
  constructor (private http: Http) {}

  private _topicUrl = Env._baseUrl + 'topicLinks/';  // URL to web api
  private _addLinkUrl = Env._baseUrl + 'links/';
  private _updateLinkUrl = Env._baseUrl + 'links/';

  getTopic (topic_name) {
  	console.log("services get called")
    return this.http.get(this._topicUrl+topic_name+'/')
                    .map(res => (<Link[]>res.json()).map(Link.cast))
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }
  addLink(newUrl:string, newTitle = "", newTopic=1) : Observable<Link>{
    var newLink = new Link(newUrl, newTitle, newTopic);
    let body = JSON.stringify(newLink);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._addLinkUrl, body, options)
                    .map(res => Link.cast(<Link>res.json()))
                    .do(data => console.log("add link", data))
                    .catch(this.handleError);
  }

  updateLink(link : Link) : Observable<Link> {
    let body = JSON.stringify(link);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,
                                       url: this._updateLinkUrl + link.pk + "/" });
    return this.http.put(this._updateLinkUrl, body, options)
                    .map(res => <Link> res.json())
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