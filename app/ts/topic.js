System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Topic;
    return {
        setters:[],
        execute: function() {
            Topic = (function () {
                function Topic(name, pk) {
                    if (pk === void 0) { pk = undefined; }
                    this.name = name;
                    this.pk = pk;
                }
                return Topic;
            }());
            exports_1("Topic", Topic);
        }
    }
});
//# sourceMappingURL=topic.js.map