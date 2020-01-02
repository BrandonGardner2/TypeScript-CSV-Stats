"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./models/CSVReader");
var MatchReader_1 = require("./models/MatchReader");
var MatchResult_1 = require("./types/MatchResult");
var csvFileReader = new CSVReader_1.CSVReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var matches = matchReader.matches;
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUnitedWins += 1;
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin)
        manUnitedWins + 1;
}
console.log(manUnitedWins);
