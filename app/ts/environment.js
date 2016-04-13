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
                // public static _baseUrl: string = "http://127.0.0.1:8000/";
                Env._baseUrl = "http://education-project.herokuapp.com/";
                return Env;
            }());
            exports_1("Env", Env);
        }
    }
});
//# sourceMappingURL=environment.js.map