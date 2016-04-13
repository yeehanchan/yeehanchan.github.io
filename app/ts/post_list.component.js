System.register(['angular2/core', 'angular2/router', './topic.service', './post.service'], function(exports_1, context_1) {
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
    var core_1, router_1, topic_service_1, post_service_1;
    var PostListComponent;
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
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostListComponent = (function () {
                function PostListComponent(_router, _routeParams, _postService, _topicService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._postService = _postService;
                    this._topicService = _topicService;
                    this.postlist = new Array();
                }
                PostListComponent.prototype.ngOnInit = function () {
                    this.topicName = decodeURI(this._routeParams.get('topic_name'));
                    this.searchString = decodeURI(this._routeParams.get('search_string'));
                    console.log(this.searchString === 'null');
                    this.getPostList();
                    this.getTopic();
                };
                PostListComponent.prototype.getTopic = function () {
                    var _this = this;
                    this._topicService.getTopic(this.topicName)
                        .subscribe(function (topic) { return _this.topic = topic; }, function (error) { return _this.errorMessage = error; });
                };
                PostListComponent.prototype.getPostList = function () {
                    var _this = this;
                    this._postService.getPostList(this.topicName)
                        .subscribe(function (postlist) {
                        _this.postlist = postlist;
                        _this.loaded = true;
                    }, function (error) { return _this.errorMessage = error; });
                    console.log(this.postlist);
                };
                PostListComponent.prototype.addPost = function (newLink, newTitle, newTopic) {
                    var _this = this;
                    if (newTopic === void 0) { newTopic = 1; }
                    this._postService.addPost(newLink.value, newTitle.value, newTopic)
                        .subscribe(function (post) {
                        _this.postlist.push(post);
                        newLink.value = "";
                        newTitle.value = "";
                    }, function (error) { return _this.errorMessage = error; });
                };
                PostListComponent.prototype.upVote = function (post) {
                    var _this = this;
                    if (post.vote === -1) {
                        post.score++;
                        post.vote = 0;
                    }
                    if (!post.vote) {
                        post.score++;
                        post.vote = 1;
                        this._postService.updateLink(post)
                            .subscribe(function (updatedPost) { return post = updatedPost; }, function (error) { return _this.errorMessage = error; });
                    }
                };
                PostListComponent.prototype.downVote = function (post) {
                    var _this = this;
                    if (post.vote === 1) {
                        post.score--;
                        post.vote = 0;
                    }
                    if (!post.vote) {
                        post.score--;
                        post.vote = -1;
                        this._postService.updateLink(post)
                            .subscribe(function (updatedPost) { return post = updatedPost; }, function (error) { return _this.errorMessage = error; });
                    }
                };
                PostListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/post_list.component.html',
                        styleUrls: ['app/css/post_list.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, post_service_1.PostService, topic_service_1.TopicService])
                ], PostListComponent);
                return PostListComponent;
            }());
            exports_1("PostListComponent", PostListComponent);
        }
    }
});
//# sourceMappingURL=post_list.component.js.map