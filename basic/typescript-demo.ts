// Types: boolean, string, number
const studentName: string = 'John';

// Types for objects
interface Student {
  name: string;
  address: string;
}

const student: Student = {
  name: 'John',
  address: 'KTM'
};
const student2: Student = {
  name: 'Joe',
  address: 'Lalitpur'
  // phone: '123' // not allowed
};

// To create custom type use: type keyword
// | -> Union
type University = 'tu' | 'pokhara' | true;
const myUniversity: University = 'pokhara';

// Type for function parameters and return types
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(1, 2));

// Allows OOP
// Generics
