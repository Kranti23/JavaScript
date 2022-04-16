class Bank {
    // chinmay deshpande  ===>  cd
    constructor(accName, accNo, Bal) {
        this.fullName = accName
        this.accNo = accNo
        this.Bal = Bal
        this.trans = []
    }
    depoist(amount) {
        this.Bal = this.Bal + amount
        this.trans.push(amount)
        return this.Bal
    }
    withdrawl(amount) {
        if (amount < this.Bal) {
            this.Bal = this.Bal - amount
            this.trans.push(-amount)
            return this.Bal
        }
        else
            console.log('Insufficent Bal')
    }
    createUserName() {
        this.useName =
            this.fullName.split(" ").map(function (el) {
                return el[0]  // ['c','d']
            }).reduce(function (acc, el) {
                return acc + el
            }, "")
    }
    transaction() {
        return this.trans.slice(-5)

    }
    // static transactionCount(){
    //     console.log(chinmay.trans.length)
    // }
}

let chinmay = new Bank("chinmay deshpande", 122, 10000000)
let transactions = [33444, -55555, 6667, -7777, 8888, 999, 1000, 6666]
for (let x = 0; x < transactions.length; x++) {
    if (transactions[x] < 0) {
        chinmay.withdrawl(transactions[x])
    }
    else {
        chinmay.depoist(transactions[x])
    }
}
chinmay.createUserName()
//chinmay.transaction()

console.log(`The last five transaction of  username ${chinmay.useName} : ${chinmay.transaction()}`)
//Bank.transactionCount()         //static se without creating obj call krr skte



// Inheritance 
// (apply bind call)  ===>
class Student {
    constructor(firstName, rollNumber, age) {
        this.firstName = firstName
        this.rollNumber = rollNumber
        this.age = age
    }
    display() {
        console.log(this.firstName)
    }

}
class Teacher extends Student {
    constructor(firstName, rollNumber, age, salary) {
        super(firstName, rollNumber, age)
        this.salary = salary

    }
    display() {
        console.log(`Mr ${this.firstName}`)
        super.display()
    }

}
class Professor extends Teacher {
    constructor(firstName, rollNumber, age, salary, spl) {
        super(firstName, rollNumber, age, salary)
        this.spl = spl
    }
    display() {
        console.log(`Pro ${this.firstName}`)
        super.display()
    }
}
let Pro = new Professor("Chinmay", 123, 31, 12000, "physics")
Pro.display()


//  Polymorphism ====> 
// same class , same method name , differennt signature   ===>  overlaoding 
class ADD {
    // addition(x,y){
    //     console.log(x+y)
    // }

    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    addition(x, y, z) {

        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }

        else {
            console.log('Incorrect input')
        }

    }


}
let add = new ADD()
//same class , same method name , different signature   ===>  overlaoding 
add.addition(12, 12, 12)
add.addition(12, 12)
add.addition(12)
