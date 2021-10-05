class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// S.O.L.I.D

const frank = new Person("Frank", 12, "M");
frank.setName("Bob");

console.log(frank.getName());

// ====== Example name ======

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  move() {
    console.log(this.name, "is moving");
  }
}

class Lion extends Animal {
  constructor(name, age) {
    super(name);

    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const leoTheLion = new Lion("Leo", 12);
console.log(leoTheLion.move(), leoTheLion.getAge(), leoTheLion.getName());
