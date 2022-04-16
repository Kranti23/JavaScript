// --------->> Object literal / normal obj
let obj = {
    bankName: "SBI",
    branch: "Pune",
    displayName: function () {
        console.log(this.bankName)
    }
}
console.log(obj.branch)
obj.displayName()
console.log(obj.displayName)


//------------------- method one -----------
console.log("--------------- FUNCTION CONSTRUCTOR -----------------")

let Person = function (fn, ag, plc) {
    this.fullName = fn
    this.age = ag
    this.place = plc
    this.displayName = function () {
        console.log(this.fullName)
    }
}
let krac = new Person("Kranti Chavan", 23, "Pune")
console.log(krac)
krac.displayName()
console.log(Person)

let nik = new Person("Nikhil K", 24, "Hof")
console.log(nik)
console.log(nik.age)
nik.displayName()
console.log(Person)

//----------------------------------------------

let Info = function (stud, clg, pst) {
    this.student = stud
    this.college = clg
    this.pssout = pst
    this.displayPssYr = function () {                //incorrect way
        console.log(this.pssout)
    }
}

console.log(new Info())

let frd1 = new Info("Akash Thakare", "COEP", 2021)
let frd2 = new Info("Kanchan", "Singhgadh", 2022)
console.log(frd1)
console.log(frd2)
frd1.displayPssYr()
frd2.displayPssYr()

Info.prototype.displayPssYr = function () {
    console.log(this.pssout)
}

//every object in js has __proto__ property 
console.log(frd1.__proto__ === Info.prototype)         //-->> obj.__proto__ == parent.protoytpe

console.log("/*********************************************/")

//////////////////////////////////////////////////////////////////////////////////////////////////////
let Bestiee = function (nm, hby) {
    this.name = nm,
        this.hobbie = hby
}
let ruhi = new Bestiee("Rutuja", "Singing")

console.log(ruhi instanceof Bestiee)
console.log(Bestiee.prototype === ruhi.__proto__)

Bestiee.prototype.language = "Marathi"
console.log(ruhi)
console.log(ruhi.language)
//console.log(new Bestiee)


//---------- Add, update,delete inherited properties from the parent -----------------------
let kanch = new Bestiee("Kanchan", "travel")
if (kanch instanceof Bestiee) {
    kanch.name = "Kanchan Itankar",
        kanch.age = 24                    //kanch own propert created 
    delete kanch.hobbie

}
console.log(kanch)

console.log(kanch.hasOwnProperty('age'))
console.log(kanch.hasOwnProperty('language'))
console.log(ruhi.hasOwnProperty('language'))
console.log(Bestiee.prototype.hasOwnProperty('language'))
console.log(Bestiee.prototype.hasOwnProperty('age'))


//- - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log("++++++++++ array as a object is INSTANCEOF ARRAY ++++++++++++++++++++++++++++++++++++++")

let devices = ["laptop", "mobiles", "ipad"]       //this is instance of Array

console.log(devices instanceof Array)
console.log(devices.__proto__ === Array.prototype)
console.log(devices.push("mackbook"))        //returns length

//----------- adding methods to the parents protype  ----------
let fruits = ["melon", "mango", "melon", "chiku", "chiku"]

Array.prototype.duplicate = function (array) {
    return Array.from(new Set(array))
}

console.log(fruits.duplicate(fruits))
//console.log(fruits)

console.log(new Set([11, 45, 11, 67, 22, 45, 11]))
console.log(Array.from(new Set([11, 45, 11, 67, 22, 45, 11])))       //set to array conversion


//----------- second method using Es6 class costructor --------------------------
console.log("'``````` ES6 CLAS `````````````````")

let Bank = class {
    constructor(accName, accNo, bal) {
        this.accntHolder = accName
        this.accntNum = accNo
        this.accntBalance = bal
    }
    showBalance() {
        console.log(this.accntBalance)
    }
    set Deposit(value) {                               //set keyword
        this.myDeposit = value
    }
}

let myAccnt = new Bank("Chavan Kranti", 346890111, 25000)
console.log(myAccnt)
myAccnt.showBalance()
Bank.prototype.showBalance()         //undefined
//Bank.prototype.Saving = "Current"       //adding prop to the prototype

console.log(myAccnt.__proto__ === Bank.prototype)

Bank.prototype.greet = function () {
    console.log("Welcome to SBI")
}
myAccnt.greet()

myAccnt.Deposit = 5000
console.log(myAccnt)


//``````````````````````````````````````````````````````````````````````````
class Brand {
    constructor(prdt, use) {
        this.product = prdt
        this.use = use
    }
    Message() {
        console.log("Thanks for your feedback.")
    }

    static qwerty() {
        console.log('I am static method')
    }
}

let myProduct = new Brand("MamaEarth", "skinCare")
console.log(myProduct)
myProduct.Message()
myProduct.qwerty()



//----------------- 3rd method using Object.create -----------------------

let classmate = {
                                                 //making obj first for accessing
    tag() {
        console.log("Enduring value")
    },
    book(nm, autr, edition) {
        this.name = nm
        this.author = autr
        this.edition = edition
    }
}

let notes = Object.create(classmate)
console.log(notes)

notes.name = "Indian Polity"
notes.author = "M Laxmikanth"
notes.edition = "Sixth edition"

notes.tag()
console.log(notes)

notes.book('Indian Art and Culture',"Singhania","3rd edition")
console.log(notes)

notes.type = "civil services"
console.log(notes)






