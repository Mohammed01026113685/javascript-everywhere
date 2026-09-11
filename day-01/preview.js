const students = [
  { name: "Ahmed", score: 95 },
  { name: "Mona", score: 84 },
  { name: "Ali", score: 72 },
  { name: "Sara", score: 65 },
  { name: "Omar", score: 91 }
];

let excellent = 0;
let good = 0;
let needsWork = 0;

for (const student of students) {
  if (student.score >= 90) {
    console.log(`${student.name}: ${student.score} → Excellent`);
    excellent++;
  } else if (student.score >= 70) {
    console.log(`${student.name}: ${student.score} → Good`);
    good++;
  } else {
    console.log(`${student.name}: ${student.score} → Needs work`);
    needsWork++;
  }
}

console.log(
  `Excellent: ${excellent} | Good: ${good} | Needs work: ${needsWork}`
);