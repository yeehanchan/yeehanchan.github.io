System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Link;
    return {
        setters:[],
        execute: function() {
            Link = (function () {
                function Link(newLink, newTitle, newTopic) {
                    if (newLink.indexOf("//") === -1) {
                        newLink = "http://" + newLink;
                    }
                    this.url = newLink;
                    this.topic = newTopic;
                    this.title = newTitle;
                }
                Link.prototype.domain = function () {
                    var myRegexp = new RegExp('(.*\/\/|)(.*?)(\/.*|)$');
                    var match = myRegexp.exec(this.url);
                    return match[2];
                };
                Link.cast = function (link) {
                    link.domain = Link.prototype.domain;
                    return link;
                };
                return Link;
            }());
            exports_1("Link", Link);
        }
    }
});
//# sourceMappingURL=link.js.map