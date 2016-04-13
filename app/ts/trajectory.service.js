System.register(['angular2/core', 'angular2/http', './trajectory', 'rxjs/Observable', './environment'], function(exports_1, context_1) {
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
    var core_1, http_1, trajectory_1, Observable_1, http_2, environment_1;
    var TrajectoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (trajectory_1_1) {
                trajectory_1 = trajectory_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            TrajectoryService = (function () {
                function TrajectoryService(http) {
                    this.http = http;
                    this._trajectoryUrl = environment_1.Env._baseUrl + 'trajectories/';
                }
                TrajectoryService.prototype.getTrajectory = function (trajectoryName) {
                    return this.http.get(this._trajectoryUrl + trajectoryName + '/')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TrajectoryService.prototype.getTrajectories = function () {
                    return this.http.get(this._trajectoryUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TrajectoryService.prototype.addTrajectory = function (newTrajectoryName) {
                    if (newTrajectoryName === void 0) { newTrajectoryName = ""; }
                    var newTrajectory = new trajectory_1.Trajectory(newTrajectoryName);
                    var body = JSON.stringify(newTrajectory);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._trajectoryUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log("add link", data); })
                        .catch(this.handleError);
                };
                TrajectoryService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TrajectoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TrajectoryService);
                return TrajectoryService;
            }());
            exports_1("TrajectoryService", TrajectoryService);
        }
    }
});
//# sourceMappingURL=trajectory.service.js.map