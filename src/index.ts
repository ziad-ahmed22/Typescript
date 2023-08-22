// ===================================================
// ===================================================
// ===================================================

// INFORMATIONS

//    => Dynamically Typed Language => javascript, python, php
//    => Statically Typed Language => java, C, C++
//    => extensions => .ts or .tsx
//    => TSC => TypeScript Compiler => compile .ts to .js

// ===================================================
// ===================================================
// ===================================================

// [1] Download node js (software => from internet)
//    => node -v
//    => npm -v

// [2] Download TypeScript
//    => npm install -g typescript
//    => tsc -v

// [3] Compile .ts to .js
//    => tsc fileName => tsc index => compile .ts to .js
//    => tsc
//    => tsc --watch fileName => tsc --watch index
//    => tsc --watch

// to run file
//    => node fileName.js => node index.js

// ===================================================
// ===================================================
// ===================================================

// // in .ts
// export {};
// let num: number = 5;
// console.log(num);

// // in .js
// var num = 5; // => default typescript use ES2016

// ===================================================
// ===================================================
// ===================================================

// Edit Configration File
//    => tsc --init => download tsconfig.json

// in tsconfig.json
//    => "target": "es2016" => "target": "es2017" or "es6"

// // in .ts
// export {};
// let num: number = 5;
// console.log(num);

// // in .js
// let num = 5; // => es6

// ===================================================
// ===================================================
// ===================================================

// Edit Configration File
//    => "target": "es2016" => "target": "es2017" or "es6"
//    => "rootDir": "./" => "rootDir": "./src"
//    => "outDir": "./" => "outDir": "./dist"

// // in .ts
// export {};
// let num: number = 10;
// console.log(num);

// // in .js
// let num = 5; // => es6

// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================

// TYPES
export {};

// ===================================================
// ===================================================
// string
// ===================================================
// ===================================================

// let channel: string = "Simple Cose Arab";
// channel = "Ziad World";
// channel = 5; // error
// console.log(channel);

// ===================================================
// ===================================================
// boolean
// ===================================================
// ===================================================

// let isSuccess: boolean = true;
// isSuccess = false;
// isSuccess = "ali"; // error
// console.log(isSuccess);

// ===================================================
// ===================================================
// number
// ===================================================
// ===================================================

// let id: number = 5;
// id = 20;
// id = true // error
// console.log(id);

// ===================================================
// ===================================================
// any
// ===================================================
// ===================================================

// let x: any = 5;
// x = "ali";
// x = 12;
// x = true;
// console.log(x);

// ===================================================
// ===================================================
// union
// ===================================================
// ===================================================

// let active: number | boolean = 1;
// active = true;
// active = 0;
// active = "ali" // error
// console.log(active);

// ===================================================
// ===================================================
// ===================================================
// ===================================================

// let xany; // any
// xany = "str";
// xany = true;
// xany = 3;
// console.log(xany);

// ========

// let xnum: number; // number
// xnum = 5;
// console.log(xnum);

// ========

// let xstr = "str";
// xstr = "ali";
// xstr = 4; // error
// console.log(xstr);

// ========

// let all: boolean | number | string = "ziad";
// let alll: boolean | number | string = 50;
// console.log(all);
// console.log(alll);

// ===================================================
// ===================================================
// array
// ===================================================
// ===================================================

// let numArr: number[] = [1, 2, 3];
// console.log(numArr);

// ============

// let strArr: string[] = ["ziad", "ahmed", "mahmoud"];
// console.log(strArr);

// ============

// let orArr: (number | string | boolean)[] = [1, "ali", true];
// let orArrr: (number | string | boolean)[] = [true, "ali", 1];
// console.log(orArr);
// console.log(orArrr);

// ============

// let arrr: (number | string | boolean[])[] = [1, "ali", [true, false]];
// console.log(arrr);

// ============

// let arrr: (number | string | (boolean | number)[])[] = [1, "ali", [1, false]];
// console.log(arrr);

// ============

// let arr: any[] = [1, "ali", true];
// console.log(arr);

// ============

// let employee: [number, string][] = [
//   [1, "ziad"],
//   [2, "ali"],
//   [3, "medo"],
// ];
// console.log(employee);

// ===================================================
// ===================================================
// function
// ===================================================
// ===================================================

// function sum(x: number, y: number): number {
//   return x + y;
// }
// console.log(sum(10, 5));

// =================

// function isactive(x: number | boolean): number | boolean {
//   return x;
// }
// console.log(isactive(1));
// console.log(isactive(true));

// =================

