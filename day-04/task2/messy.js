
const students = [
  {
    name: "Sara",
    address: {
      city: "Cairo"
    },
    scores: [95, 90],
    attendance: 92
  },

  {
    name: "Omar",
    scores: [85, 80],
    attendance: 88
  },

  {
    name: "Lina",
    address: {},
    scores: [76, 70],
    attendance: 91
  },

  {
    name: "Ahmed",
    address: {
      city: "Qena"
    },
    scores: [],
    attendance: 75
  },

  {
    name: "Mona",
    scores: [90],
    attendance: 0
  }
];



for (const student of students) {
  console.log(
    student.address?.city ?? "Unknown"
  );
}

console.log("First scores:");

for (const student of students) {
  console.log(
    student.scores?.[0] ?? "No scores yet"
  );
}

console.log("Attendance:");

for (const student of students) {
  console.log(
    student.attendance ?? "Unknown"
  );
}



console.log("Using ||:");

for (const student of students) {
  console.log(
    student.attendance || "Unknown"
  );
}


function getCity(student) {
  return student.address?.city ?? "Unknown";
}

function safeFirstScore(student) {
  return student.scores?.[0] ?? null;
}

console.log("Function results:");

for (const student of students) {
  console.log(getCity(student));
  console.log(safeFirstScore(student));
}



const student = {
  name: "Sara"
};

console.log(student.getName?.());
