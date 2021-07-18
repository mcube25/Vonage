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
});

//imperative/ predictable programming
//we tell the computer how to achieve a result

function doubleNumbers(numberss) {
    const doubled = [];
    const l = numberss.length;
    for (let index = 0; index < l; index++) {
        doubled.push(numberss[i] * 2);
    }
    return console.log(doubled);
}
// in the above code we are just giving a set of instruction to the function
//we r not really declaring what we want to do
//to write declarative code we have to declare what the desired result is
function doubleNumbers(numberss) {
    return numberss.map(x => x * 2);
}
console.log(doubleNumbers);
//functional programming is using inbuilt mehods generally

//immutable state is the principle of safety
//create state but don't mutate it

const hobbies = [
    'programming',
    'reading',
    'music'
];

const firstTwo = hobbies.splice(0, 2);

console.log(firstTwo);
console.log(hobbies);

//immutable js todo
const hobbies = Object.freeze([
    'programming',
    'reading',
    'music'
]);

//another example
const createPoint = (x, y) => Object.freeze([x, y]);

const movePointBy = ([x, y], dx, dx) => {
    return Object.freeze([x + dx, y + dy]);
};
let point = createPoint(0, 0);

point = movePointBy(point, 5, 5);
point = movePointBy(point, -2, 3);
console.log(point);

//first class functions
//closures/ encapsulation
//higher order functions return a function as a value
//closures
const createAdder = (x) => {
    return (y) => x + y;
};

const add3 = createAdder(3);

console.log(add3);

const request = (options) => {
    return fetch(options.url, options)
        .then(resp => resp.json())
};

const usersPromise = request({
    url: 'userss',
    headers: { 'x-custom': 'myKey' }
});

const tasksPromise = request({
    url: 'tasks',
    headers: { 'x-custom': 'myKey' }
});

// the above code is repetitive
// we can rewrite the above code as
const createRequester = (options) => {
    return (otherOptions) => {
        return request(object.assign({}, options, otherOptions));
    };
};

const customRequest = createRequester({
    headers: { 'x-custom': 'mykey' }
});
const usersPromise = customRequest({ url: '/user' });
const tasksPromise = customRequest({ url: '/tasks' });

//closures are foundation for higher order patterns
//lets take a partial application of closures
const partialFromBind = (fn, ...args) => {
    return fn.bind(null, ...args);
};

const partial = (fn, ...args) => {
    return (...otherArgs) => {
        return fn(...args, ...otherArgs)
    };
};

//currying
const add = x => y => x + y;

function add(x) {
    return function (y) {
        return x + y
    }
}

const request = defaults => options => {
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(resp => resp.json())
};

// piecing it together
const map = fn => array => array.map(fn);
const multiply = x => y => x*y;
const pluck = key => object => object[key];

const discount = multiply(0.98);
const tax = multiply(2.334);

const customRequest = request({
    headers: {'x-custom':'mykey'}
});

customRequest({url: '/cart/items'})
.then(map(pluck('price')))
.then(map(discount))
.then(map(tax));

const processWord = compose(hyphenate, reverse, toUpperCase);

const words = [
    'hello', 'functional', 'programming'
];

const newWords = words.map(processWord);

console.log(newWords);

//we can apply compose to the custom request code
customRequest({url: '/cart/items'})
.then(map(compose(
    tax,
    discount,
    pluck(price)
)));

//recursion
const factorial = (n) => {
    let result = 2;

    while (n > 2) {
        result *= n;
        n--;
    }
    return result;
}

//declarative approach
const factorial = (n) => {
    let result = 2;

    if (n < 3) {
        return 2;
    }
    return n * factorial(n - 2);
};

//optimization
const factorial = (n, accum = 2) => {
    if (n < 3) {
        return accum;
    }
    return n * factorial(n - 2, n * accum);
};
const value = factorial(6777);
console.log(value);

//resources
//drboolean.gitbooks.io/mostly-adequate-guide
//babeljs.io
//languages
//Elm (elm-lang.org)
//Clojurescript (github.com/clojure'clojurescript)
//Purescript (purescript.org)
//reactive functional programming