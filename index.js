// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');

// //creating objects
// //2 ways : obj cnstructor or obj literal syntax

// ////////////////obj literal////////////////
// let a = {
//   field1: 'stringOne',
//   field12: 15,
// };

// // let fruit = prompt('Which fruit to buy?', 'apple');

// // let bag = {
// //   [fruit]: 5, // the name of the property is taken from the variable fruit
// // };

// // alert(bag.apple); // 5 if fruit="apple"
// // console.log(a);

// //////////////obj constructor///////////////////

// // function Task(taskHeader, deadLine) {
// //   let date = ('0' + deadLine.getDate()).slice(-2);

// //   let month = ('0' + (deadLine.getMonth() + 1)).slice(-2);

// //   let year = deadLine.getFullYear();

// //   let x = year + '-' + month + '-' + date;

// //   return (
// //    obj =  {
// //     taskHeader,
// //     `${year + month + date}`,
// //   }
// //     )
// // }

// function MakeUser(Name, dateOfBirth) {
//   let year = new Date().getFullYear();

//   let age = year - dateOfBirth.getFullYear() - 1;

//   return Name + age;
// }

// // function Fruit(color, taste, seeds) {
// //   this.color = color;
// //   this.taste = taste;
// //   this.seeds = seeds;
// // }

// function Fruit(color, taste, seeds) {
//   let obj = {
//     color,
//     taste,
//     seeds,
//   };
//   return obj;
// }

// // let user = MakeUser('Fərid', new Date(2000, 11, 23));

// // let fruit = new Fruit('red', 'salty', 17);

// // console.log(fruit.color);

// // function Car() {}
// // let car1 = Car();
// // let car2 = Car();

// // //  console.log(car1.color);    // undefined

// // Car.prototype.color = 'original color';
// // console.log(car1.color);    // 'original color'

// // car1.color = 'black';
// // console.log(car1.color);    // 'black'

// // console.log(Object.getPrototypeOf(car1).color); // 'original color'
// // console.log(Object.getPrototypeOf(car2).color); // 'original color'
// // console.log(car1.color);   // 'black'
// // console.log(car2.color);   // 'original color'

// function Car1(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// function Car2(make, model, year) {
//   let make1 = make;
//   let model1 = model;
//   let year1 = year;

//   return {
//     make,
//     model,
//     year,
//   };
// }

// var myCar = new Car1('Eagle', 'Talon TSi', 1993);

// var myCar2 = new Car2('Eagle', 'Talon TSi', 1993);

// var myCar2_1 = Car2('Eagle', 'Talon TSi', 1993);

// Car2.prototype.modelOther = 'fsdsfs';

// console.log(myCar2.modelOther);

// let firstObj =(prop1,prop2,prop3) => {
//   prop1,
//   prop2,
//   prop3

// };

// let firstObj =(prop1 = 15,prop2,prop3) => {
//   prop1,
//   prop2,
//   prop3

// };

// let obj = {
//   test : null
// };

// if(obj.test === undefined)
// {

// }

// console.log(firstObj.prop1);

// function Book(type, author) {
//   this.type = type;
//   this.author = author;
//   this.getDetails = function () {
//       return this.type + " written by " + this.author;
//   }
// }

// function Book(type, author) {
//  this.type = type;
//   this.getDetails = function () {
//       return type + " written by " + author;
//   }
// }

// var book = new Book("Fiction", "Peter King");

// var divisor = parseInt(50 / 2, 10);

// console.log(divisor);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

function UserFunc(name) {
  this.name = name;
}

console.log(User.prototype.sayHi);
console.log(User.prototype.constructor);
console.log(UserFunc.prototype.constructor);

