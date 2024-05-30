// type assertion

let someValue: any = 'this string';
let strLength: number = (someValue as string).length;

//type unknown

let unknownValue: unknown;

unknownValue = [1, 2, 3];
unknownValue = 12;
unknownValue = 'Hello World';

if (typeof unknownValue == 'string') {
  console.log(unknownValue.toUpperCase());
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error(`there was an error...`);
  } else {
    throw 'string error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// type never

type Theme2 = 'light' | 'dark';

function checkTheme(theme: Theme2): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  //type never
  theme;
}

enum Color {
  red,
  blue,
  green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.red:
      return 'red';
    case Color.blue:
      return 'blue';
    default:
      //run time
      throw new Error(`error color: ${color}`);
  }
}

console.log(getColorName(Color.red));
console.log(getColorName(Color.blue));
console.log(getColorName(Color.green));
