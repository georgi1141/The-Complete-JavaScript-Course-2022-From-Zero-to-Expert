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


//1. 
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

//2.
let values = Object.values(game.odds)
let sum = 0
for (const iterator of values) {
  sum += iterator
}
console.log(sum / values.length);

//3.
let entries = Object.entries(game.odds)

for (const [name, value] of entries) {
  let teamStr = name === 'x' ? 'draw' : `victory ${game[name]}`
  console.log(`Odd of ${teamStr} ${value}`);
}

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number(Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already  studied how to calculate averages, you can go check if you don't remember)
// 3. Printthe3oddstotheconsole, butinaniceformattedway, exactlylikethis:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value.In this game, it will look like this:
// {
//   Gnarby: 1, 
//     Hummels: 1,
//       Lewandowski: 2
// }
// GOOD LUCK 😀