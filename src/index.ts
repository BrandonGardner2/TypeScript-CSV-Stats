import { Matchreader } from './models/MatchReader';
import { MatchResult } from './types/MatchResult';

const reader = new Matchreader('football.csv');
reader.read();
const matches = reader.data;

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins += 1;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins + 1;
}

console.log(manUnitedWins);