// function hi(fname: string): void {
//   console.log("Hi" + " " + fname);
// }
// hi("ali");

// =================

// function greet(greeting: string = "Hello", name?: string): void {
//   console.log(`${greeting}, ${name ?? "world"}!`);
// }
// greet(); // "Hello, world!"
// greet("Hi", undefined); // "Hi, world!"
// greet(undefined, "Bob"); // "Hello, Bob!"

// =================

// function addAll(...nums: number[]): number {
//   console.log("nums", nums); // [10, 20, 30, 100, 1]

//   let res = 0;
//   nums.forEach((num) => (res += num));
//   return res;
// }
// console.log(addAll(10, 20, 30, 100, +true)); // 161

// =================

// // anonymous function
// const anonymousAdd = function (x: number, y: number): number {
//   return x + y;
// };
// console.log(anonymousAdd(2, 3));

// =================

// // arrow function
// const arrowAdd = (x: number, y: number): number => x + y;
// console.log(arrowAdd(2, 3));

// ===================================================
// ===================================================
// type alias
// ===================================================
// ===================================================

// type st = string;
// let name: st = "ziad";
// name = "ali";
// name = 1; // error
// console.log(name);

// =============

// type boolAndNum = boolean | number;
// let my_all: boolAndNum = true;
// my_all = 1;
// my_all = false;
// console.log(my_all);

// =================

// // object
// const user: { id: number; name: string } = {
//   id: 1,
//   name: "ali",
// };
// console.log(user);

// =================

// type adminType = {
//   id: number;
//   name: string;
// };
// const admin: adminType = {
//   id: 1,
//   name: "medo",
// };
// console.log(admin);

// =================

// function action(Button: { up: string; down: string }): void {
//   console.log(`${Button.up}, ${Button.down}`);
// }
// action({ up: "go up", down: "go down" });

// ===============

// type Buttons = {
//   up: string;
//   down: string;
// };
// function actions(btns: Buttons) {
//   console.log(`${btns.up}, ${btns.down}`);
// }
// actions({ up: "go up", down: "go down" });

// ===============

// type Buttonss = {
//   up: string;
//   down: string;
// };
// type last = Buttonss & {
//   x: boolean;
// };
// function actionss(btns: last) {
//   console.log(`${btns.up}, ${btns.down}, ${btns.x}`);
// }
// actionss({ up: "go up", down: "go down", x: true });

// ===================================================
// ===================================================
// literal types
// ===================================================
// ===================================================

// let nums: 0 | 1 | -1 = 0;
// nums = 1;
// nums = 5; // error
// console.log(nums);

// =================

// let numss: 0 | 1 | -1;
// numss = -1;
// numss = 5 // error
// console.log(numss);

// =================

// type numsssType = 0 | 1 | -1;
// let numsss: numsssType = 1;
// numsss = 0;
// numsss = 5 // error
// console.log(numsss);

// =================

// type numbersType = 0 | 1 | -1;

// function compare(num1: number, num2: number): numbersType {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log("compare", compare(50, 50)); // 0
// console.log("compare", compare(50, 100)); // -1
// console.log("compare", compare(100, 50)); // 1

// ===================================================
// ===================================================
// tuple (must be arranged)
// ===================================================
// ===================================================

// let person1: [number, boolean, string] = [1, true, "ali"];

// person1 = [2, false, 6]; // error
// person1 = [2, false, "ahmed", true]; // error
// person1 = [2, false, "ahmed"];
// console.log(person1); // [ 2, false, 'ahmed' ]

// person1.push("ziad");
// console.log(person1); // [ 2, false, 'ahmed', 'ziad' ]

// ============

// // readonly can not push
// let person22: readonly [number, boolean, string] = [1, true, "ali"];

// person22 = [2, false, "ahmed"];
// person22.push("ziad"); // error
// console.log(person22); // [ 2, false, 'ahmed' ]

// // destructuring
// const [idd, state, namee] = person22;
// console.log(idd, namee, state); // 2 ahmed false

// ===================================================
// ===================================================
// enum
// ===================================================
// ===================================================

// enum direction {
//   up,
//   down,
//   left,
//   right,
// }
// console.log(direction.up); // 0 => default
// console.log(direction.down); // 1

// ==================

// enum direction {
//   up = 5,
//   down,
//   left,
//   right,
// }
// console.log(direction.up); // 5
// console.log(direction.down); // 6

// ==================

// enum direction {
//   up = "up",
//   down = "down",
//   left = "left",
//   right = "right",
// }
// console.log(direction.up); // up
// console.log(direction.down); // down

