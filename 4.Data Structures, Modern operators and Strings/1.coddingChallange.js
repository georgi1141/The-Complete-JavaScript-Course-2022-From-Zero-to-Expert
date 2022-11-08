'use strict';

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1 
let [players1, players2] = game.players
console.log(players1, players2);

//2 
let [gk, ...fieldPlayers] = players1
console.log(fieldPlayers);

//3 
let allPlayers = [...players1, ...players2]
console.log(allPlayers);

//4
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']
console.log(players1Final);

//5
let { odds: { team1, x: draw, team2 } } = game
console.log(team1, draw, team2);

//6 
function printGoals(...input) {
  console.log(input);

}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

//7 
team1 < team2 && console.log(`Team one is more likely to win!`);




// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game('game' variable on next page).In this challenge we're gonna work with that data.
// Your tasks:
// 1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players.For Bayern Munich(team 1) create one variable('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// 4. Duringthegame, BayernMunich(team1)used3substituteplayers.Socreatea new array('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject, createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names(not an array) and prints each of them to the console, along with the number of goals that were scored in total(number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Then, call the function again with players from game.scored
// GOOD LUCK 😀
