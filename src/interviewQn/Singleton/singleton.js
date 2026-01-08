// Approch one
const SingletonFactory = (function () {
  function SingletonClass() {
    console.log("This is singleton");
    this.data = [];
  }
  SingletonClass.prototype.addData = function (val) {
    this.data.push(val);
  };
  var instance;
  return {
    getInstance() {
      if (!instance) {
        instance = new SingletonClass();
        instance.constructor = null;
      }
      return instance;
    },
  };
})();

// Approcah 2
class SingletonClass2 {
  constructor() {
    if (SingletonClass2.instance) {
      return SingletonClass2.instance;
    }
    this.data = [];
    SingletonClass2.instance = this;
    Object.freeze(this);
  }
  addData(val) {
    this.data.push(val);
  }
}

const sigInst1 = new SingletonClass2();
const sigInst2 = new SingletonClass2();
sigInst1 === sigInst2;

// Approach 2;
const SingletonInstance = (function () {
  class SingletonClass {
    constructor() {
      // if (SingletonClass2.instance) {
      //   return SingletonClass2.instance;
      // }
      this.data = [];
      // SingletonClass2.instance = this;
      // Object.freeze(this);
    }
    addData(val) {
      this.data.push(val);
    }
  }
  return Object.freeze(new SingletonClass());
})();
export default SingletonInstance;
