System.register(['angular2/core', 'angular2/http', './environment'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, environment_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            // import localStorage from 'localStorage';
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.loggedIn = false;
                    this._signupUrl = environment_1.Env._baseUrl + 'signup/';
                    this._signinUrl = environment_1.Env._baseUrl + 'signin/';
                    this._currentUserUrl = environment_1.Env._baseUrl + 'currentUser/';
                    this.loggedIn = !!localStorage.getItem('auth_token');
                    console.log(this.loggedIn);
                }
                LoginService.prototype.signup = function (email, username, password, success, failure) {
                    var creds = "email=" + email + "&username=" + username + "&password=" + password;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post(this._signupUrl, creds, { headers: headers })
                        .subscribe(success, failure, function () { return console.log('Authentication Complete'); });
                    // .do (success)
                    // .catch(failure);
                };
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
                LoginService.prototype.logout = function () {
                    localStorage.removeItem('auth_token');
                    this.loggedIn = false;
                };
                LoginService.prototype.signin = function (username, password, success, failure) {
                    var creds = "username=" + username + "&password=" + password;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._signinUrl, creds, options)
                        .subscribe(function (response) {
                        // localStorage.setItem('auth_token', res.auth_token);
                        success(response);
                    }, failure, function () { return console.log('Authentication Complete'); });
                };
                LoginService.prototype.currentUser = function (success, failure) {
                    return this.http.get(this._currentUserUrl)
                        .subscribe(success, failure);
                };
                LoginService.prototype.isLoggedIn = function () {
                    return this.loggedIn;
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map