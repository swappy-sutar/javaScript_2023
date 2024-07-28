let myName = "swapnil    ";
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer", 
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.swap = function () {
  console.log(`swapnil is present in all objects`);
};

Array.prototype.swappy = function () {
  console.log(`swappy say hii`);
};
// heroPower.swap()
myHeros.swap();
myHeros.swappy();

// INHERITANCE

const user = {
  name: "swapnil",
  email: "swapnil@.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: "teachingSupport",
};

// 1.
teacher.__proto__ = user;

// 2.
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "swapWithCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is : ${this.trim().length} `);
};
anotherUserName.trueLength();
"swapnil".trueLength();
"sam".trueLength();
