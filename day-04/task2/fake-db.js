// 6.1 — Fake Database

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


// Find Student

function findStudent(id, callback) {
  setTimeout(() => {
    const student = students[id];

    if (!student) {
      return callback(new Error("Student not found"));
    }

    callback(null, student);
  }, 300);
}


// Find Course

function findCourse(id, callback) {
  setTimeout(() => {
    const course = courses[id];

    if (!course) {
      return callback(new Error("Course not found"));
    }

    callback(null, course);
  }, 200);
}


// Find Teacher

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


// Find City

function findCity(id, callback) {
  setTimeout(() => {
    const city = cities[id];

    if (!city) {
      return callback(new Error("City not found"));
    }

    callback(null, city);
  }, 150);
}