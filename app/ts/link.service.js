System.register(['angular2/core', 'angular2/http', './link', 'rxjs/Observable', './environment'], function(exports_1, context_1) {
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
    var core_1, http_1, link_1, Observable_1, http_2, environment_1;
    var LinkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (link_1_1) {
                link_1 = link_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            LinkService = (function () {
                function LinkService(http) {
                    this.http = http;
                    this._topicUrl = environment_1.Env._baseUrl + 'topicLinks/'; // URL to web api
                    this._addLinkUrl = environment_1.Env._baseUrl + 'links/';
                    this._updateLinkUrl = environment_1.Env._baseUrl + 'links/';
                }
                LinkService.prototype.getTopic = function (topic_name) {
                    console.log("services get called");
                    return this.http.get(this._topicUrl + topic_name + '/')
                        .map(function (res) { return res.json().map(link_1.Link.cast); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                LinkService.prototype.addLink = function (newUrl, newTitle, newTopic) {
                    if (newTitle === void 0) { newTitle = ""; }
                    if (newTopic === void 0) { newTopic = 1; }
                    var newLink = new link_1.Link(newUrl, newTitle, newTopic);
                    var body = JSON.stringify(newLink);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._addLinkUrl, body, options)
                        .map(function (res) { return link_1.Link.cast(res.json()); })
                        .do(function (data) { return console.log("add link", data); })
                        .catch(this.handleError);
                };
                LinkService.prototype.updateLink = function (link) {
                    var body = JSON.stringify(link);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers,
                        url: this._updateLinkUrl + link.pk + "/" });
                    return this.http.put(this._updateLinkUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log("update link", data); })
                        .catch(this.handleError);
                };
                LinkService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                LinkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LinkService);
                return LinkService;
            }());
            exports_1("LinkService", LinkService);
        }
    }
});
//# sourceMappingURL=link.service.js.map