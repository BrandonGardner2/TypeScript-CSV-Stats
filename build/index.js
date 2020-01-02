"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./models/CSVReader");
var MatchReader_1 = require("./models/MatchReader");
var csvFileReader = new CSVReader_1.CSVReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var matches = matchReader.matches;
