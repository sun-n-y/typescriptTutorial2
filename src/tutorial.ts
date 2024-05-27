//interface

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(p1: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: 'book name',
  author: 'book author',
  genre: 'self help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(p1) {
    return `${p1} ${this.title}`;
  },
  printSomething: (p1) => {
    return p1;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle('hello'));
console.log(deepWork.printSomething(10));

//challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(number: number): number;
}

const product7: Computer = {
  id: 7,
  brand: 'apple',
  ram: 16,
  storage: 100,
  upgradeRam(p1) {
    return (this.ram *= p1);
  },
};

console.log(product7);
product7.upgradeRam(2);
console.log(product7);

//merging

interface Person {
  name: string;
  getDetail(): string;
}

interface DogOwner {
  dogName: string;
  getDog(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: 'tim',
  age: 30,
  getDetail() {
    return `Name:${this.name}, Age: ${this.age}`;
  },
};

interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: 'kim',
  employeeId: 123,
  age: 100,
  getDetail() {
    return 'sdf';
  },
};

interface Manager1 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager1 = {
  name: 'jim',
  age: 35,
  dogName: 'rex',
  getDetail() {
    return 'defe';
  },
  managePeople: function (): void {
    throw new Error('Function not implemented.');
  },
  getDog: function (): string {
    throw new Error('Function not implemented.');
  },
};

//challenge

interface Person1 {
  name: string;
}

interface DogOwner1 extends Person1 {
  dogName: string;
}

interface Manager3 extends Person1 {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person1 | DogOwner1 | Manager3 {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return { name: 'him' };
  } else if (randomNumber < 0.66) {
    return { name: 'her', dogName: 'rex' };
  } else {
    return { name: 'boss' };
  }
}

const employee11: Person1 | DogOwner1 | Manager3 = getEmployee();

console.log(employee11);
