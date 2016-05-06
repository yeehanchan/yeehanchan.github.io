System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Comment;
    return {
        setters:[],
        execute: function() {
            Comment = (function () {
                function Comment(user_name, comment, submit_date, is_removed) {
                }
                Comment.cast = function (comment) {
                    comment.submit_date = new Date(comment.submit_date);
                    return comment;
                };
                return Comment;
            }());
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=comment.js.map