function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayName = function() {
    console.log(this.name)
}
let p1 = new Person('swh', 23)