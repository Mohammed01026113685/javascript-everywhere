# Day 01 — JavaScript Everywhere

## 1. Development Environment

### Node.js

Node.js allows me to run JavaScript outside the browser.

I can run a JavaScript file using:

```bash
node profile.js
```

Check the Node.js version:

```bash
node --version
```

### npm

npm is the package manager for Node.js.

I use npm to install and manage JavaScript packages and dependencies.

Check the npm version:

```bash
npm --version
```

### Git

Git is a version control system.

I use Git to track changes in my code and save different versions of my project.

Check the Git version:

```bash
git --version
```

### GitHub

GitHub is an online platform where I can store and share Git repositories.

**Git** is the tool that tracks my code changes.

**GitHub** is where I store and share the repository online.

### VS Code

VS Code is the code editor I use to write and manage my JavaScript files.

Check the VS Code version:

```bash
code --version
```

---

# 2. Git Identity

Git needs my name and email for commits.

I can check my Git configuration with:

```bash
git config --global --list
```

The important settings are:

```text
user.name
user.email
```

My Git email should match the email connected to my GitHub account.

---

# 3. VS Code Extensions

The extensions I use are:

* Prettier
* ESLint
* Live Server
* Error Lens
* GitLens
* Path Intellisense

### Prettier

Prettier automatically formats my code.

### ESLint

ESLint helps me find problems and errors in JavaScript code.

### Live Server

Live Server runs my HTML page through a local development server.

### Error Lens

Error Lens shows errors and warnings directly in my code.

### GitLens

GitLens helps me understand Git history and changes inside VS Code.

### Path Intellisense

Path Intellisense helps me write file paths more easily.

### Format On Save

I enabled:

```text
Editor: Format On Save = ON
```

and set:

```text
Default Formatter = Prettier
```

This means Prettier automatically formats my code when I save the file.

---

# 4. JavaScript Environments

JavaScript can run in different environments.

The two environments I practiced are:

* Node.js
* Browser

The language is JavaScript, but each environment provides different tools and APIs.

### Node.js

Node.js provides things like:

```javascript
process
```

For example:

```javascript
console.log(process.version);
```

This prints the Node.js version.

### Browser

The browser provides things like:

```javascript
document
```

For example:

```javascript
document.getElementById("name");
```

This allows me to access an HTML element.

### Node.js vs Browser

* `profile.js` runs in Node.js → it has `process` but not `document`.
* `app.js` runs in the browser → it has `document` but not `process`.

Each environment has its own APIs.

---

# 5. Variables

JavaScript has two important ways to declare variables:

```javascript
const
let
```

## const

I use `const` when the variable should not be reassigned.

Example:

```javascript
const name = "Mohammed";
```

I cannot do:

```javascript
name = "Ahmed";
```

This gives:

```text
TypeError: Assignment to constant variable.
```

## let

I use `let` when the value needs to change.

Example:

```javascript
let age = 25;

age = 26;
```

### Simple rule

If the value will not change:

```javascript
const
```

If the value will change:

```javascript
let
```

---

# 6. Data Types

JavaScript has different data types.

Examples:

```javascript
const name = "Mohammed"; // String
const age = 25; // Number
const isStudent = true; // Boolean
```

## Objects

An object stores related information together.

Example:

```javascript
const student = {
  name: "Mohammed",
  age: 25,
  isStudent: true,
  favoriteLanguage: "JavaScript"
};
```

I can access a property using:

```javascript
student.name
```

or:

```javascript
student.favoriteLanguage
```

---

# 7. Arrays

An Array stores multiple values.

Example:

```javascript
const tracks = [
  "JavaScript",
  "Node.js",
  "React",
  "Git"
];
```

I can use loops to go through the items in an Array.

### typeof []

When I write:

```javascript
typeof []
```

the result is:

```text
object
```

This is surprising because `[]` is an Array.

In JavaScript, an Array is a type of Object.

---

# 8. Conditionals

I use conditionals to make decisions in my program.

Example:

```javascript
const score = 95;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Needs work");
}
```

The logic is:

* 90 or more → Excellent
* 70–89 → Good
* Below 70 → Needs work

---

# 9. Loops

Loops allow me to repeat code.

## for...of

I can use `for...of` to loop through the items of an Array.

Example:

```javascript
for (const student of students) {
  console.log(student);
}
```

This means:

For each student in `students`, run the code.

---

# 10. while

I use `while` when the loop depends on a condition.

Example:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

The loop continues while:

```javascript
count < 5
```

is true.

### for vs while

I use `for` when the loop is based on a collection or when the number of iterations is clearer.

I use `while` when I want to continue while a condition is true and I may not know the number of repetitions beforehand.

---

# 11. Functions

A function is a reusable block of code.

Example:

```javascript
function createProfile(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined to ${reason}.`;
}
```

Here:

```text
name
city
reason
```

are parameters.

The function returns a value using:

```javascript
return
```

I can call the function like this:

```javascript
console.log(
  createProfile(
    "Mohammed",
    "Qena",
    "become a better JavaScript developer"
  )
);
```

---

# 12. Template Literals

Template literals use backticks:

```javascript
`
```

