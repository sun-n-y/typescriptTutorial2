//type alias

type StringOrNumber = string | number;
type Theme = 'light' | 'dark';

//challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const employee1: Employee = { id: 1, name: 'polo', department: 'shoes' };
const employee2: Employee = { id: 2, name: 'kim', department: 'garden' };
const boss: Manager = {
  id: 1,
  name: 'boss',
  employees: [employee1, employee2],
};

function printStaffDetails(p1: Staff) {
  if ('employees' in p1) {
    console.log(`Manager has ${p1.employees.length} employees to mange`);
  } else {
    console.log(`Employee ${p1.name} is in the ${p1.department} department`);
  }
}

printStaffDetails(employee1);
printStaffDetails(employee2);
printStaffDetails(boss);

//intersection type

type Book = { id: number; name: string; price: number };

const book1: Book = { id: 1, name: 'cooking', price: 50 };

const discountedBook2: Book & { discount: number } = {
  id: 1,
  name: 'cooking',
  price: 50,
  discount: 25,
};

//computed

const propName = 'ageOfTiger';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 10 };

console.log(tiger);
