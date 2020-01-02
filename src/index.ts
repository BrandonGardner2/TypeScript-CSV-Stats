import { Summary } from './models/Summary';
import { WinsAnalysis } from './models/WinsAnalysis';
import { ConsoleReport } from './models/ConsoleReport';
import { CSVReader } from './models/CSVReader';
import { MatchReader } from './models/MatchReader';

const csvFileReader = new CSVReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport(),
);

summary.buildAndReport(matchReader.matches);
