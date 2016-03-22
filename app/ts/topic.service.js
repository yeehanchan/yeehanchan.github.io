System.register(['angular2/core', 'angular2/http', './topic', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, topic_1, Observable_1, http_2;
    var TopicService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (topic_1_1) {
                topic_1 = topic_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TopicService = (function () {
                function TopicService(http) {
                    this.http = http;
                    this._baseUrl = 'http://education-project.herokuapp.com/';
                    this._searchTopicUrl = this._baseUrl + 'search/';
                    this._addTopicUrl = this._baseUrl + 'topics/';
                    this._getTopicUrl = this._baseUrl + 'getTopic/';
                }
                TopicService.prototype.getTopicList = function (search_string) {
                    console.log("services get called");
                    return this.http.get(this._searchTopicUrl + search_string + '/')
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TopicService.prototype.getTopic = function (topicName) {
                    return this.http.get(this._getTopicUrl + topicName + '/')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TopicService.prototype.addTopic = function (newTopicName) {
                    if (newTopicName === void 0) { newTopicName = ""; }
                    var newTopic = new topic_1.Topic(newTopicName);
                    var body = JSON.stringify(newTopic);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._addTopicUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log("add link", data); })
                        .catch(this.handleError);
                };
                TopicService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TopicService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TopicService);
                return TopicService;
            }());
            exports_1("TopicService", TopicService);
        }
    }
});
//# sourceMappingURL=topic.service.js.map