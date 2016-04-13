System.register(['angular2/core', 'angular2/router', './topic.service'], function(exports_1, context_1) {
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
    var core_1, router_1, topic_service_1;
    var TopicListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (topic_service_1_1) {
                topic_service_1 = topic_service_1_1;
            }],
        execute: function() {
            TopicListComponent = (function () {
                function TopicListComponent(_router, _routeParams, _topicService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._topicService = _topicService;
                    this.topicList = new Array();
                }
                TopicListComponent.prototype.ngOnInit = function () {
                    this.searchString = decodeURI(this._routeParams.get('search_string'));
                    this.getTopicList();
                };
                TopicListComponent.prototype.getTopicList = function () {
                    var _this = this;
                    console.log('component getTopic called');
                    this._topicService.getTopicList(this.searchString)
                        .subscribe(function (Topic) {
                        _this.topicList = Topic;
                        _this.loaded = true;
                    }, function (error) { return _this.errorMessage = error; });
                };
                TopicListComponent.prototype.addTopic = function (newTopicName) {
                    var _this = this;
                    if (newTopicName === void 0) { newTopicName = ""; }
                    this._topicService.addTopic(newTopicName)
                        .subscribe(function (topic) {
                        _this.topicList.push(topic);
                        _this._router.navigate(['/Topic', { topic_name: topic.name }]);
                    }, function (error) { return _this.errorMessage = error; });
                };
                TopicListComponent.prototype.openTopic = function (topicName) {
                    this._router.navigate(['/TopicWithSearch', { topic_name: topicName, search_string: this.searchString }]);
                };
                TopicListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/topic_list.component.html',
                        styleUrls: ['app/css/topic_list.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, topic_service_1.TopicService])
                ], TopicListComponent);
                return TopicListComponent;
            }());
            exports_1("TopicListComponent", TopicListComponent);
        }
    }
});
//# sourceMappingURL=topic_list.component.js.map