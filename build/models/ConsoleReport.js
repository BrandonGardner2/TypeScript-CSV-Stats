"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport(report) {
        this.report = report;
    }
    ;
    ConsoleReport.prototype.print = function () {
        console.log(this.report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