They allow me to put variables inside a string using:

```javascript
${}
```

Example:

```javascript
const name = "Mohammed";
const score = 95;

console.log(`${name}: ${score}`);
```

Output:

```text
Mohammed: 95
```

---

# 13. Comparison Operators

There are two comparison operators I learned:

```javascript
===
==
```

## ===

`===` compares both the value and the type.

Example:

```javascript
5 === 5
```

Result:

```text
true
```

But:

```javascript
5 === "5"
```

Result:

```text
false
```

because one is a Number and the other is a String.

## ==

`==` can convert the type before comparing.

Example:

```javascript
5 == "5"
```

This can return:

```text
true
```

### Why I use ===

I use `===` because it is clearer and avoids automatic type conversion.

For my code:

```text
Use ===
Do not use ==
```

---

# 14. Browser JavaScript

HTML:

```html
<h1 id="name">Mohammed</h1>
```

JavaScript:

```javascript
const name = document.getElementById("name");
```

This gets the HTML element.

## addEventListener

I use `addEventListener` to make an element respond to an event.

Example:

```javascript
button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

This means that when the button is clicked, the function runs.

## textContent

I can change the text of an HTML element using:

```javascript
name.textContent = "Welcome!";
```

## console.log

I use `console.log()` to print information to the console.

```javascript
console.log("Hello");
```

I can open browser DevTools using:

```text
F12
```

or:

```text
Ctrl + Shift + I
```

---

# 15. Important Error I Learned

If I try to reassign a `const`:

```javascript
const name = "Mohammed";

name = "Ahmed";
```

I get:

```text
TypeError: Assignment to constant variable.
```

Another possible error happens when `getElementById()` cannot find the element.

For example:

```javascript
const button = document.getElementById("wrong-id");

button.addEventListener("click", function () {
  console.log("Clicked");
});
```

If the element does not exist, `getElementById()` returns:

```text
null
```

Then calling `addEventListener` causes an error.

I should make sure the HTML `id` matches the JavaScript code.

---

# 16. Git Commands I Learned

## Check Git status

```bash
git status
```

Shows the current state of my files and changes.

## Initialize a repository

```bash
git init
```

Creates a Git repository in the current folder.

## Add files

```bash
git add .
```

Adds my changes to the staging area.

## Create a commit

```bash
git commit -m "message"
```

Saves the staged changes as a commit.

## Rename the branch

```bash
git branch -M main
```

Changes the current branch name to `main`.

## Connect to GitHub

```bash
git remote add origin URL
```

Connects my local repository to a remote GitHub repository.

## Push

```bash
git push
```

Uploads my commits to GitHub.

## View commits

```bash
git log --oneline
```

Shows my commit history in a short format.

---

# 17. Basic Git Workflow

The basic workflow I learned is:

```bash
git status
git add .
git commit -m "message"
git push
```

The idea is:

1. Check my changes.
2. Add the changes.
3. Save them in a commit.
4. Push them to GitHub.

I should use clear commit messages instead of messages like:

```text
update
changes
stuff
```

---

# 18. Project Structure

My Day 01 project structure is:

```text
javascript-everywhere/
├── README.md
└── day-01/
    ├── NOTES.md
    ├── profile.js
    ├── preview.js
    ├── grades.js
    ├── index.html
    └── app.js
```

---

# 19. What I Practiced in Day 01

I practiced:

* Variables
* `const`
* `let`
* Data Types
* Objects
* Arrays
* Conditionals
* Loops
* `for...of`
* `while`
* Functions
* Template Literals
* `typeof`
* `===`
* Node.js
* Browser JavaScript
* `document`
* `process`
* `console.log()`
* `addEventListener`
* Git
* GitHub
* VS Code
* npm
* Live Server
* Prettier

---

# 20. Task 3.4 Answers

### When do you use let instead of const?

I use `let` when I need to change the value of a variable. If the value will not change, I use `const`.

### What does typeof [] return, and why is that surprising?

It returns `object`. This is surprising because `[]` is an Array, but Arrays are objects in JavaScript.

### What is the difference between === and ==, and why do we only use ===?

`===` compares the value and type without converting the type. `==` can convert the type before comparing, so I use `===` because it is clearer and safer.

### When would you use while instead of for?

I use `while` when the loop depends on a condition and I do not necessarily know the number of repetitions beforehand.

---

# 21. Main Things to Remember

* Use `const` by default.
* Use `let` only when the value needs to change.
* Use `===` instead of `==`.
* Node.js and the Browser are different environments.
* Node.js provides `process`.
* The Browser provides `document`.
* Use `console.log()` to check values and output.
* Run Node files with `node filename.js`.
* Run HTML files through Live Server.
* Keep Git commits small and clear.
* Write useful commit messages.
* Practice by typing code instead of only copying it.
