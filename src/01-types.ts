//type annotations

let awesomeName: string = 'shakeAndBake';
console.log(awesomeName.toLowerCase());

let firstName: string = 'polo';
console.log(firstName.toUpperCase());

let cost: number = 2;
cost++;
console.log(cost);

let isDone: boolean = true;
isDone = false;
isDone ? console.log('done') : console.log('not done');

//union type

let tax: number | string = 10;
tax = 10;
tax = '10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

//any type

let notSure: any = 4;
notSure = 'fsd';
notSure = true;
notSure = () => {};

//example

const books = ['one', 'two', 'three'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === 'one') {
    foundBook = book;
    break;
  }
}
foundBook = foundBook?.toUpperCase();
console.log(foundBook);

//challenge

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;
discount = '20%';

//arrays
let prices: number[] = [1, 2, 3, 4, 5];
prices.push(6);
console.log(prices);

let emptyArray: [] = [];

let comboArray: (string | number)[] = [1, 's'];

//object type

let car: { brand: string; year: number } = { brand: 'tacoma', year: 2006 };

let book = { title: 'book', cost: 20 };
let paper = { title: 'paper', cost: 20 };
let pen = { title: 'pen' };

let items: { readonly title: string; cost?: number }[] = [book, paper, pen];

//challenge

let bike: { brand: string; year: number } = { brand: 'trek', year: 2018 };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };

let productsArray: { title: string; price?: number }[] = [product1, product2];
