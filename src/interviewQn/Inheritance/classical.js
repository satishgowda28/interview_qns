function inherit(Child, Parent) {
  Child.super_ = Parent;
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child,
      writable: true,
      configurable: true,
      enumerable: false,
    },
  });
}

const Person = function (name) {
  this.name = name;
};
Person.prototype.sayName = function () {
  console.log(`my name is ${this.name}`);
};

const Musician = function (name, instrument) {
  Musician.super_.call(this, name);
  this.instrument = instrument;
};

inherit(Musician, Person);

const guitarist = new Musician("Satish", "Guitar");

console.log(guitarist);
