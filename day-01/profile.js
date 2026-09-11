const name = "Mohammed";
const city = "Qena";
const reason = "I joined to become a better JavaScript developer";

function createProfile(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined to ${reason}.`;
}

console.log(createProfile(name, city, reason));

console.log(`Node version: ${process.version}`);