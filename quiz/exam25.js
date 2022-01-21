// 25 
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    get fullName() {
        return '${this.firstName} ${this.lastName}';
    }

    sayHello() {
        console.log('Hi! My name is ${this.fullName}');
    }
}

const me = new Person('Jin', 'Kim');

me.sayHello();