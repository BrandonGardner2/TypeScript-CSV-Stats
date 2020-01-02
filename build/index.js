"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./models/CSVReader");
var matches = new CSVReader_1.CSVReader('football.csv').data;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
        manUnitedWins += 1;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        manUnitedWins + 1;
}
console.log(manUnitedWins);
