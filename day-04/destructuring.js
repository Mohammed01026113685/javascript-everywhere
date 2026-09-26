
const student = {
  name: "Sara",
  score: 92,
  city: "Cairo"
};

const { name, score } = student;
console.log(name, score);

const { city: hometown } = student;
console.log(hometown);

const { attendance = 0 } = student;
console.log(attendance);

const { level: tier = "Beginner" } = student;
console.log(tier);


const user = {
  profile: {
    email: "sara@example.com",
    github: "sara-dev"
  }
};

const {
  profile: { email }
} = user;

console.log(email);


const {
  profile,
  profile: { email: profileEmail }
} = user;

console.log(profile);
console.log(profileEmail);


const numbers = [10, 20, 30, 40, 50];

// First two items
const [first, second] = numbers;
console.log(first, second);

const [, , , fourth] = numbers;
console.log(fourth);

const [, , , , , sixth = 60] = numbers;
console.log(sixth);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

const [head, ...tail] = numbers;

console.log(head);
console.log(tail);



function describe({ name, score, city = "Unknown" }) {
  return `${name} scored ${score} in ${city}.`;
}

console.log(
  describe({
    name: "Sara",
    score: 92,
    city: "Cairo"
  })
);

console.log(
  describe({
    name: "Omar",
    score: 85
  })
);


function summarise(
  { name, score = 0, passMark = 60 } = {}
) {
  const result = score >= passMark ? "PASS" : "FAIL";

  return `${name ?? "Unknown"}: ${result}`;
}

console.log(
  summarise({
    name: "Sara",
    score: 92,
    passMark: 60
  })
);

console.log(
  summarise({
    name: "Omar"
  })
);

console.log(
  summarise()
);


// TypeError demonstration
function brokenSummarise({ name, score = 0 } = {}) {
  return `${name ?? "Unknown"}: ${score}`;
}


const students = [
  { name: "Sara", score: 95 },
  { name: "Omar", score: 85 },
  { name: "Lina", score: 76 },
  { name: "Ahmed", score: 55 },
  { name: "Mona", score: 88 }
];

function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

for (const { name, score } of students) {
  const grade = getGrade(score);

  console.log(`${name}: ${score} → ${grade}`);
}



const gradeTally = {};

for (const { score } of students) {
  const grade = getGrade(score);

  if (gradeTally[grade] === undefined) {
    gradeTally[grade] = 0;
  }

  gradeTally[grade]++;
}

console.log("\nGrade Tally");

for (const [grade, count] of Object.entries(gradeTally)) {
  console.log(`${grade}: ${count}`);
}

