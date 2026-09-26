
const a = [1, 2, 3];

const b = a;
b.push(4);

console.log("Alias:", a);

const c = [1, 2, 3];

const d = [...c];
d.push(4);

console.log("Copy:", c);




const numbers = [1, 2, 3];
const otherNumbers = [4, 5, 6];

const combined = [...numbers, ...otherNumbers];

console.log("Combined:", combined);


const addEnd = [...numbers, 4];

console.log("Add to end:", addEnd);


const addFront = [0, ...numbers];

console.log("Add to front:", addFront);


console.log("Original length:", numbers.length);


const index = 1;

const removed = [
  ...numbers.slice(0, index),
  ...numbers.slice(index + 1)
];

console.log("Removed:", removed);
console.log("Original:", numbers);



const student = {
  name: "Sara",
  score: 90,
  attendance: 95
};



const updated = {
  ...student,
  score: 98
};

console.log("Original score:", student.score);
console.log("Updated score:", updated.score);


const withId = {
  ...student,
  id: 101
};

console.log("With id:", withId);


const { attendance, ...without } = student;

console.log("Without attendance:", without);



const defaults = {
  theme: "light",
  language: "English",
  notifications: true
};

const custom = {
  theme: "dark",
  language: "Arabic"
};


const settings = {
  ...defaults,
  ...custom
};

console.log("Correct:", settings);


const wrongSettings = {
  ...custom,
  ...defaults
};

console.log("Wrong:", wrongSettings);

const user = {
  name: "Sara",
  profile: {
    city: "Cairo"
  }
};

const copy = {
  ...user
};

copy.profile.city = "Qena";

console.log("Original city:", user.profile.city);


const user2 = {
  name: "Sara",
  profile: {
    city: "Cairo"
  }
};

const safeCopy = {
  ...user2,
  profile: {
    ...user2.profile
  }
};

safeCopy.profile.city = "Qena";

console.log("Original city after fix:", user2.profile.city);
console.log("Copy city:", safeCopy.profile.city);


function total(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log("Total:", total(10, 20, 30));
console.log("Total:", total(5, 10, 15, 20));


function logAll(label, ...items) {
  console.log(label);

  for (const item of items) {
    console.log(item);
  }
}

logAll("Students:", "Sara", "Omar", "Lina");


function moveFirst(first, ...others) {
  return [...others, first];
}

console.log("Moved:", moveFirst(1, 2, 3, 4));



// function wrong(...rest, last) {
//   console.log(rest, last);
// }




const scores = [10, 50, 30];


console.log("Without spread:", Math.max(scores));


console.log("With spread:", Math.max(...scores));
