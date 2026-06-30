// class and object 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }
}

// const c1 = new Person("Ketan", 25);
// const c2 = new Person("Ajay", 15);
// console.log(c1, c2)



// /inheritance

class Customer extends Person{
    constructor(name, age, balance, city){
        super(name, age);
        this.city = city;
        this.balance = balance
    }
}


const c1 = new Customer("Swapnil", 30, 50000, "Panvel");
console.log(c1);