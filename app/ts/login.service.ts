import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Env} from './environment';
//import localStorage from 'localStorage';

@Injectable()
export class LoginService { 

  private loggedIn = false;
  constructor(private http: Http) {
      this.loggedIn = !!localStorage.getItem('auth_token');
      console.log(this.loggedIn);
  }

  private _signupUrl = Env._baseUrl + 'signup/';
  private _signinUrl = Env._baseUrl + 'signin/';

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

  isLoggedIn() {
      return this.loggedIn;
  }



  signin(username: string, password: string) {
      var params = {
        username: username,
        password: password
      };
      let body = JSON.stringify(params);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this._signinUrl, body, options)
          .map(res => res.json())
          .map((res) => {
              //console.log(res);
              if (res.success) {
                  localStorage.setItem('auth_token', res.auth_token);
                  this.loggedIn = true;
                  console.log(this.loggedIn);
                  return res.success;

              }

          });

   }
}