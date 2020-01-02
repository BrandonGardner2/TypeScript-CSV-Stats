import { CSVReader } from './models/CSVReader';
import { MatchReader } from './models/MatchReader';
import { MatchResult } from './types/MatchResult';

const csvFileReader = new CSVReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const { matches } = matchReader;

