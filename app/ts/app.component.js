System.register(['angular2/core', 'angular2/router', './topic.component', './topic_list.component', './home.component', './trajectory.component', './login.component', './profile.component', 'angular2/http', './link.service', './topic.service', './trajectory.service', './login.service', './state.service'], function(exports_1, context_1) {
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
    var core_1, router_1, topic_component_1, topic_list_component_1, home_component_1, trajectory_component_1, login_component_1, profile_component_1, http_1, link_service_1, topic_service_1, trajectory_service_1, login_service_1, state_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (topic_component_1_1) {
                topic_component_1 = topic_component_1_1;
            },
            function (topic_list_component_1_1) {
                topic_list_component_1 = topic_list_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (trajectory_component_1_1) {
                trajectory_component_1 = trajectory_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (link_service_1_1) {
                link_service_1 = link_service_1_1;
            },
            function (topic_service_1_1) {
                topic_service_1 = topic_service_1_1;
            },
            function (trajectory_service_1_1) {
                trajectory_service_1 = trajectory_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_loginService, state) {
                    this._loginService = _loginService;
                    this.state = state;
                    _loginService.currentUser(function (response) {
                        // console.log(response);
                        state.loggedIn = true;
                        state.username = response._body;
                    }, function () { return undefined; });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.component.html',
                        styleUrls: ['app/css/app.component.css'],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            link_service_1.LinkService,
                            topic_service_1.TopicService,
                            trajectory_service_1.TrajectoryService,
                            login_service_1.LoginService,
                            state_service_1.StateService
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/topic/:topic_name/', name: 'Topic', component: topic_component_1.TopicComponent },
                        { path: '/topic/:search_string/:topic_name/', name: 'TopicWithSearch', component: topic_component_1.TopicComponent },
                        { path: '/searchTopics/:search_string/', name: 'Search', component: topic_list_component_1.TopicListComponent },
                        { path: '/trajectory/:trajectory_id/', name: 'Trajectory', component: trajectory_component_1.TrajectoryComponent },
                        { path: '/trajectory/:trajectory_id/:topic_name/', name: 'TrajectoryTopic', component: topic_component_1.TopicComponent }
                    ]), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, state_service_1.StateService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map