import { MatchResult } from './../types/MatchResult';
import { MatchData } from './../types/MatchData';
import { Analyzer } from './Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {};

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) wins += 1;
      else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) wins + 1;
    }

    return `${this.team} has won ${wins} times.`;
  }
}