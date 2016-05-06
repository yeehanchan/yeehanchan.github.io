System.register(['angular2/core', 'angular2/router', './trajectory', './trajectory.service', './comment.component'], function(exports_1, context_1) {
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
    var core_1, router_1, trajectory_1, trajectory_service_1, comment_component_1;
    var TrajectoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trajectory_1_1) {
                trajectory_1 = trajectory_1_1;
            },
            function (trajectory_service_1_1) {
                trajectory_service_1 = trajectory_service_1_1;
            },
            function (comment_component_1_1) {
                comment_component_1 = comment_component_1_1;
            }],
        execute: function() {
            TrajectoryComponent = (function () {
                function TrajectoryComponent(_router, _routeParams, _trajectoryService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._trajectoryService = _trajectoryService;
                    this.trajectory = new trajectory_1.Trajectory();
                }
                TrajectoryComponent.prototype.ngOnInit = function () {
                    this.trajectoryId = decodeURI(this._routeParams.get('trajectory_id'));
                    this.getTrajectory();
                };
                TrajectoryComponent.prototype.getTrajectory = function () {
                    var _this = this;
                    this._trajectoryService.getTrajectory(this.trajectoryId)
                        .subscribe(function (trajectory) {
                        console.log(trajectory);
                        _this.trajectory = trajectory;
                        _this.loaded = true;
                    }, function (error) { return _this.errorMessage = error; });
                };
                TrajectoryComponent.prototype.openTopic = function (topicName) {
                    this._router.navigate(['/TrajectoryTopic', { topic_name: topicName, trajectory_id: this.trajectoryId }]);
                };
                TrajectoryComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/trajectory.component.html',
                        styleUrls: ['app/css/trajectory.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            comment_component_1.CommentsComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, trajectory_service_1.TrajectoryService])
                ], TrajectoryComponent);
                return TrajectoryComponent;
            }());
            exports_1("TrajectoryComponent", TrajectoryComponent);
        }
    }
});
//# sourceMappingURL=trajectory.component.js.map