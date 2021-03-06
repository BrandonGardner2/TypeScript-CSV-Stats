import { CSVReader } from './CSVReader';
import { MatchData } from './../types/MatchData';
import { MatchResult } from './../types/MatchResult';
import { dateStringToDate } from './../utils';

// Inheritance method
// export class Matchreader extends CSVReader<MatchData> {
//   mapRow(row: string[]): MatchData {
//     return [
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResult,
//       row[6],
//     ];
//   }
// }

// Refactor composition
interface DataReader {
  read(): void;
  data: string[][];
};

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {};

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
            return [
              dateStringToDate(row[0]),
              row[1],
              row[2],
              parseInt(row[3]),
              parseInt(row[4]),
              row[5] as MatchResult,
              row[6],
            ];
      });
  }

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CSVReader(filename));
  }
}
