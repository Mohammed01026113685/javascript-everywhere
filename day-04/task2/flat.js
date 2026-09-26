// 6.3 — Flatten the Callback Hell

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
// Fake DB
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
// Named Functions
// ==============================

function getStudent(id, done) {
  findStudent(id, (err, student) => {
    if (err) {
      return done(err);
    }

    done(null, {
      student: {
        ...student
      }
    });
  });
}


function getCourse(data, done) {
  findCourse(data.student.courseId, (err, course) => {
    if (err) {
      return done(err);
    }

    done(null, {
      ...data,
      course: {
        ...course
      }
    });
  });
}


function getTeacher(data, done) {
  findTeacher(data.course.teacherId, (err, teacher) => {
    if (err) {
      return done(err);
    }

    done(null, {
      ...data,
      teacher: {
        ...teacher
      }
    });
  });
}


function getCity(data, done) {
  findCity(data.teacher.cityId, (err, city) => {
    if (err) {
      return done(err);
    }

    done(null, {
      ...data,
      city: {
        ...city
      }
    });
  });
}


// ==============================
// buildReport
// ==============================

function buildReport(id, done) {
  getStudent(id, (err, data) => {
    if (err) {
      return done(err);
    }

    getCourse(data, (err, data) => {
      if (err) {
        return done(err);
      }

      getTeacher(data, (err, data) => {
        if (err) {
          return done(err);
        }

        getCity(data, (err, data) => {
          if (err) {
            return done(err);
          }

          done(null, data);
        });
      });
    });
  });
}


// ==============================
// Good ID
// ==============================

buildReport(1, (err, data) => {
  if (err) {
    return console.log("Good report error:", err.message);
  }

  console.log(
    `${data.student.name} studies ${data.course.name} with ${data.teacher.name} in ${data.city.name}`
  );
});


// ==============================
// Bad ID
// ==============================

buildReport(999, (err, data) => {
  if (err) {
    return console.log("Bad report error:", err.message);
  }

  console.log(data);
});


// The bad report finishes first because it fails at the first lookup.
// The good report waits for all four async lookups to finish.


// ==============================
// 6.4 — once()
// ==============================

function once(fn) {
  let called = false;

  return (...args) => {
    if (called) {
      return;
    }

    called = true;
    fn(...args);
  };
}


function callTwice(callback) {
  callback("first call");
  callback("second call");
}


const safeCallback = once((message) => {
  console.log("Callback:", message);
});


callTwice(safeCallback);