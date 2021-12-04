// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

//creating objects
//2 ways : obj cnstructor or obj literal syntax

////////////////obj literal////////////////
let a = {
  field1: 'stringOne',
  field12: 15,
};

// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple); // 5 if fruit="apple"
// console.log(a);

//////////////obj constructor///////////////////

function Task(taskHeader, deadLine) {
  return {
    taskHeader,
    deadLine,
  };
}

let task = new Task('task1', new Date().toLocaleTimeString());

console.log(task);
