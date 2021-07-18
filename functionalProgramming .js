const R = require('ramda');
const tripple = x => x * 3;
const half = x => x / 2;
const square = x => x ** 2;

const f2 = R.compose(tripple, half, square);
console.log("f2" + f2(3));
const f3 = R.pipe(tripple, half, square);
console.log('f3' + f3(3));

//functional programming is so important
//what is functional programing and y is it different from oop
//why functional programming
f(x) = x + 2;
// four principles of functional programming
// immutable state
//first class state
//composable first and class closures
//predictability
// let and const are block scope declaration
const add = (a, m) => { return a + m }
const identity = x => x;
//implicit declaration
//spread opeerator 
const array = (...elements) => {
    return elements
};
array(2, 3, 4);
console.log(array);
//spread operators can also pass variable arrangements of arguments

let tax = (...args) => {
    console.log(...args);
};
console.log('hello', 'scenic city summit');

//destructuring
const langs = ['js', 'ruby', 'vonage'];
const [js, ...rest] = langs
js === 'js';
rest[0] === 'ruby';
rest[I] === 'vonage';

Object.assign(
    {},
    { hello: 'javaScript' },
    { hi: 'scenic city summit' }
);

class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moveBy(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

function point(x, y) {
    this.x = x;
    this.y = y;
}

point.prototype.moveBy =
    function (dx, dy) {
        this.x += dx;
        this.y += dy;
    }

//pure and predictable functions 
const add = (a, m) => {
    return a + m
}
//pure functions do not have side effects
//impure functions are harder to test
//hidden state is uncertain state
//if we write pure functions it becomes easier to test
const upperName = (name) => name.toUpperCase();

describe('api', () => {
    it('returns an uppercase name', () => {
        expect(upperName('jeremy')).to.equal('JEREMY');
        expect(upperName('jet')).to.equal('JET');
    })
})