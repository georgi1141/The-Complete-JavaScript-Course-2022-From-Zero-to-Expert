//    first-class-functions-and-high-order-functions


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function (str, fn) {
  console.log(`Original str: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

}
// passing function as a parameter to another function
transformer('JavaScript is best!', upperFirstWord)
transformer('JavaScript is best!', oneWord)