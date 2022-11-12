// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM(see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data(pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output(5 separate console.log outputs): 
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data! GOOD LUCK 😀


//1.

function refactorText(text) {
  let toLower = text.toLowerCase()
  let textArr = toLower.split(' ')

  for (let i = 1; i < textArr.length + 1; i++) {
    let [first, second] = textArr[i - 1].split('_')
    console.log((first + second[0].toUpperCase() + second.slice(1)).padEnd(20) + '✅'.repeat(i))
  }
}

refactorText('underscore_case first_name Some_Variable calculate_AGE delayed_departure')






//  ** testing ** .  creating a function that receives any name and corrects it casing

// function correctName(word) {
//   let correct = word.toLowerCase()
//   let final = correct[0].toUpperCase() + correct.slice(1)
//   console.log(final);
// }

// correctName('maTeO')