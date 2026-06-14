let person = {
    name: "Ketan",
    age: 25
};

let getInfo = (user) => {
    return user.name + " is " + user.age;
};

console.log(getInfo(person));