// 7.3 + 7.4 — Async Grade Report

const fs = require("fs");

// Paste grade-lib.js functions here

function isValidScore(score) {
  return typeof score === "number" && score >= 0 && score <= 100;
}

function letterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function isPassing({ score, passMark = 60 }) {
  return score >= passMark;
}

function isAtRisk({ score = 0, attendance = 0 }) {
  return score < 60 || attendance < 75;
}

function average(numbers) {
  if (numbers.length === 0) return 0;

  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

function minMaxStudent(students) {
  if (students.length === 0) return [undefined, undefined];

  let lowest = students[0];
  let highest = students[0];

  for (const student of students) {
    if (student.score < lowest.score) {
      lowest = student;
    }

    if (student.score > highest.score) {
      highest = student;
    }
  }

  return [lowest, highest];
}

function countByGrade(students) {
  const counts = {};

  for (const { score } of students) {
    const grade = letterGrade(score);
    counts[grade] = (counts[grade] ?? 0) + 1;
  }

  return counts;
}

function formatRow({ name, score, attendance } = {}) {
  return `${String(name ?? "Unknown").padEnd(10)} | ${String(score ?? 0).padStart(3)} | ${String(attendance ?? 0).padStart(3)}%`;
}

function withBonus(student, bonus = 5) {
  return {
    ...student,
    score: student.score + bonus
  };
}

function withoutField(student, field) {
  const copy = { ...student };
  delete copy[field];
  return copy;
}

// ------------------------------------
// Async attendance simulation
// ------------------------------------

function getAttendance(id, callback) {
  const delays = {
    1: 700,
    2: 200,
    3: 500,
    4: 100,
    5: 600,
    6: 300,
    7: 800,
    8: 150,
    9: 450,
    10: 250,
    11: 350,
    12: 550
  };

  const attendance = {
    1: 92,
    2: 88,
    3: 91,
    4: 75,
    5: 68,
    6: 89,
    7: 94,
    8: 79,
    9: 86,
    10: 62,
    11: 81,
    12: 90
  };

  const delay = delays[id] ?? 300;

  setTimeout(() => {
    callback(null, attendance[id]);
  }, delay);
}

// ------------------------------------
// Read students.json asynchronously
// ------------------------------------

console.log("Loading…");

const startTime = Date.now();

fs.readFile("students.json", "utf8", (readError, text) => {
  if (readError) {
    return console.log("Read error:", readError.message);
  }

  let students;

  try {
    students = JSON.parse(text);
  } catch (parseError) {
    return console.log("JSON parse error:", parseError.message);
  }

  const results = new Array(students.length);
  let completed = 0;

  // Every attendance request starts immediately.
  // They run in parallel, but results are stored by original index.
  students.forEach((student, index) => {
    getAttendance(student.id, (error, attendance) => {
      if (error) {
        return console.log("Attendance error:", error.message);
      }

      results[index] = {
        ...student,
        attendance
      };

      completed++;

      console.log(
        `Attendance arrived: ${student.name} → ${attendance}%`
      );

      if (completed === students.length) {
        printReport(results, startTime);
      }
    });
  });
});

// ------------------------------------
// Report
// ------------------------------------

function printReport(students, startTime) {
  console.log("\n==============================");
  console.log("       STUDENT REPORT");
  console.log("==============================");

  const validStudents = [];
  let invalidCount = 0;

  for (const { name, score } of students) {
    if (!isValidScore(score)) {
      invalidCount++;
      continue;
    }

    validStudents.push(
      students.find((student) => student.name === name)
    );
  }

  console.log("\nName       | Score | Attendance");
  console.log("--------------------------------");

  for (const student of validStudents) {
    console.log(formatRow(student));
  }

  console.log("--------------------------------");

  const [lowest, highest] = minMaxStudent(validStudents);

  console.log(
    `Lowest: ${lowest.name} (${lowest.score})`
  );

  console.log(
    `Highest: ${highest.name} (${highest.score})`
  );

  const averageScore = average(
    validStudents.map(({ score }) => score)
  );

  console.log(
    `Average score: ${averageScore.toFixed(2)}`
  );

  console.log(`Invalid records: ${invalidCount}`);

  console.log("\nGrade tally:");

  const gradeCounts = countByGrade(validStudents);

  for (const [grade, count] of Object.entries(gradeCounts)) {
    console.log(`${grade}: ${count}`);
  }

  console.log("\nBonus test:");

  const bonusStudent = validStudents[0];
  const boostedStudent = withBonus(bonusStudent);

  console.log(
    `Original: ${bonusStudent.name} → ${bonusStudent.score}`
  );

  console.log(
    `Boosted:  ${boostedStudent.name} → ${boostedStudent.score}`
  );

  console.log(
    `Original unchanged: ${bonusStudent.score}`
  );

  console.log("\n--------------------------------");

  const totalTime = Date.now() - startTime;

  console.log(`Parallel total: ${totalTime}ms`);

  // The slowest request is 800ms.
  // One-after-another would take about 4600ms.
  console.log("Sequential estimate: about 4600ms");

  console.log("--------------------------------");
}