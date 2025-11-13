const PersonObj = {
  name: "",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
  create(obj) {
    const instance = Object.create(this);
    Object.keys(obj).forEach((key) => {
      instance[key] = obj[key];
    });
    return instance;
  },
};

const Musician = PersonObj.create({
  instrument: "",
  sayInstrument() {
    console.log(`I play ${this.instrument}`);
  },
});

const p1 = Musician.create({ name: "Satish", instrument: "Guitar" });
