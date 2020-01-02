import { ConsoleReport } from './ConsoleReport';
import { WinsAnalysis } from './WinsAnalysis';
import { MatchData } from './../types/MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};

  buildAndReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }

  static winsAnalysisConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
}
