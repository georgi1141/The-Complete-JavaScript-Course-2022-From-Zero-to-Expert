// closure

// Example 1 
let f
const g = function () {
  let a = 23
  f = function () {
    console.log(a * 2);
  }
}

g()
f()

console.log('--------------');
// Example 2

let boardPassengers = function (num, wait) {
  let perGroup = num / 3
  setTimeout(function () {
    console.log(`We are now boarding all ${num} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3)