"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    ;
    Summary.prototype.buildAndReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