// ==================

// enum level {
//   easy = 9,
//   medium = 6,
//   hard = 3,
// }

// let lvl: string = "easy";

// console.log(`the level is ${lvl} and number is ${level[lvl]}`);
// // the level is easy and number is 9

// ==================

// function hardSeconds(): number {
//   return 3;
// }

// enum Kids {
//   five = 20,
//   seven = 15,
//   ten = 10,
// }

// enum PlayLevels {
//   // Kid = 10,
//   Kid = Kids.ten,
//   Easy = 9,
//   Medium = Easy - 3,
//   Hard = hardSeconds(),
// }

// console.log(PlayLevels);

// ===================================================
// ===================================================
// Type Assertion
// ===================================================
// ===================================================

// let uId: any = 5;
// let userId = uId; // any

// userId = "5"
// userId = false

// console.log(userId);

// ==============

// let uId: any = 5;
// let userId = uId as string; // any

// userId = "5";
// userId = 5 // error
// userId = false // error

// console.log(userId);

// ==============

// let uId: any = 5;
// let userId = <string>uId; // any

// userId = "5";
// userId = 5 // error
// userId = false // error

// console.log(userId);

// ==============

// let myImg = document.getElementById('my-img')
// console.log(myImg.src) // error

// ==============

// // let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);
// console.log(myImg.value); // error

// // as HTMLInputElement; and so on

// ===================================================
// ===================================================
// union and intersection type
// ===================================================
// ===================================================

// // union

// let all : number | boolean = 1
// all = true
// all = "alo" // error

// =============

// // type

// type A = {
//   one: number;
//   two: string;
//   three: boolean;
// };

// function getAll(btns: A): void {
//   console.log(btns.one, btns.two, btns.three);
// }
// getAll({ one: 1, two: "str", three: true });

// =============

// // extend

// type A = {
//   one: number;
//   two: string;
//   three: boolean;
// };
// type B = A & {
//   four: string
// }

// function getAll(btns: B): void {
//   console.log(btns.one, btns.two, btns.three);
// }
// getAll({ one: 1, two: "str", three: true, four: "str2" });

// =============

// // intersection

// type A = {
//   one: number;
//   two: string;
//   three: boolean;
// };
// type B = {
//   four: string;
// };
// type mix = A & B;

// function getAll(btns: mix): void {
//   console.log(btns.one, btns.two, btns.three);
// }
// getAll({ one: 1, two: "str", three: true, four: "str2" });

// ===================================================
// ===================================================
// type annotation
// ===================================================
// ===================================================

// type objType = {
//   readonly id: number;
//   name: string;
//   hire?: boolean;
//   skills: {
//     one: string;
//     two: string;
//   };
// };

// let myObj: objType = {
//   id: 1,
//   name: "ziad",
//   // hire: true, // optional
//   skills: {
//     one: "html",
//     two: "css",
//   },
// };

// // myObj.id = 5; // error // readonly
// myObj.name = "ali";
// myObj.hire = false;

// console.log(myObj.id, myObj.name, myObj.hire, myObj.skills.one);

// ===================================================
// ===================================================
// interface
// ===================================================
// ===================================================

// interface User {
//   readonly id: number;
//   username: string;
//   country?: string; // optional
// }

// let user: User = {
//   id: 100,
//   username: "elzero",
//   country: "egypt",
// };

// // user.id = 200 // error readonly

// console.log(user);

// function getData(data: User) {
//   console.log(data.id, data.username);
// }

// getData({ id: 1, username: "ziad" });

// ================

// interface User {
//   readonly id: number;
//   username: string;
//   country?: string; // optional
// }

// let user: User[] = [
//   { id: 100, username: "elzero", country: "egypt" },
//   { id: 101, username: "web", country: "riad" },
//   { id: 102, username: "school", country: "gada" },
// ];

// console.log(user);

// ================

// interface User {
//   id: number;
//   username: string;
//   hello(): string;
//   welcome: () => string;
//   double(num: number): number;
// }

// let user: User = {
//   id: 100,
//   username: "elzero",
//   hello() {
//     return "hello";
//   },
//   welcome: () => {
//     return "welcome";
//   },
//   double(n) {
//     return n * 2;
//   },
// };

// console.log(user.hello(), user.welcome(), user.double(5));

// ================

// // reopen interface
// // not extend
// // can not use type

// // home page
// interface Setting {
//   theme: boolean;
//   font: string;
// }

// // article page
// interface Setting {
//   sidebar: boolean;
// }

