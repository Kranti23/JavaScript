//-------------- bind ,apply, call =====>> for setting the this scope values 
//---->> to set this key manually
//bind() --> returns function 
//call() --> doent returns function


let frd = {
    myFrd :"Nikhil K",
    age :24,
    displayAge : function(){
        console.log(this.age)
    }
}
//frd.displayAge()           //--->> 24
let dost = {
    name : "Ruhi",
    age : 25
}

let opp = frd.displayAge()
console.log(opp)              //undefined
// // function(){
//     console.log(this.age)                //this ka scope is going global --> undefined 
// }


//-------------- BIND -------------------

// let jj = frd.displayAge.bind(dost)
// jj()

frd.displayAge.bind(dost)()                 // since returning function -->> calling it      


//-------------- CALL ------------------

let me = {
    name:"kranti C",
    age : 22
}
displayAg = function (ag){
    console.log(this.ag = ag)
}
frd.displayAge.call(dost)                     //25
displayAg.call(me,47)                        //47


//------------ APPLY ---------
frd.displayAge.apply(dost)                 //25
displayAg.apply(me,[78,67])               //78
 

//*******************************************************************/
let person  = {
    fullName : "chinmay Deshpande",
    age: 32,
    displayName:function(){
        console.log(this.fullName)
    }
}
person.displayName()

let studentOne = {
    fullName : "Kranti Chavan",
    age:23
}
// studentOne.displayName = function(){             //created displayName prop on student wid ref of person
//     console.log(this.fullName)
// }
// studentOne.displayName()

studentTwo = {
    fullName : "Priyanka",
    age:24
}

let display = function(){
    console.log(this.fullName)
}

let rrr = display.bind(studentOne)               ///bind returns function
rrr()
//------- or -----
display.bind(studentOne)()                    //calling directly without storing in variable

display.call(studentOne)
display.call(studentTwo)



// let add = function(){
//     console.log(23+32)
// }
// function addition(fn){
//     return fn
// }
// addition(add)()

// // let pp = addition(add)
// // pp()



let kuku = {
    place:'NYU',
    birthPlace:"Pune"
}

let displayInfo = function(firstName,lastName){
    console.log(`kukus bornplace is : ${this.birthPlace}`, `\nfullname of my friend is : ${firstName} ${lastName}`)
}

displayInfo.call(kuku,"Kunal","Kulkarni")

displayInfo.apply(kuku,["Rutuja","Biradar"])



//_________________________________________________________________

class Bank{
    constructor(brName){
        this.branchName = brName
    }

    static displayBranch(code){
        console.log(this.branchName, code)
    }
}
let sbi = new Bank("SBI Shivaji Nagar")
//console.log(sbi)

Bank.displayBranch()       //undefined 
Bank.displayBranch.bind(sbi)()
Bank.displayBranch.bind(sbi,1243)()

Bank.displayBranch.call(sbi,"SBIN0023")

Bank.displayBranch.apply(sbi,["IF9877"])











