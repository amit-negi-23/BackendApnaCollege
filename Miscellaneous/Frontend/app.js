/**Function factory */

function MakeObj(name, age){
    const Person = {
        name : name,
        age: age,
    }
    return Person;
}


let result = MakeObj("Amit", 24)
console.log(result)



/**constructor function */

function Person(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age;
}

let p1 = new Person("Amit", "amit@gmail.com", 25)


/***Classes */

class Info{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    showName(){
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Info {
    constructor(name, email, marks){
        super(name, email);
        this.marks = marks;
    }
}

let std1 = new Student("rohit", "rohit@gmail.com", 88)

class Faculty extends Info{
    constructor(name, email, subject){
        super(name, email)
        this.subject = subject;
    }
}


let f1 = new Faculty("soorya", "soorya@gmail.com", "coding");
let f2 = new Faculty("Amit", "amit@gmail.com", "React");