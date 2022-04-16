
//``````````````````` 1st way function constructor `````````````````````````````````
function Gate(level, purp, valid, eligible) {
    this.level = level
    this.purpose = purp
    this.validScore = valid
    this.displayIIT = function () {
        console.log("IIT Delhi it is..!!")
    }
    this.eligibility = eligible

}
let exam = new Gate("National", ["PSU", "IIT's"], 'above75', "graduate")
console.log(exam)
console.log(Gate.prototype === exam.__proto__)

Gate.prototype.displayIIT = function () {
    console.log("IIT Bombay")
}
exam.displayIIT()
console.log(exam instanceof Gate)
exam.psu = "Maharatna"
console.log(exam)

let crack = new Gate("National")
console.log(crack)
if (crack instanceof Gate) {
    crack.rank = 165
    crack.purpose = "PSU"
    delete crack.displayIIT
    delete crack.eligibility
}
console.log(crack)
console.log(crack.__proto__ === Gate.prototype)



//````````````````` 2nd way Es6 class ``````````````````````

let Collection = class {
    constructor(brnd, owner, abt) {
        this.brand = brnd
        this.owner = owner
        this.about = abt
    }
    printBio() {
        let educt = {
            UG: "BTech Mechanical",
            currentAdress: "Hof,Germany",
            permanantAdress: "Amravati,India",
            PG: "Masters in aeronautics",
            skills: ['designing machines', "TeamPlayer", "FormulaBharat_Racing"]
        }
        console.log("\n", educt)
    }

    set goals(life) {
        this.myGoals = life
    }
}
let dost = new Collection("BMW Bike", "Nik", { ownerName: "Nikhil K", age: 24, workPlace: "Mercedez Benz" })
console.log("\n", dost)

dost.printBio()
dost.myGoals = "Be givers in life."
console.log("\n", dost)

console.log(Collection.prototype === dost.__proto__)
console.log(dost instanceof Collection)
console.log(dost.hasOwnProperty('mygoals'))
console.log(Collection.prototype.hasOwnProperty('skills'))
console.log(dost.hasOwnProperty('brand'))


//`````````````````````3rd way object.crete() `````````````````

let classmate = {

    tag() {
        console.log("ITC:Enduring value")
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

notes.book('Indian Art and Culture', "Singhania", "3rd edition")
console.log(notes)

notes.type = "civil services"
console.log(notes)


//------------------- INHERITANCE --------------------
//inherits properties from parents prototype properties

class Unknown {
    firstName = "priyanka"
    lastName = "Dani"
    birthPlace = "Nagar"
}
let friend = new Unknown("Shital","Ghule","Sangamner")
console.log(friend)


class KnownFriend extends Unknown {
 commonThings = ['Talkative',"friendlyBehav"]
     age = 24
}

let myFriend = new KnownFriend()
console.log(myFriend)

console.log(myFriend.commonThings)
console.log(myFriend.age)
console.log(myFriend.birthPlace)

console.log(friend.commonThings)            //undefined 

myFriend.name = "Shital Ghule"
console.log(myFriend)
delete myFriend.birthPlace
console.log(myFriend)


class CloseFriend extends KnownFriend{
       hobby= "Painting"
       isHardWorking = "Yes"
}
let frandz = new CloseFriend();
console.log(frandz)





