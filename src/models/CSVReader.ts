import fs from 'fs';

export class CSVReader {
  data: string[][] = [];

  constructor(public filename: string) {};

  read(): void {
    this.data = fs.readFileSync('football.csv', {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}