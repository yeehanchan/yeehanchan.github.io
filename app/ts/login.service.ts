import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';
// import localStorage from 'localStorage';

@Injectable()
export class LoginService { 

  private loggedIn = false;
  constructor(private http: Http) {
      this.loggedIn = !!localStorage.getItem('auth_token');
  }

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
  // login(username, password) {


  //     var params = {
  //           username: username,
  //           password: password
  //     };
  //     let body = JSON.stringify(params);
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     return this.http
  //       .post(
  //         this._signinUrl, 
  //         body, 
  //         { headers }
  //       )
  //       .map(res => res.json())
  //       .map((res) => {
  //         if (res.success) {
  //           localStorage.setItem('auth_token', res.auth_token);
  //           this.loggedIn = true;
  //         }
  //          return res.success;
  //       });
  //   }

  logout() {
      localStorage.removeItem('auth_token');
      this.loggedIn = false;
  }

  signin(username: string, password: string, success, failure) {
    var creds = "username=" + username + "&password=" + password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._signinUrl, creds, options)
        .subscribe(
          response => success(response.text()),
          error => failure(error.text())
      );
  }

  currentUser(success, failure) {
    return this.http.get(this._currentUserUrl)
      .subscribe(success,failure);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}