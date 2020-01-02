import { CSVReader } from './CSVReader';
import { MatchResult } from './../types/MatchResult';
import { dateStringToDate } from './../utils';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class Matchreader extends CSVReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
