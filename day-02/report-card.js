const students = [
  { name: "Sara", score: 95, attendance: 92 },
  { name: "Omar", score: 85, attendance: 88 },
  { name: "Lina", score: 76, attendance: 91 },
  { name: "Ahmed", score: 65, attendance: 75 },
  { name: "Mona", score: 55, attendance: 90 },
  { name: "Youssef", score: 45, attendance: 60 },
  { name: "Nour", score: 90, attendance: 85 },
  { name: "Ali", score: "invalid", attendance: 80 },
  { name: "Hana", score: 82, attendance: 65 }
];

let excellentCount = 0;
let goodCount = 0;
let averageCount = 0;
let belowAverageCount = 0;
let failCount = 0;

let totalScore = 0;
let validStudents = 0;
let atRiskCount = 0;
let skippedCount = 0;

let highestScore = -1;
let highestStudent = "";

let lowestScore = 101;
let lowestStudent = "";

console.log(
  "Name".padEnd(12) +
  "Score".padEnd(8) +
  "Attendance".padEnd(14) +
  "Grade".padEnd(8) +
  "Status"
);

console.log("-".repeat(60));

for (const student of students) {
  if (typeof student.score !== "number" || Number.isNaN(student.score)) {
    skippedCount++;
    continue;
  }

  let grade;

  if (student.score > 90) {
    grade = "A";
    excellentCount++;
  } else if (student.score >= 80) {
    grade = "B";
    goodCount++;
  } else if (student.score >= 70) {
    grade = "C";
    averageCount++;
  } else if (student.score >= 60) {
    grade = "D";
    belowAverageCount++;
  } else {
    grade = "F";
    failCount++;
  }

  let status = "OK";

  if (student.score < 60 || student.attendance < 70) {
    status = "At risk";
    atRiskCount++;
  }

  totalScore += student.score;
  validStudents++;

  if (student.score > highestScore) {
    highestScore = student.score;
    highestStudent = student.name;
  }

  if (student.score < lowestScore) {
    lowestScore = student.score;
    lowestStudent = student.name;
  }

  console.log(
    `${student.name.padEnd(12)}${String(student.score).padEnd(8)}${`${student.attendance}%`.padEnd(14)}${grade.padEnd(8)}${status}`
  );
}

const classAverage = totalScore / validStudents;

console.log("\nSummary");
console.log("-".repeat(30));
console.log(`A: ${excellentCount}`);
console.log(`B: ${goodCount}`);
console.log(`C: ${averageCount}`);
console.log(`D: ${belowAverageCount}`);
console.log(`F: ${failCount}`);
console.log(`Class average: ${classAverage.toFixed(1)}`);
console.log(`Highest: ${highestStudent} (${highestScore})`);
console.log(`Lowest: ${lowestStudent} (${lowestScore})`);
console.log(`At risk: ${atRiskCount}`);
console.log(`Skipped invalid records: ${skippedCount}`);