const R = require('ramda');
const tripple = x => x * 3;
const half = x => x / 2;
const square = x => x ** 2;

const f2 = R.compose(tripple, half, square);
console.log("f2" + f2(3));
const f3 = R.pipe(tripple, half, square);
console.log('f3' + f3(3));