//generics

function genericFunction<T>(p1: T): T {
  return p1;
}

console.log(genericFunction<number>(1));
console.log(genericFunction<string>('p'));
console.log(genericFunction<boolean>(true));

interface GenericInterface<T> {
  value: T;
  getValue(): T;
}

const genericString: GenericInterface<string> = {
  value: 'ds',
  getValue() {
    return this.value;
  },
};

console.log(genericString);

//async returns a promise
// async function someFunc(): Promise<string> {
//   return 'hello';
// }

//challenge

function createArray<T>(p1: number, p2: T): T[] {
  return Array(p1).fill(p2);
}

console.log(createArray(10, true));
console.log(createArray(10, 's'));

// multiple variable types

function pair<T, U>(p1: T, p2: U): [T, U] {
  return [p1, p2];
}
