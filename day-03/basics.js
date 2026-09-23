// 3.1 — Three levels

const globalVar = "global";

function scopeTest() {
    const functionVar = "function";

    if (true) {
        const blockVar = "block";

        console.log(globalVar);
        console.log(functionVar);
        console.log(blockVar);
    }
}

scopeTest();




if (true) {
    let letVar = "let";
    var varVar = "var";
}

// console.log(letVar); // ReferenceError: letVar is not defined
console.log(varVar);

// var escaped the if block because var is function-scoped,
// while let is block-scoped. This can cause unexpected access
// and accidental variable changes outside the block.


// 3.3 — Shadowing

const status = "global";

function showStatus() {
    const status = "local";

    console.log(status);
}

showStatus();
console.log(status);



// 3.4 — Hoisting

sayHello();

function sayHello() {
    console.log("Hello");
}

console.log(score);

var score = 100;

// console.log(age); // ReferenceError: Cannot access 'age' before initialization

let age = 25;

const arrowHello = () => {
    console.log("Arrow Hello");
};

arrowHello(); 




const fnsVar = [];

for (var i = 0; i < 3; i++) {
    fnsVar.push(() => i);
}

fnsVar.forEach((f) => console.log(f()));

const fnsLet = [];

for (let j = 0; j < 3; j++) {
    fnsLet.push(() => j);
}

fnsLet.forEach((f) => console.log(f()));
