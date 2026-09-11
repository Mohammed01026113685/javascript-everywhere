const scoreInput = document.getElementById("scoreInput");
const checkButton = document.getElementById("checkButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");
const historyList = document.getElementById("historyList");

const history = [];

checkButton.addEventListener("click", function () {
  const inputValue = scoreInput.value.trim();

  if (inputValue === "") {
    message.textContent = "Please enter a number between 0 and 100";
    return;
  }

  const score = Number(inputValue);

  if (Number.isNaN(score) || score < 0 || score > 100) {
    message.textContent = "Please enter a number between 0 and 100";
    return;
  }

  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  message.textContent = `Score: ${score} → Grade: ${grade}`;

  history.push({
    score: score,
    grade: grade
  });

  historyList.innerHTML = "";

  for (const item of history) {
    const listItem = document.createElement("li");
    listItem.textContent = `Score: ${item.score} → Grade: ${item.grade}`;
    historyList.appendChild(listItem);
  }

  console.log(history);
});

clearButton.addEventListener("click", function () {
  history.length = 0;
  historyList.innerHTML = "";
  message.textContent = "";
  scoreInput.value = "";

  console.log(history);
});