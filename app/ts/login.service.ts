import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';

@Injectable()
export class LoginService {
  constructor (private http: Http) {}

  private _signupUrl = Env._baseUrl + 'signup/';
  private _signinUrl = Env._baseUrl + 'signin/';
  private _currentUserUrl = Env._baseUrl + 'currentUser/';

  signup(email: string, username: string, password: string, success, failure) {
    var creds = "email=" + email + "&username=" + username + "&password=" + password;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post(this._signupUrl, creds, {headers:headers})
                    .subscribe(
                      success,
                      failure,
                      () => console.log('Authentication Complete')
                    );
                    // .do (success)
                    // .catch(failure);
  }

  signin(username: string, password: string, success, failure) {
    var creds = "username=" + username + "&password=" + password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._signinUrl, creds, options)
        .subscribe(
        success,
        failure,
        () => console.log('Authentication Complete')
      );
  }

  currentUser(success, failure) {
    return this.http.get(this._currentUserUrl)
      .subscribe(success, failure);

  }
}