// tuple & enum

//fixed arrays
let person10: readonly [string, number] = ['john', 25];
let person13: [string, number?] = ['john'];
let date: [number, number, number] = [12, 17, 2024];

function getPerson(): [string, number] {
  return ['john', 25];
}

//enums

enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['a', 'b', 'c'],
  };
}

console.log(getServerResponse());

// challenge

enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Employee = 'Employee',
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(obj: User): User {
  return obj;
}

const user123: User = createUser({
  id: 1234,
  name: 'him',
  role: UserRole.Admin,
  contact: ['@', '706'],
});

console.log(user123);
