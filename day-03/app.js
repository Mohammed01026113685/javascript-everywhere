// ====================
// Pure Logic
// ====================

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


// ====================
// DOM Handling
// ====================

const students = [];

const nameInput = document.querySelector("#nameInput");
const scoreInput = document.querySelector("#scoreInput");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const studentList = document.querySelector("#studentList");
const summary = document.querySelector("#summary");

function render() {
  studentList.innerHTML = "";

  for (const student of students) {
    const li = document.createElement("li");

    li.textContent = `${student.name} - Score: ${student.score} - Grade: ${letterGrade(student.score)}`;

    studentList.appendChild(li);
  }

  const scores = [];

  for (const student of students) {
    scores.push(student.score);
  }

  summary.textContent =
    `Students: ${students.length} | Average: ${average(scores).toFixed(1)}`;
}

function handleAdd() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (name === "") {
    alert("Please enter a student name.");
    return;
  }

  if (scoreInput.value === "") {
    alert("Please enter a score.");
    return;
  }

  if (!isValidScore(score)) {
    alert("Score must be a number between 0 and 100.");
    return;
  }

  students.push({
    name: name,
    score: score
  });

  console.log(students);

  nameInput.value = "";
  scoreInput.value = "";

  render();
}

function handleClear() {
  students.length = 0;

  render();
}

addButton.addEventListener("click", handleAdd);

clearButton.addEventListener("click", handleClear);

render();