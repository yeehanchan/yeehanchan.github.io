System.register(['angular2/core', 'angular2/router', './login.service', './state.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_service_1, state_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _loginService, state) {
                    this._router = _router;
                    this._loginService = _loginService;
                    this.state = state;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.signup = function (email, username, password) {
                    var _this = this;
                    console.log(email, username, password);
                    console.log(this._loginService.signup(email, username, password, function (response) {
                        // localStorage.setItem('auth_token', res.auth_token);
                        // console.log(response);
                        _this.state.loggedIn = true;
                        _this.state.username = username;
                        _this._router.navigate(['/Home', {}]);
                    }, function (error) { return _this.signupErrorMessage = error; }));
                };
                LoginComponent.prototype.signin = function (username, password) {
                    var _this = this;
                    console.log(this._loginService.signin(username, password, function (response) {
                        _this.state.loggedIn = true;
                        _this.state.username = username;
                        _this._router.navigate(['/Home', {}]);
                    }, function (error) { return _this.signinErrorMessage = error; }));
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/login.component.html',
                        styleUrls: ['app/css/login.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, state_service_1.StateService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map