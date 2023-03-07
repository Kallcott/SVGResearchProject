import Color from "color";

// function* myGenerator() {
//   yield "First .next()";
//   yield "Second .next()";
//   return "Third .next(), and reset to top";
//   yield "I will never be reached";
// }

function* generateLoop(max) {
  for (let i = 0; i < max; i++) {
    yield console.log(i);
  }
}
const genLoop5 = generateLoop(5);
genLoop5.next(); // 1
genLoop5.next(); // 2

function* generatorYield() {
  yield "First Call";
  yield "Second Call";
  return "Third Call, and reset";
  yield "I will never be reached";
}

const savedGenState = generatorYield();

console.log(savedGenState.next());
// returns {value "First call", done = false}
console.log(savedGenState.next().value);
// returns "Second Call"
console.log(savedGenState.next().done);
// returns true
console.log(savedGenState.next());
// returns {value: undefined, "true"}

function* randomIn(...arr) {
  while (true) yield arr[Math.floor(Math.random() * arr.length)];
}

const randomColor = randomIn(Color("#604439"), Color("#9e9a75"), Color("#1c222e"), Color("#41533b"), Color("#554840"));

console.log(randomColor.next().value); // gets random color
