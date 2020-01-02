import { CSVReader } from './models/CSVReader';

const matches = new CSVReader('football.csv').data;


enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};


let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins += 1;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins + 1;
}

console.log(manUnitedWins);

