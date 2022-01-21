function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('Jin', 99);

console.log(person.age);


// 24

function Person (name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('Hi! My name is ${this.name}.')
}

const me = new Person('Jin', 99);
me.sayHello();


