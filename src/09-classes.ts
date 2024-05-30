//classes

class Book {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  //getter
  get info() {
    return `${this.title} by ${this.author}`;
  }
  get checkOut() {
    return this.checkedOut;
  }
  get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
  //setter
  private set checkOut(checkOut: boolean) {
    this.checkedOut = checkOut;
  }
}

const cookingBook = new Book('cooking', 'me');
console.log(cookingBook.info);
// cookingBook.checkOut = true;
console.log(cookingBook);
console.log(cookingBook.someInfo);
console.log(cookingBook.checkOut);

//implement interface by class

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  }
}

const dude = new Person('polo', 100);
console.log(dude);
dude.greet();
