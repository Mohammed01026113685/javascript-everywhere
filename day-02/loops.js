
for (let number = 1; number <= 20; number++) {
  if (number % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(number);
  }
}



const tracks = [
  "JavaScript",
  "Node.js",
  "React",
  "Web Development",
  "Git",
  "APIs"
];

let position = 1;

for (const track of tracks) {
  console.log(`${position}. ${track}`);
  position++;
}



const student = {
  name: "Mohammed",
  age: 25,
  city: "Qena",
  track: "JavaScript",
  level: "Beginner"
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}



let value = 100;

while (value >= 1) {
  console.log(value);
  value = value / 2;
}



let counter = 10;

do {
  console.log(`do...while ran once: ${counter}`);
  counter++;
} while (counter < 10);



const scores = [40, 55, 70, 45, 80, 96, 90];

for (const score of scores) {
  if (score < 50) {
    continue;
  }

  if (score > 95) {
    break;
  }

  console.log(`Printed score: ${score}`);
}

const numbers = [10, 25, 7, 40, 18, 32, 5, 20];

let sum = 0;
let highest = numbers[0];
let lowest = numbers[0];

for (const number of numbers) {
  sum += number;

  if (number > highest) {
    highest = number;
  }

  if (number < lowest) {
    lowest = number;
  }
}

const average = sum / numbers.length;

console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);