// // contact page
// interface Setting {
//   external?: boolean;
// }

// let userSetting: Setting = {
//   theme: true,
//   font: "open sans",
//   sidebar: false,
// };

// console.log(userSetting);

// ================

// interface User {
//   id: number;
//   username: string;
// }

// interface Moderator extends User {
//   role: string | number;
// }

// let moderator: Moderator = {
//   id: 100,
//   username: "ziad",
//   role: 2,
// };

// console.log(moderator);

// ================

// interface User {
//   id: number;
//   username: string;
// }

// interface Moderator {
//   role: string | number;
// }

// interface Admin extends User, Moderator {
//   protect: boolean;
// }

// let admin: Admin = {
//   id: 100,
//   username: "ziad",
//   role: 2,
//   protect: true,
// };

// console.log(admin);

// ===================================================
// ===================================================
// class
// ===================================================
// ===================================================

// class User {
//   u: string;
//   s: number;
//   msg: () => string;

//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;
//     this.msg = () => {
//       return `hello ${this.u}, your salary is ${this.s}`;
//     };
//   }

//   sayMsg() {
//     return `hello ${this.u}, your salary is ${this.s}`;
//   }
// }

// const userOne = new User("Ziad", 500);
// console.log(userOne.msg());

// ========================

// access modifiers

//  => puplic => all members of class in ts are puplic
//            => can be access anywhere

//  => private => can not access outside class
//             => visible only in class

//  => protected => can not access outside class
//               => visible in class and sub classes

// ========================

// class User {
//   private username: string;
//   protected salary: number;
//   msg: () => string;

//   constructor(username: string, salary: number) {
//     this.username = username;
//     this.salary = salary;
//     this.msg = function () {
//       return `hello ${this.username}, your salary is ${this.salary}`;
//     };
//   }

//   sayMsg() {
//     return `hello ${this.username}, your salary is ${this.salary}`;
//   }
// }

// const userOne = new User("Ziad", 500);

// // console.log(userOne.username); // error
// // console.log(userOne.salary); // error
// console.log(userOne.msg());

// ========================

// class User {
//   msg: () => string;

//   constructor(private username: string, public readonly hire: boolean) {
//     this.msg = function () {
//       return `hello ${this.username}`;
//     };
//   }

//   sayMsg() {
//     return `hello ${this.username}`;
//   }
// }

// const userOne = new User("Ziad", false);

// // console.log(userOne.username); // error
// console.log(userOne.hire);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// ========================

// // settet, gitter to access private members

// class User {
//   private _username: string;
//   constructor(_username: string) {
//     this._username = _username;
//   }

//   get username(): string {
//     return this._username;
//   }

//   set username(val: string) {
//     this._username = val;
//   }
// }

// const userOne = new User("Ziad");
// console.log(userOne.username); // ziad

// userOne.username = "ali";
// console.log(userOne.username); // ali

// ========================

// // static

// class User {
//   private static created: number = 0;
//   constructor(public username: string) {
//     User.created++;
//   }
//   static getCount(): void {
//     console.log(this.created);
//   }
// }

// const userOne = new User("Ziad");
// const userTwo = new User("Ahmed");

// console.log(userOne.username);
// console.log(userTwo.username);

// // console.log(User.created); // 2 // error private
// User.getCount(); // 2

// ========================

// // interface

// interface Settings {
//   theme: boolean;
//   font?: string;
//   save(): void;
// }

// class User implements Settings {
//   constructor(public username: string, public theme: boolean) {}
//   save(): void {
//     console.log(`Saved`);
//   }
//   update(): void {
//     console.log(`Updated`);
//   }
// }

// let userOne = new User("Elzero", true);

// console.log(userOne.username);

// userOne.save();
// userOne.update();

// ========================

// // Abstract Classes And Members

