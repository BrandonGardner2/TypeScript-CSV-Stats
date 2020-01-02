"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./models/Summary");
var MatchReader_1 = require("./models/MatchReader");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisConsoleReport('Man United');
summary.buildAndReport(matchReader.matches);
