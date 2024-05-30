//functions

function sayHi(name: string) {
  console.log(`${name.toUpperCase()}`);
}

sayHi('polo');

//returns

function calculate(price: number): number {
  return price * 0.9;
}

console.log(calculate(123));

//challenge

const names: string[] = ['hi', 'bye', 'guy'];

function checkName(name: string): boolean {
  return names.includes(name);
}

console.log(checkName('hi'));

//parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

// default param

function calcScore(initialScore: number, penalty?: number): number {
  return initialScore - (penalty || 0);
}
console.log(calcScore(10, 5));
console.log(calcScore(10));

//rest parameter

function sum(msg: string, ...numbers: number[]) {
  console.log(`${msg} ${numbers.reduce((prev, curr) => (curr += prev), 0)}`);
}

let result = sum('Total is: ', 1, 2, 3, 4, 5);

//void
// function logMsg(msg: string):void {
//   console.log(msg);
// }
// logMsg('void');

//challenge

function processInput(p1: string | number) {
  if (typeof p1 == 'string') {
    console.log(p1.toUpperCase());
  }
  if (typeof p1 == 'number') {
    console.log(p1 * 2);
  }
}

processInput(4);
processInput('polo');

//objet as parameters
//destructing object
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

console.log(createEmployee({ id: 1 }));

//challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('polo', { reverse: true }));
