"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./models/Summary");
var CSVReader_1 = require("./models/CSVReader");
var MatchReader_1 = require("./models/MatchReader");
var csvFileReader = new CSVReader_1.CSVReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisConsoleReport('Man United');
summary.buildAndReport(matchReader.matches);
