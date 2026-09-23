# Day 03 Notes

## Functions

### Parameter vs Argument
A parameter is the variable written in the function definition.
An argument is the actual value passed when calling the function.

### Declaration vs Expression vs Arrow
Function declaration: a named function declared with the `function` keyword; I use it for reusable named functions.

Function expression: a function stored in a variable; I use it when the function is treated like a value.

Arrow function: a shorter function syntax; I use it for short functions and callbacks.

### return vs console.log
`return` sends a value back from a function, while `console.log` only displays a value.

### Guard Clause
A guard clause checks an invalid case early and returns immediately, which avoids deeply nested if/else code.

## Scope

### Global Scope
Global scope means a variable can be accessed from many places in the program.

### Function Scope
Function scope means a variable declared inside a function can only be accessed inside that function.

### Block Scope
Block scope means a variable declared with `let` or `const` inside `{}` is only available inside that block.

### Scope Chain
The scope chain searches from the current scope outward toward its parent scopes until it finds the variable.

## Hoisting

Function declarations are hoisted with their function definition.

`var` declarations are hoisted and initialized with `undefined`.

`let` and `const` declarations are hoisted but cannot be accessed before their declaration.

### Temporal Dead Zone
The TDZ is the time between entering a scope and reaching the `let` or `const` declaration, where accessing the variable causes an error instead of returning `undefined`.

## Closures

A function can remember and access variables from the scope where it was created, even after that outer function has finished.

### fn vs fn()
`fn` passes the function itself, while `fn()` calls the function immediately and passes its returned value.

## Task 5.3

Day 02 report-card.js line count: 68

Day 03 report.js line count: [ADD FINAL LINE COUNT]

One-place change:
I can now change the grading rules in one place inside `letterGrade()`.

## Bug I Hit Today

Bug:
I initially used `score > 90` for grade A, which made a score of exactly 90 receive grade B.

Fix:
I changed the condition to `score >= 90` because the required A range is 90–100.