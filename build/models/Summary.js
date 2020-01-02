"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleReport_1 = require("./ConsoleReport");
var WinsAnalysis_1 = require("./WinsAnalysis");
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
    Summary.winsAnalysisConsoleReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    return Summary;
}());
exports.Summary = Summary;
