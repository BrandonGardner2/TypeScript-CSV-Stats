import fs from 'fs';

// Not the best
// export class CSVReader {
//   data: MatchData[] = [];

//   constructor(public filename: string) {};

//   read(): void {
//     this.data = fs.readFileSync('football.csv', {
//       encoding: 'utf-8',
//     })
//       .split('\n')
//       .map((row: string): string[] => row.split(','))
//       .map((row: string[]): MatchData => {
//         return [
//           dateStringToDate(row[0]),
//           row[1],
//           row[2],
//           parseInt(row[3]),
//           parseInt(row[4]),
//           row[5] as MatchResult,
//           row[6],
//         ];
//       });
//   }
// }

// Refactor #1 Inheritance
// export abstract class CSVReader<T> {
//     data: T[] = [];

//     constructor(public filename: string) {};

//     abstract mapRow(row: string[]): T;

//     read(): void {
//       this.data = fs.readFileSync(this.filename, {
//         encoding: 'utf-8',
//       })
//         .split('\n')
//         .map((row: string): string[] => row.split(','))
//         .map(this.mapRow);
//   }
// }

// Refactor #2 Composition
export class CSVReader {
  data: string[][] = [];

  constructor(public filename: string) {};

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
  }
}