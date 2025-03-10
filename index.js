function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}
Person.prototype.greeted = function() {
    console.log('hello' + ' ' +  this.age);
}

person1.greet(); // hello John
person2.greeted(); // hello John