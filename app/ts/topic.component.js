System.register(['angular2/core', 'angular2/router', './topic.service', './link.service'], function(exports_1, context_1) {
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
    var core_1, router_1, topic_service_1, link_service_1;
    var TopicComponent;
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
            },
            function (link_service_1_1) {
                link_service_1 = link_service_1_1;
            }],
        execute: function() {
            TopicComponent = (function () {
                function TopicComponent(_router, _routeParams, _linkService, _topicService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._linkService = _linkService;
                    this._topicService = _topicService;
                    this.links = new Array();
                }
                TopicComponent.prototype.ngOnInit = function () {
                    this.topicName = decodeURI(this._routeParams.get('topic_name'));
                    this.searchString = decodeURI(this._routeParams.get('search_string'));
                    this.trajectoryId = parseInt(this._routeParams.get('trajectory_id'));
                    if (isNaN(this.trajectoryId)) {
                        this.trajectoryId = undefined;
                    }
                    this.getTopic();
                    this.getLinkList();
                };
                TopicComponent.prototype.getTopic = function () {
                    var _this = this;
                    this._topicService.getTopic(this.topicName)
                        .subscribe(function (topic) { return _this.topic = topic; }, function (error) { return _this.errorMessage = error; });
                };
                TopicComponent.prototype.getLinkList = function () {
                    var _this = this;
                    this._linkService.getTopic(this.topicName)
                        .subscribe(function (links) {
                        _this.links = links;
                        _this.currentLink = links[0];
                        _this.loaded = true;
                    }, function (error) { return _this.errorMessage = error; });
                };
                TopicComponent.prototype.openLink = function (link) {
                    this.currentLink = link;
                };
                TopicComponent.prototype.addLink = function (newLink, newTitle, newTopic) {
                    var _this = this;
                    if (newTopic === void 0) { newTopic = 1; }
                    this._linkService.addLink(newLink.value, newTitle.value, newTopic)
                        .subscribe(function (link) {
                        _this.links.push(link);
                        newLink.value = "";
                        newTitle.value = "";
                    }, function (error) { return _this.errorMessage = error; });
                };
                TopicComponent.prototype.upVote = function (link) {
                    var _this = this;
                    if (link.vote === -1) {
                        link.score++;
                        link.vote = 0;
                    }
                    if (!link.vote) {
                        link.score++;
                        link.vote = 1;
                        this._linkService.updateLink(link)
                            .subscribe(function (updatedLink) { return link = updatedLink; }, function (error) { return _this.errorMessage = error; });
                    }
                };
                TopicComponent.prototype.downVote = function (link) {
                    var _this = this;
                    if (link.vote === 1) {
                        link.score--;
                        link.vote = 0;
                    }
                    if (!link.vote) {
                        link.score--;
                        link.vote = -1;
                        this._linkService.updateLink(link)
                            .subscribe(function (updatedLink) { return link = updatedLink; }, function (error) { return _this.errorMessage = error; });
                    }
                };
                TopicComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/topic.component.html',
                        styleUrls: ['app/css/topic.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, link_service_1.LinkService, topic_service_1.TopicService])
                ], TopicComponent);
                return TopicComponent;
            }());
            exports_1("TopicComponent", TopicComponent);
        }
    }
});
//# sourceMappingURL=topic.component.js.map