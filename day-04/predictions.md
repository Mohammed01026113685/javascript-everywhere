# Day 03 — Task 1: Predict, then run

## Part 1 — Unpacking

### 1

**Prediction:** `1 undefined`
**Reason:** `b` is not declared, so `typeof b` returns `"undefined"`.

### 2

**Prediction:** `ReferenceError`
**Reason:** `x` is renamed to `y` during destructuring, so `x` does not exist.

### 3

**Prediction:** `5`
**Reason:** The default value is used when the property value is `undefined`.

### 4

**Prediction:** `null`
**Reason:** Default values only apply to `undefined`, not `null`.

### 5

**Prediction:** `c`
**Reason:** The first two array elements are skipped and the third element is assigned to `third`.

### 6

**Prediction:** `3`
**Reason:** `copy` and `arr` reference the same array.

### 7

**Prediction:** `99`
**Reason:** The spread creates a shallow copy, so the nested object is still shared.

### 8

**Prediction:** `{ b: 2, a: 1 }`
**Reason:** Later properties overwrite earlier properties with the same key. This is **property overwrite**.

### 9

**Prediction:** `undefined 7`
**Reason:** The default `{}` prevents an error when no argument is passed.

### 10

**Prediction:** `TypeError`
**Reason:** The function tries to destructure `undefined`. This is **destructuring failure**.

### 11

**Prediction:** `TypeError`
**Reason:** `s.address` is `undefined`, so JavaScript cannot read `.city` from it.

### 12

**Prediction:** `fallback fallback`
**Reason:** `0` is falsy for `||`, while `??` also uses the fallback because `0` is not nullish.

---

## Part 2 — Order

### 13

**Prediction:** `a`, `c`, `b`
**Reason:** Synchronous code runs before the timer callback.

### 14

**Prediction:** `sync`, `micro`, `timeout`
**Reason:** Synchronous code runs first, then microtasks, then timers.

### 15

**Prediction:** `3`, `3`, `3`
**Reason:** `var` is function-scoped, so all callbacks share the same `i`.

### 16

**Prediction:** `undefined`
**Reason:** `later()` does not return the value from `setTimeout`; the callback runs later.

### 17

**Prediction:** `loop finished`, then `timer`
**Reason:** The synchronous loop blocks the event loop, so the timer cannot run until the loop finishes.

### 18

**Prediction:** `outer`, `first`, `second`, `nested`
**Reason:** The first three timers were queued first. The nested timer is added only after `first` runs.

### 19

**Prediction:** `timer`, `micro inside timer`, `timer 2`
**Reason:** After a timer callback finishes its synchronous code, the microtask queue is processed before the next timer.

### 20

**Prediction:** `after try`, then an uncaught `Error: late`
**Reason:** `try/catch` cannot catch an error thrown later inside a timer callback.

### 21

**Prediction:** `sync call`, `after load`, `async call`
**Reason:** The callback is called synchronously first, then the timer runs later.

### 22

**Prediction:** `D`, `C`, `B`, `A`
**Reason:** Synchronous code runs first, then the microtask, then timers according to their delays.
