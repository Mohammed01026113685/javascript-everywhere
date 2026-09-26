// 5.4 — Sync vs Async

function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }

  console.log("done");
}

repeat(3, (i) => {
  console.log("sync callback", i);
});


// Async version

function repeatLater(times, callback) {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      callback(i);
    }, 0);
  }

  console.log("done");
}

repeatLater(3, (i) => {
  console.log("async callback", i);
});

// Sync: callback runs immediately.
// Async: callback runs later after the current code finishes.


// --------------------------------------------------
// 5.5 — You can't return from the future

function getScoreLater() {
  setTimeout(() => {
    return 95;
  }, 100);
}

const score = getScoreLater();

console.log("Returned score:", score);


// Correct version

function getScoreLaterWithCallback(callback) {
  setTimeout(() => {
    const score = 95;
    const grade = score >= 90 ? "A" : "B";

    callback(grade);
  }, 100);
}

getScoreLaterWithCallback((grade) => {
  console.log("Grade:", grade);
});

// You can't return the score because setTimeout runs later,
// after getScoreLater() has already finished.


// --------------------------------------------------
// 5.6 — Error-first callbacks

const students = [
  { id: 1, name: "Sara", score: 95 },
  { id: 2, name: "Omar", score: 85 }
];

function findStudent(id, callback) {
  const student = students.find((student) => student.id === id);

  if (!student) {
    return callback(new Error("Student not found"));
  }

  callback(null, student);
}


// Good ID

findStudent(1, (err, { name, score } = {}) => {
  if (err) {
    return console.log("Error:", err.message);
  }

  console.log("Found:", name, score);
});


// Bad ID

// findStudent(99, (err, { name, score } = {}) => {
//   if (err) {
//     return console.log("Error:", err.message);
//   }

//   console.log("Found:", name, score);
// });


// Test this temporarily for the screenshot:
// Remove the return from callback(err)
// to prove the callback can fire twice.

if (!student) {
  callback(new Error("Student not found"));
  callback(null, student);
}


// --------------------------------------------------
// 5.7 — try/catch can't save you

// Run this part separately for the crash screenshot.

// try {
//   setTimeout(() => {
//     throw new Error("Async crash");
//   }, 100);
// } catch (err) {
//   console.log("Caught:", err.message);
// }

// try/catch cannot catch an error thrown later inside setTimeout.


// Safe version

function runLater(callback) {
  setTimeout(() => {
    try {
      throw new Error("Something went wrong");
    } catch (err) {
      callback(err);
    }
  }, 100);
}

runLater((err) => {
  if (err) {
    console.log("Handled:", err.message);
    return;
  }

  console.log("Success");
});

