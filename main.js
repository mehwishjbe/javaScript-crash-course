/* console.log('Hello hello world');
console.error('this is error message');
console.warn('this is warning message'); */


// var, let, const
/* let age = 90;
age =  100;
console.log(age);

const pi = 3.14;
console.log(pi); */

/* const name ='Meh';
const age = 25;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z); */


/* //CONCATENATION
let name = "Meh";
let age = 25
console.log('My name is '+ name + " and my age is " + age);
//TEMPLATE STRING
console.log(`My name is ${name} and my age is ${age}`);
//OR
const intro = `My name is ${name} and my age is ${age}`;
console.log(intro); */


/* //STRINGS_LENGTH
const greeting = 'hello world!';
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.substring(0,5));
console.log(greeting.substring(6,11));
console.log(greeting.substring(0,5).toUpperCase); */


/* const greeting = 'hello world!';
console.log(greeting.split('')); // shows array index of each letter

const words = 'technology, world!, computers, it, code, javascript, css, html';
console.log(words.split(',')); // shows array index of each word */


/* //ARRAY - VARIABLE THAT HOLDS MULTIPLE VALUES
const number = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['apples', 'oranges', 'mangos', 'pears'];
console.log(fruits);

const mix_fruits = ['apples', 'oranges', 'mangos', 'pears', 10, true];
console.log(mix_fruits);
console.log(mix_fruits[3]);

mix_fruits[6] = 'grapes';
console.log(mix_fruits);

mix_fruits.push('eisbergsalat')     // add array item to last index
console.log(mix_fruits);

mix_fruits.unshift('strawberries') // add array item to first index
console.log(mix_fruits);

mix_fruits.pop() // to delete array item from last index
console.log(mix_fruits);

console.log(Array.isArray('apples')); // to check if item is in array
console.log(fruits);

console.log(mix_fruits.indexOf('mangos')); // to check array index of item
console.log(fruits); */


/* //OBJECTS
const person = {
    firstName: 'Meh',
    lastName: 'Doe',
    age:25,
    hobbies: ['music', 'books', 'sports', 'movies'],
    address:{
        street: 'Route 9',
        city: 'Philadelphia',
        state: 'Pennsylvania'
    }
}

person.email = 'meh@gmail.com'
console.log(person);

/* console.log(person);
console.log(person.lastName);
console.log(person.address.state);
console.log(person.hobbies[2]);
console.log(person.hobbies.indexOf('movies')); */

/* const {firstName, lastName, address:{city}} = person;
console.log(firstName);
console.log(city);  */


/* const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];
 */
/* console.log(todos);
console.log(todos[1].text); */

/* //TO CONVERT INTO JSON FORM
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */


/* //FOR LOOP
for(i=0; i<=15; i++){
    console.log(i);
}*/


/* //WHILE LOOP
let i = 0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
} */

/* const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

//forEach, map, filter

//forEach
todos.forEach(function(todo){
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo)
{
    return todo.text;
});

//filters
const todoCompleted = todos.map(function(todo)
{
    return todo.isCompleted === true;
});
console.log(todoText); */


/* //OBJECT PRACTICE
let person = {
    firstName:'John',
    lastName: 'Doe',
    tech: 'JavaScript',
    address: 'Boston',
    laptop:{
        cpu: 'i7',
        ram: '4gb',
        color: 'silver',
        brand: 'hp'
    }
}
delete person.address
console.log(person); */



//FUNCTIONS ONE
function sum(num1, num2) {
   return num1 * num2
 }
 let result = sum(4, 4);
 console.log(result);

