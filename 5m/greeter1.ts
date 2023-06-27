interface Person {
    fistName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.fistName + " " + person.lastName;
}

let user1 = { fistName: "Jane", lastName: "User" };

document.body.innerHTML = greeter1(user1);