// ==============================
// PURE LOGIC
// ==============================

let students = [
    { name: "Sara", score: 95, city: "Qena" },
    { name: "Omar", score: 85, city: "Cairo" }
];


function describe({ name, score, city = "Unknown" }) {
    return `${name} scored ${score} and lives in ${city}.`;
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


function isValidScore(score) {
    return (
        typeof score === "number" &&
        !Number.isNaN(score) &&
        score >= 0 &&
        score <= 100
    );
}


function fetchStudents(callback) {
    setTimeout(() => {
        const failed = Math.random() < 0.25;

        if (failed) {
            callback(new Error("Failed to load students."), null);
            return;
        }

        const loadedStudents = [
            { name: "Lina", score: 76, city: "Luxor" },
            { name: "Ahmed", score: 65, city: "Qena" },
            { name: "Mona", score: 55, city: "Aswan" }
        ];

        callback(null, loadedStudents);
    }, 1500);
}


function blockFor(milliseconds) {
    const start = Date.now();

    while (Date.now() - start < milliseconds) {
        // Intentionally blocking the main thread.
    }
}


function runChunked(total, step) {
    let completed = 0;

    function processStep() {
        const chunkSize = 100000;

        for (let i = 0; i < chunkSize && completed < total; i++) {
            completed++;
        }

        const percentage = Math.round((completed / total) * 100);

        progress.textContent = `Progress: ${percentage}%`;

        if (completed < total) {
            setTimeout(processStep, 0);
        } else {
            progress.textContent = "Chunked work complete.";
        }
    }

    step(processStep);
}


// ==============================
// DOM HANDLING
// ==============================

const nameInput = document.querySelector("#nameInput");
const scoreInput = document.querySelector("#scoreInput");
const cityInput = document.querySelector("#cityInput");

const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const loadButton = document.querySelector("#loadButton");

const freezeButton = document.querySelector("#freezeButton");
const chunkedButton = document.querySelector("#chunkedButton");

const studentList = document.querySelector("#studentList");
const summary = document.querySelector("#summary");
const errorMessage = document.querySelector("#errorMessage");
const progress = document.querySelector("#progress");


function render() {
    studentList.innerHTML = "";

    for (const student of students) {
        const li = document.createElement("li");

        li.textContent = describe(student);

        studentList.appendChild(li);
    }

    const scores = students.map((student) => student.score);

    summary.textContent =
        `Students: ${students.length} | Average: ${average(scores).toFixed(1)}`;
}


function handleAdd() {
    errorMessage.textContent = "";

    const name = nameInput.value.trim();
    const scoreText = scoreInput.value.trim();
    const city = cityInput.value.trim();

    if (name === "") {
        errorMessage.textContent = "Name is required.";
        return;
    }

    if (scoreText === "") {
        errorMessage.textContent = "Score is required.";
        return;
    }

    const score = Number(scoreText);

    if (typeof score !== "number" || Number.isNaN(score)) {
        errorMessage.textContent = "Score must be a number.";
        return;
    }

    if (!isValidScore(score)) {
        errorMessage.textContent = "Score must be between 0 and 100.";
        return;
    }

    let newStudent;

    if (city === "") {
        newStudent = {
            name,
            score
        };
    } else {
        newStudent = {
            name,
            score,
            city
        };
    }

    students = [...students, newStudent];

    console.log(students);

    nameInput.value = "";
    scoreInput.value = "";
    cityInput.value = "";

    render();
}


function handleClear() {
    students = [];

    errorMessage.textContent = "";

    render();
}


function handleLoad() {
    errorMessage.textContent = "";

    loadButton.disabled = true;
    loadButton.textContent = "Loading…";

    fetchStudents((error, loadedStudents) => {
        loadButton.disabled = false;
        loadButton.textContent = "Load from server";

        if (error) {
            errorMessage.textContent = error.message;
            return;
        }

        students = [...students, ...loadedStudents];

        render();
    });

    console.log("Request sent. The page can continue running.");
}


function handleFreeze() {
    progress.textContent = "Freezing for 3 seconds...";

    blockFor(3000);

    progress.textContent = "Freeze complete.";
}


function handleChunked() {
    progress.textContent = "Starting chunked work...";

    runChunked(3000000, (step) => {
        setTimeout(step, 0);
    });
}


addButton.addEventListener("click", handleAdd);

clearButton.addEventListener("click", handleClear);

loadButton.addEventListener("click", handleLoad);

freezeButton.addEventListener("click", handleFreeze);

chunkedButton.addEventListener("click", handleChunked);


render();