
function isValidScore(score) {
  return (
    typeof score === "number" &&
    !Number.isNaN(score) &&
    score >= 0 &&
    score <= 100
  );
}

function letterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function isPassing(score, passMark = 60) {
  return score >= passMark;
}

function isAtRisk(student) {
  return student.score < 60 || student.attendance < 70;
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total / numbers.length;
}

function highest(students) {
  let highestStudent = students[0];

  for (const student of students) {
    if (student.score > highestStudent.score) {
      highestStudent = student;
    }
  }

  return highestStudent;
}

function lowest(students) {
  let lowestStudent = students[0];

  for (const student of students) {
    if (student.score < lowestStudent.score) {
      lowestStudent = student;
    }
  }

  return lowestStudent;
}

function countByGrade(students) {
  const counts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  };

  for (const student of students) {
    const grade = letterGrade(student.score);
    counts[grade]++;
  }

  return counts;
}

function formatRow(student) {
  const name = student.name.padEnd(12);
  const score = String(student.score).padStart(5);
  const attendance = `${student.attendance}%`.padStart(6);
  const grade = letterGrade(student.score).padStart(6);
  const status = isAtRisk(student) ? "At risk" : "OK";

  return `${name}${score}${attendance}${grade}   ${status}`;
}

// ====================
// Report Program
// ====================

const students = [
  { name: "Sara", score: 95, attendance: 92 },
  { name: "Omar", score: 85, attendance: 88 },
  { name: "Lina", score: 76, attendance: 91 },
  { name: "Ahmed", score: 65, attendance: 75 },
  { name: "Mona", score: 55, attendance: 90 },
  { name: "Youssef", score: 45, attendance: 60 },
  { name: "Nour", score: 90, attendance: 85 },
  { name: "Hana", score: 82, attendance: 65 },
  { name: "Khaled", score: 72, attendance: 80 },
  { name: "Dina", score: 60, attendance: 95 },
  { name: "Ali", score: "invalid", attendance: 80 },
  { name: "Broken", score: null, attendance: 75 }
];

const validStudents = [];
let skippedCount = 0;

console.log(
  "Name".padEnd(12) +
  "Score".padStart(5) +
  "Attend".padStart(8) +
  "Grade".padStart(7) +
  "   Status"
);

console.log("-".repeat(45));

for (const student of students) {
  if (!isValidScore(student.score)) {
    skippedCount++;
    continue;
  }

  validStudents.push(student);

  console.log(formatRow(student));
}

const scores = [];

for (const student of validStudents) {
  scores.push(student.score);
}

const gradeCounts = countByGrade(validStudents);
const classAverage = average(scores);

const highestStudent = highest(validStudents);
const lowestStudent = lowest(validStudents);

let atRiskCount = 0;

for (const student of validStudents) {
  if (isAtRisk(student)) {
    atRiskCount++;
  }
}

console.log("\nSummary");
console.log("-".repeat(30));

console.log(`A: ${gradeCounts.A}`);
console.log(`B: ${gradeCounts.B}`);
console.log(`C: ${gradeCounts.C}`);
console.log(`D: ${gradeCounts.D}`);
console.log(`F: ${gradeCounts.F}`);

console.log(`Class average: ${classAverage.toFixed(1)}`);
console.log(`Highest: ${highestStudent.name}`);
console.log(`Lowest: ${lowestStudent.name}`);
console.log(`At risk: ${atRiskCount}`);
console.log(`Skipped invalid records: ${skippedCount}`);
