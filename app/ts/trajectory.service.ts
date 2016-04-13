import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Trajectory}     from './trajectory';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';

@Injectable()
export class TrajectoryService {
  constructor (private http: Http) {}

  private _trajectoryUrl = Env._baseUrl + 'trajectories/';

  getTrajectory (trajectoryName: string) {
    return this.http.get(this._trajectoryUrl + trajectoryName + '/')
                    .map(res => <Trajectory>res.json())
                    .catch(this.handleError);
  }
  getTrajectories () {
    return this.http.get(this._trajectoryUrl)
                    .map(res => <Trajectory[]>res.json())
                    .catch(this.handleError);
  }
  addTrajectory(newTrajectoryName = "") : Observable<Trajectory>{
    var newTrajectory = new Trajectory(newTrajectoryName);
    let body = JSON.stringify(newTrajectory);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._trajectoryUrl, body, options)
                    .map(res =>  <Trajectory> res.json())
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