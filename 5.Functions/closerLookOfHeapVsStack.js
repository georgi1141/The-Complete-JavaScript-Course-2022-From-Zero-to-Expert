const flight = 'AB123'
const georgi = {
  name: 'Georgi Y.',
  passport: 456785432
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'CD321'
  passenger.name = 'Mr. ' + passenger.name

  if (passenger.passport === 456785432) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
}

checkIn(flight, georgi)
// initial flight name has not been replaced because it makes a copy of the original value
console.log(flight);
// value in object has been changed as it is reference type value and stored in the heap memory