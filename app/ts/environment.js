System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Env;
    return {
        setters:[],
        execute: function() {
            Env = (function () {
                function Env() {
                }
                Env._baseUrl = "http://127.0.0.1:8000/";
                return Env;
            }());
            exports_1("Env", Env);
        }
    }
});
//# sourceMappingURL=environment.js.map