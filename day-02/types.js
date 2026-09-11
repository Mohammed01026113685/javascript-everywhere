const name = "Mohammed";
const age = 25;
const isStudent = true;
const emptyValue = null;
let notAssigned;
const person = { name: "Mohammed", age: 25 };
const tracks = ["JavaScript", "Node.js", "React"];

console.log(`name → ${name} → ${typeof name}`);
console.log(`age → ${age} → ${typeof age}`);
console.log(`isStudent → ${isStudent} → ${typeof isStudent}`);
console.log(`emptyValue → ${emptyValue} → ${typeof emptyValue}`);
console.log(`notAssigned → ${notAssigned} → ${typeof notAssigned}`);
console.log(`person → ${JSON.stringify(person)} → ${typeof person}`);
console.log(`tracks → ${JSON.stringify(tracks)} → ${typeof tracks}`);
console.log(`typeof null → ${typeof null}`);
console.log(`typeof [] → ${typeof []}`);
console.log(`Array.isArray([]) → ${Array.isArray([])}`);
const stringNumber = "42";
const convertedNumber = Number(stringNumber);
console.log(`"42" → ${convertedNumber} → ${typeof convertedNumber}`);
const numberValue = 42;
const convertedString = String(numberValue);
console.log(`42 → ${convertedString} → ${typeof convertedString}`);
const invalidNumber = Number("hello");
console.log(`Number("hello") → ${invalidNumber} → ${typeof invalidNumber}`);
console.log(`parseInt("42px") → ${parseInt("42px")}`);
console.log(`Number("42px") → ${Number("42px")}`);
const falsyValues = [
  false,
  0,
  -0,
  0n,
  "",
  null,
  undefined,
  NaN,
  [],
  {},
  "0",
  "hello"
];

for (const value of falsyValues) {
  console.log(`${String(value)} → ${Boolean(value) ? "truthy" : "falsy"}`);
}

const value = 0;
console.log(`0 || "fallback" → ${value || "fallback"}`);
console.log(`0 ?? "fallback" → ${value ?? "fallback"}`);

