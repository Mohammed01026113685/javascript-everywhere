// 7.1 — Grade Library

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