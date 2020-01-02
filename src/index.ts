import { Summary } from './models/Summary';
import { MatchReader } from './models/MatchReader';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisConsoleReport('Man United');

summary.buildAndReport(matchReader.matches);
