// 5.1
console.log("Start");

setTimeout(() => {
  console.log("300ms");
}, 300);

setTimeout(() => {
  console.log("100ms");
}, 100);

setTimeout(() => {
  console.log("200ms");
}, 200);




function showMessage(first, second) {
  console.log(first, second);
}

setTimeout(showMessage, 100, "Hello", "World");


const timeoutId = setTimeout(() => {
  console.log("You should NOT see this");
}, 500);

clearTimeout(timeoutId);



let count = 5;

const intervalId = setInterval(() => {
  console.log(count);

  count--;

  if (count === 0) {
    console.log("Lift off 🚀");
    clearInterval(intervalId);
  }
}, 1000);


// 5.3 — The delay is a minimum

// function blockFor(ms) {
//   const start = Date.now();

//   while (Date.now() - start < ms) {
//     // busy wait
//   }
// }

// const start = Date.now();

// setTimeout(() => {
//   console.log("Timer actually took:", Date.now() - start, "ms");
// }, 100);

// blockFor(1000);