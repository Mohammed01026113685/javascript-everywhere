const scores = [95, 85, 75, 65, 45, 105, -5];

for (const score of scores) {
  let grade;

  if (score < 0 || score > 100) {
    grade = "Invalid score";
  } else if (score >= 90) {
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

  console.log(`${score} → ${grade}`);
}



const passScore = 75;
const result = passScore >= 60 ? "pass" : "fail";

console.log(`Pass check: ${result}`);

const letter = "B";

switch (letter) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Very good");

  case "C":
    console.log("Good");
    break;

  case "D":
    console.log("Needs improvement");
    break;

  case "E":
    console.log("Poor");
    break;

  case "F":
    console.log("Fail");

  default:
    console.log("Unknown grade");
}


// 3.4 — Logical operators

const score1 = 85;
const attendance1 = 90;

if (score1 >= 70 && attendance1 >= 80) {
  console.log("Certificate awarded");
}

if (score1 < 60 || attendance1 < 50) {
  console.log("Review needed");
}


const score2 = 55;
const attendance2 = 45;

if (score2 >= 70 && attendance2 >= 80) {
  console.log("Certificate awarded");
}

if (score2 < 60 || attendance2 < 50) {
  console.log("Review needed");
}