function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// What will the following code output when executed?
person1.greet();  // Output: Hello, my name is Alice
person2.greet();  // Output: Hello, my name is Bob


// here person is an object and we are adding a custom function to it , greet() , now the instances created using person object will have the this greet method involved 

// person  = function prototype 