// abstract class Food {
//   constructor(public title: string) {}
//   abstract getCookingTime(): void;
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime(): void {
//     console.log(`Cooking Time For Pizza Is 1 Hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime(): void {
//     console.log(`Cooking Time For Burger Is Half Hour`);
//   }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();

// ========================

// // Polymorphism & Method Override

// class Player {
//   constructor(public name: string) {}
//   attack() : void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Spear");
//     this.spears -= 1;
//   }
// }

// class Barbarian extends Player {
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Axe");
//     this.axeDurability -= 1;
//   }
// }

// let barOne = new Barbarian("Elzero", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);

// ===================================================
// ===================================================
// generic types
// ===================================================
// ===================================================

// function returnStr(val: string): string {
//   return val;
// }
// function returnBool(val: boolean): boolean {
//   return val;
// }

// console.log(returnStr("str"));
// console.log(returnBool(true));

// ========================

// function returnStrBool(val: string | boolean): string | boolean {
//   return val;
// }

// console.log(returnStrBool("str"));
// console.log(returnStrBool(true));

// ========================

// function returnType<GT>(val: GT): GT {
//   return val;
// }

// // // arrow function
// // const returnType = <GT> (val: GT): GT => val

// console.log(returnType<string>("str"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number>(500));
// console.log(returnType<number[]>([1, 2, 3]));

// ========================

// function testType<T>(val: T): string {
//   return `the val is ${val} and type is ${typeof val}`;
// }

// console.log(testType<string>("str"));
// console.log(testType<boolean>(true));

// ========================

// function testType<T, S>(valOne: T, valTwo: S): string {
//   return `the values is ${valOne} and ${valTwo}`;
// }

// console.log(testType<string, number>("str", 100));
// console.log(testType<boolean, string>(true, "str"));
// console.log(testType<number, number[]>(100, [1, 2, 3]));

// ========================

// class

// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T): void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100);
// console.log(userTwo.value);
// userTwo.show("Message");

// let userThree = new User(100);
// console.log(userThree.value);
// userThree.show("Message"); // error due to the default parameter T => string

// ========================

// // interface

// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string;
//   title: string;
//   price: number;
// }

// class Collection<T> {
//   // public data: T[] = [];
//   data: T[];
//   constructor() {
//     this.data = [];
//   }
//   add(item: T): void {
//     this.data.push(item);
//   }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Uncharted", price: 150 });
// console.log(itemTwo);

// ===================================================
// ===================================================
// assignments
// ===================================================
// ===================================================

// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// console.log(showMyDetails(nothing, nothing, theName)); // Elzero

// ====================

// function printInConsole(...args: any) {
//   return args
//     .map((el) => `the value is ${el}, and the type is ${typeof el}`)
//     .join("\n");
// }

// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// ====================

// function printInConsole(...args: any) {
//   for (let el of args) {
//     console.log(`the value is ${el}, and the type is ${typeof el}`);
//   }
//   return "done";
// }

// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// ====================

// // extend
// type Info = {
//   theName: string;
//   theAge: number;
// };

// type Full = Info & {
//   country: string;
// };

// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// showInfo({ theName: "Elzero", theAge: 40 });

// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" });

// ====================

// function number(num: number): number {
//   return Game.Hard - num;
// }

// enum Game {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - Easy / 2,
//   Insane = number(10),
// }

// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

// ====================

// // Create Class Here

// class Player {
//   name: string;
//   type: string;
//   level: number | string;
//   vip: boolean;

//   constructor(
//      name: string,
//      type: string,
//      level: number | string,
//      vip: boolean = false
//   ) {
//     this.name = name;
//     this.type = type;
//     this.level = level;
//     this.vip = vip;
//   }

//   details() {
//     return `${this.vip ? "VIP" : ""} ${this.name}, Type Is ${
//       this.type
//     } Level Is ${this.level}`;
//   }
// }

// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// ====================

// // Create Class Here

// class Player {
//   constructor(
//     public name: string,
//     public type: string,
//     public level: number | string,
//     public vip: boolean = false
//   ) {}

//   details() {
//     return `${this.vip ? "VIP" : ""} ${this.name}, Type Is ${
//       this.type
//     } Level Is ${this.level}`;
//   }
// }

// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// ====================

// class Show {
//   constructor(private _title: string) {}
//   set title(val: string) {
//     this._title = val;
//   }
//   get title(): string {
//     return this._title;
//   }
// }

// let tester = new Show("Elzero");
// console.log(tester.title); // Elzero

// tester.title = "Osama";
// console.log(tester.title); // Osama

// ====================

// // Optional Generic Type

// function showTypes<TS = undefined, TN = undefined, TB = undefined>(
//   str?: TS,
//   num?: TN,
//   bol?: TB
// ): string {
//   return `${str ?? "Nothing"} - ${num ?? "Nothing"} - ${bol ?? "Nothing"}`;
// }

// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// ====================

// class Game<T> {
//   title: T;
//   price: number;
//   constructor(title: T, price: number) {
//     console.log(
//       typeof title === "number" ? `There's A Game Called ${title}` : ""
//     );
//     this.title = title;
//     this.price = price;
//   }
//   getDiscount(val: T): void {
//     console.log(`The Discount Is ${val}`);
//   }
// }

// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"

// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
