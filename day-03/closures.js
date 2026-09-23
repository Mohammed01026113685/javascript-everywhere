// 4.1 — Counter

function makeCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());



function makeMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const half = makeMultiplier(0.5);

console.log(double(10));
console.log(triple(10));
console.log(half(10));


// 4.3 — Grader factory

function makeGrader(passMark) {
    return function (score) {
        return score >= passMark ? "Pass" : "Fail";
    };
}

const strictGrader = makeGrader(85);
const lenientGrader = makeGrader(60);

console.log(strictGrader(75));
console.log(lenientGrader(75));


// 4.4 — Own forEach

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const technologies = ["Web", "Mobile", "Backend"];

myForEach(technologies, (item, index) => {
    console.log(`${index + 1}. ${item}`);
});


// 4.5 — Own map and filter

function myMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i));
    }

    return result;
}

function myFilter(array, test) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4];

const doubled = myMap(numbers, (number) => number * 2);

const scores = [45, 60, 75, 90, 55];
const passingScores = myFilter(scores, (score) => score >= 60);

console.log(doubled);
console.log(passingScores);
console.log(numbers);


// 4.6 — Callback, not call

function sayHi() {
    console.log("Hi");
}

function runTwice(fn) {
    fn();
    fn();
}

runTwice(sayHi);

