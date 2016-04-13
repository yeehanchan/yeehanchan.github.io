import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Topic}           from './topic';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';

@Injectable()
export class TopicService {
  constructor (private http: Http) {}

  private _searchTopicUrl = Env._baseUrl + 'search/';
  private _addTopicUrl = Env._baseUrl + 'topics/';
  private _getTopicUrl = Env._baseUrl + 'getTopic/';

  getTopicList (search_string) {
  	console.log("services get called")
    return this.http.get(this._searchTopicUrl+search_string+'/')
                    .map(res => <Topic[]> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }
  getTopic (topicName: string) {
    return this.http.get(this._getTopicUrl + topicName + '/')
                    .map(res => res.json())
                    .catch(this.handleError);
  }
  addTopic(newTopicName = "") : Observable<Topic>{
    var newTopic = new Topic(newTopicName);
    let body = JSON.stringify(newTopic);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._addTopicUrl, body, options)
                    .map(res =>  <Topic> res.json())
                    .do(data => console.log("add link", data))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}