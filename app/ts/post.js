System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Post;
    return {
        setters:[],
        execute: function() {
            Post = (function () {
                function Post(newLink, newTitle, newTopic) {
                    if (newLink.indexOf("//") === -1) {
                        newLink = "http://" + newLink;
                    }
                    this.url = newLink;
                    this.topic = newTopic;
                    this.title = newTitle;
                }
                Post.prototype.domain = function () {
                    var myRegexp = new RegExp('(.*\/\/|)(.*?)(\/.*|)$');
                    var match = myRegexp.exec(this.url);
                    return match[2];
                };
                Post.cast = function (post) {
                    post.domain = Post.prototype.domain;
                    return post;
                };
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=post.js.map