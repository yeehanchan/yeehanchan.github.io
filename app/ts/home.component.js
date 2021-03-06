System.register(['angular2/core', 'angular2/router', './trajectory.service', './state.service'], function(exports_1, context_1) {
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
    var core_1, router_1, trajectory_service_1, state_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trajectory_service_1_1) {
                trajectory_service_1 = trajectory_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, _trajectoryService, state) {
                    this._router = _router;
                    this._trajectoryService = _trajectoryService;
                    this.state = state;
                    this.url = "../../images/background2.png";
                }
                HomeComponent.prototype.changeBackground = function () {
                    this.url = this.url === "../../images/background2.png" ? "../../images/background2-2.jpg" : this.url = "../../images/background2.png";
                };
                HomeComponent.prototype.ngOnInit = function () {
                    // setInterval(this.changeBackground, 2000); 
                    this.getTrajectories();
                };
                HomeComponent.prototype.getTrajectories = function () {
                    var _this = this;
                    this._trajectoryService.getTrajectories()
                        .subscribe(function (trajectories) { return _this.trajectories = trajectories; }, function (error) { return _this.errorMessage = error; });
                };
                HomeComponent.prototype.start = function (topic) {
                    this._router.navigate(['/Search', { search_string: topic }]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/home.component.html',
                        styleUrls: ['app/css/home.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, trajectory_service_1.TrajectoryService, state_service_1.StateService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map