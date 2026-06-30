let obj1 = {
    name : "Ketan",
    age: 25,
    city : "Mumbai",
    greet : function(){
        console.log(`Hello ${this.name}`)
    }
}


let obj2 = {
    balance: 2000
}

obj2.__proto__ = obj1;

console.log(obj2.age);

