System.register(['angular2/core', './post_list.component', 'angular2/http', './post.service'], function(exports_1, context_1) {
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
    var core_1, post_list_component_1, http_1, post_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_list_component_1_1) {
                post_list_component_1 = post_list_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.url = "../../images/background2.png";
                }
                HomeComponent.prototype.changeBackground = function () {
                    if (this.url == "../../images/background2.png") {
                        this.url = "../../images/background2-2.jpg";
                    }
                    else {
                        this.url = "../../images/background2.png";
                    }
                };
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setInterval(function () { _this.changeBackground(); }, 2000);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/templates/home.component.html',
                        styleUrls: ['app/css/home.component.css'],
                        directives: [
                            post_list_component_1.PostListComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            post_service_1.PostService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map