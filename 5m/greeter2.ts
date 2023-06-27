class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person1 {
    fistName: string;
    lastName: string;
}

function greeter2(person: Student) {
    return "Hello, " + person.fullName;
}

let user2 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(user2);