//```````````````` Multiple Inheritance ````````````````````````````
// using hardcoded values
class Student {
    firstName = "priyanka"
    lastName = "Dani"
    birthPlace = "Nagar"
}
let studentOne = new Student("Shital", "Ghule", "Sangamner")
console.log(studentOne)

class Teacher extends Student {
    salary = 15000
    subject = "Physics"
}
let studentTwo = new Teacher()
console.log(studentTwo)
console.log(studentTwo.salary)
console.log(studentTwo.firstName)
console.log(studentTwo.birthPlace)
console.log(studentOne.salary)                 //undefined 

studentTwo.dept = "FC road"
console.log(studentTwo)
delete studentTwo.lastName
console.log(studentTwo)

class Professor extends Teacher {
    position = "HOD Physics"
    university = "SMRT"
}
let newJob = new Professor();
console.log(newJob)


//--------------- using constructor -------------------

class Grandfather {
    constructor(G_firstName, lastName, G_age) {
        this.Gname = G_firstName
        this.lastName = lastName
        this.age = G_age
    }
    displayName() {
        console.log(this.Gname)
    }
}

class Father extends Grandfather {
    constructor(G_firstName, lastName, G_age, F_firstName) {
        super(G_firstName, lastName, G_age)        //--> calling constructor of parent
        this.fatherName = F_firstName
    }
    displayName() {
        console.log(this.fatherName)
    }
}

class Son extends Father {
    constructor(G_firstName, lastName, G_age, F_firstName, S_name) {
        super(G_firstName, lastName, G_age, F_firstName)
        this.S_name = S_name
    }
    displayName() {
        console.log(this.S_name)
    }
}
let famTree = new Son("Gangaram", "Chavan", 83, "Eknath", "Aakash")
console.log(famTree)
famTree.displayName()                               //override
console.log(famTree.displayName)

// let father = new Father("Gangaram","Chavan",45,"Eknath")
// console.log(father)
// father.displayName()

// let grandParent = new Grandfather("Gangaram","Chavan",83)
// console.log(grandParent)
// grandParent.displayName()


//******************************************************************************/
console.log("\n Method OVERLOADING & Method OVER RIDING")

class Tree {
    constructor(name, height, years) {
        this.name = name,
            this.height = height,
            this.years = years
    }
    measureHeight() {
        console.log(this.height)
    }
    countYears() {
        console.log(this.years)
    }
}

class Plant extends Tree {
    constructor(name, height, years, color) {
        super(name, height, years)
        this.color = color
    }
}
let mango = new Plant("MangoTree", "16inch", 120, 'blackGreen')
console.log(mango)


//------------------ POLYMORPHISM ---------------------

//------>> method OVERLOADING ==> same class, same methodName, different signature 
//------>> method OVER RIDING ==> same methodName,same signature, different Class

//________________ Overloading method ____________________
class Search {
    searchMobile(resultOne, resultTwo) {
        console.log(resultOne, resultTwo)
    }
    searchMobile(resultOne, resultTwo, resultThree) {             //oveloading--> updated
        console.log(resultOne, resultTwo, resultThree)
    }
}
let device = new Search()
device.searchMobile("mi-note8")
device.searchMobile("oppo", "iphone")                //takes the arguments for updated methods 


/* `````````````````````````````````````````````````````````````````````*/
let Add = class {
    addition(a, b, c) {
        if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c);
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
        else {
            console.log("please pass correct arguments")
        }
    }
}
let printAdd = new Add()
printAdd.addition()
printAdd.addition(78, 20)
printAdd.addition(2, "kranti", 7)
printAdd.addition(11)


//`````````````````````` Over Riding method ``````````````````````````````````````
//-->  different class, same methodName , same signature
class Bank {
    constructor(accnHolder, accNo, balance) {
        this.accnHolder = accnHolder,
            this.accno = accNo,
            this.bal = balance
    }
    saving(bankName) {
        console.log(`${bankName} saving is 10%`)
    }
    loan(bankName) {
        console.log(`${bankName} loan method 1%`)
    }
}

class SBI extends Bank {
    saving(bankName) {
        console.log(`${bankName} saving is 30%`)
    }
    loan(bankName) {
        console.log(`${bankName} loan method 11%`)
    }
}

let branch = new SBI("Coep Accounts",34568,75000)
console.log(branch)
branch.loan('HDFC')                     //over riding
branch.saving('Axis')                      //over riding









