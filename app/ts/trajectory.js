System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Trajectory;
    return {
        setters:[],
        execute: function() {
            Trajectory = (function () {
                function Trajectory(name, pk) {
                    if (name === void 0) { name = ""; }
                    if (pk === void 0) { pk = undefined; }
                    this.name = name;
                    this.pk = pk;
                }
                return Trajectory;
            }());
            exports_1("Trajectory", Trajectory);
        }
    }
});
//# sourceMappingURL=trajectory.js.map