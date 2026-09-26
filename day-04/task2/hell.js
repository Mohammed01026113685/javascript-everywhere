// 6.2 — Callback Hell

const students = {
  1: {
    id: 1,
    name: "Sara",
    courseId: 101
  },
  2: {
    id: 2,
    name: "Omar",
    courseId: 102
  },
  3: {
    id: 3,
    name: "Lina",
    courseId: 103
  }
};

const courses = {
  101: {
    id: 101,
    name: "JavaScript",
    teacherId: 201
  },
  102: {
    id: 102,
    name: "React",
    teacherId: 202
  },
  103: {
    id: 103,
    name: "Node.js",
    teacherId: 201
  }
};

const teachers = {
  201: {
    id: 201,
    name: "Ahmed",
    cityId: 301
  },
  202: {
    id: 202,
    name: "Mona",
    cityId: 302
  }
};

const cities = {
  301: {
    id: 301,
    name: "Qena"
  },
  302: {
    id: 302,
    name: "Cairo"
  }
};


// ==============================
// Fake DB Functions
// ==============================

function findStudent(id, callback) {
  setTimeout(() => {
    const student = students[id];

    if (!student) {
      return callback(new Error("Student not found"));
    }

    callback(null, student);
  }, 300);
}


function findCourse(id, callback) {
  setTimeout(() => {
    const course = courses[id];

    if (!course) {
      return callback(new Error("Course not found"));
    }

    callback(null, course);
  }, 200);
}


function findTeacher(id, callback) {
  const delay = id === 201 ? 400 : 100;

  setTimeout(() => {
    const teacher = teachers[id];

    if (!teacher) {
      return callback(new Error("Teacher not found"));
    }

    callback(null, teacher);
  }, delay);
}


function findCity(id, callback) {
  setTimeout(() => {
    const city = cities[id];

    if (!city) {
      return callback(new Error("City not found"));
    }

    callback(null, city);
  }, 150);
}


// ==============================
// Callback Hell
// ==============================

findStudent(1, (studentError, student) => {
  if (studentError) {
    return console.log("Student error:", studentError.message);
  }

  findCourse(student.courseId, (courseError, course) => {
    if (courseError) {
      return console.log("Course error:", courseError.message);
    }

    findTeacher(course.teacherId, (teacherError, teacher) => {
      if (teacherError) {
        return console.log("Teacher error:", teacherError.message);
      }

      findCity(teacher.cityId, (cityError, city) => {
        if (cityError) {
          return console.log("City error:", cityError.message);
        }

        console.log(
          `${student.name} studies ${course.name} with ${teacher.name} in ${city.name}`
        );
      });
    });
  });
});


// ==============================
// Bad Student
// ==============================

findStudent(999, (err, student) => {
  if (err) {
    return console.log("Bad student:", err.message);
  }
});


// ==============================
// Bad Course
// ==============================

findStudent(1, (studentError, student) => {
  if (studentError) {
    return console.log("Student error:", studentError.message);
  }

  findCourse(999, (courseError, course) => {
    if (courseError) {
      return console.log("Bad course:", courseError.message);
    }
  });
});


// ==============================
// Bad Teacher
// ==============================

findStudent(1, (studentError, student) => {
  if (studentError) {
    return console.log("Student error:", studentError.message);
  }

  findCourse(student.courseId, (courseError, course) => {
    if (courseError) {
      return console.log("Course error:", courseError.message);
    }

    findTeacher(999, (teacherError, teacher) => {
      if (teacherError) {
        return console.log("Bad teacher:", teacherError.message);
      }
    });
  });
});


// Deepest callback indentation: 4 levels