System.register(['angular2/core', 'angular2/http', './comment', 'rxjs/Observable', './environment', './state.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_1, comment_1, Observable_1, environment_1, state_service_1, router_1;
    var CommentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CommentsComponent = (function () {
                function CommentsComponent(http, state) {
                    this.http = http;
                    this.state = state;
                    this._getCommentsUrl = environment_1.Env._baseUrl + 'getComments/';
                    this._postCommentsUrl = environment_1.Env._baseUrl + 'comments/post/';
                }
                CommentsComponent.prototype.ngOnInit = function () {
                    this.loadComments();
                };
                CommentsComponent.prototype.loadComments = function () {
                    var _this = this;
                    return this.http.get(this._getCommentsUrl + this.objectType + '/' + this.objectPk + '/')
                        .map(function (res) { return res.json().map(comment_1.Comment.cast); })
                        .catch(this.handleError)
                        .subscribe(function (comments) {
                        _this.comments = comments;
                        console.log(_this.comments);
                    }, function (error) { return _this.errorMessage = error; });
                };
                CommentsComponent.prototype.submitComment = function (comment_text) {
                    var _this = this;
                    console.log(typeof (comment_text));
                    var creds = "content_type=" + this.objectType + "&object_pk=" + this.objectPk + "&comment=" + comment_text.value;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(this._postCommentsUrl, creds, { headers: headers })
                        .map(function (res) { return comment_1.Comment.cast(res.json()); })
                        .catch(this.handleError)
                        .subscribe(function (comment) {
                        _this.comments.push(comment);
                        comment_text.value = "";
                    }, function (error) { return _this.errorMessage = error; });
                };
                CommentsComponent.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CommentsComponent.prototype, "objectType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CommentsComponent.prototype, "objectPk", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], CommentsComponent.prototype, "loggedIn", void 0);
                CommentsComponent = __decorate([
                    core_1.Component({
                        selector: 'comments',
                        template: "\n\t\t<ul *ngIf=\"comments\" class=\"list-group comments\">\n\t\t\t<li class=\"list-group-item title\">\n\t\t\t\t<i class=\"icon-refresh\" (click)=\"loadComments()\" aria-hidden=\"true\"></i>\n\t\t\t\t<h3 *ngIf=\"comments.length === 0\">No Comments</h3>\n\t\t\t\t<h3 *ngIf=\"comments.length > 0\">{{comments.length}} Comments</h3>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item comment\" *ngFor=\"#comment of comments\">\n\t\t\t\t<div><span class=\"username\">{{comment.user_name}}</span> <span class=\"date\">{{comment.submit_date.toLocaleString()}}</span></div>\n\t\t\t\t<div class=\"text\">\n\t\t\t\t\t{{comment.comment}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item add-comment\" *ngIf=\"state.loggedIn\">\n\t\t\t\t<textarea class=\"comment-text\" #commentText></textarea>\n\t\t\t\t<div class=\"submit-comment-wrapper\">\n\t\t\t\t\t<div class=\"submit-comment\" (click)=\"submitComment(commentText)\">Submit Comment</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item not-logged-in\" *ngIf=\"!state.loggedIn\">\n\t\t\t\tPlease <a [routerLink]=\"['/Login']\">log in</a> to comment\n\t\t\t</li>\n\t\t</ul>\n\t",
                        styles: ["\n\t\t.comments {\n\t\t\tcolor: black;\n\t\t}\n\t\t.comments .icon-refresh {\n\t\t\tfloat: right;\n\t\t\tcolor: #f77a76;\n\t\t\tcursor: pointer; \n\t\t}\n\t\t.comment .username {\n\t\t\tfont-weight: bold;\n\t\t}\n\t\t.comment .date {\n\t\t\tcolor: #666;\n\t\t}\n\t\t.comments textarea.comment-text {\n\t\t\twidth: 100%;\n\t\t}\n\t\t.comments .submit-comment-wrapper {\n\t\t\ttext-align: right;\n\t\t}\n\t\t.comments .submit-comment {\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 5px;\n\t\t\tbackground-color: #f77a76;\n\t\t\tmargin-top: 3px;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.comments .add-comment {\n\t\t\tbackground-color: #DDD;\n\t\t}\n\t\t.comments .not-logged-in {\n\t\t\tpadding-top: 2px;\n\t\t\tpadding-bottom: 2px;\n\t\t\tbackground-color: #DDD;\n\t\t\tcolor: #444;\n\t\t}\n\t"],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, state_service_1.StateService])
                ], CommentsComponent);
                return CommentsComponent;
            }());
            exports_1("CommentsComponent", CommentsComponent);
        }
    }
});
//# sourceMappingURL=comment.component.js.map