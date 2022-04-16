
let isLicence = false
let testPass  = true

// if(testPass){
//     isLicence = true 
// }
// if(isLicence){
//     console.log("you can drive")
// }

//---------------------------------------------------------------

if(testPass)isLicence = true
if(isLicence)console.log('you can drive')
console.log('----------------------------------------------------------------------------')


function fruitProcessor(fruitOne,fruitTwo){
   // console.log(`The juice is combination of ${fruitOne} and ${fruitTwo}`)
    return (`The juice is combination of ${fruitOne} and ${fruitTwo}`)
}
let a = fruitProcessor('Apple','Mango')
console.log(a)

let firstName = "Kranti"         
let lastName ="Chavan"
// my firstname is Kranti and last name is Chavan      

console.log('My firstName is ' +firstName+ ' and lastName is ' +lastName)
console.log("My firstname is "+firstName+ " and lastName is "+lastName)
console.log("My fav quote is 'Try Try but dont cry'")
console.log('kranti\s fav book is "Atomic habits"')

// ----------------- String InterPolation ---------------------

console.log('My firstname is ${firstname} and lastname is ${lastname}')


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calAge(birthYear){
    return 2022 - birthYear
}
let currentAge = calAge(1993)
console.log(currentAge)

//-------------------------------------------------------------------
Cal = function(BY){
   return 2022 - BY    
} 
let age = Cal(1999)
console.log(age)

//--------------------------------------------
let calAge2= (birthY)=>{
    return 2022 - birthY
}
let myAge =calAge2(1998)
console.log(myAge)


//let calAge2 = (myBirth) => 2022 - myBirth
let calAge3 = myBirth => 2022 - myBirth
let myAge2 = calAge3(1990)
console.log(myAge2)

console.log('=====================================================================')

// function with if else statement 
function retirementAge(age){

    if(age < 60 ){
        console.log(`Remaining years for retirement ${60-age}`)
    }
    else {
        console.log(`Already retired`)

    }
}
let age4 = calAge3(1960)
retirementAge(age4)
console.log(`The additon of one plus two is ${1+2}`)  // '3' // 3


// Marks 

let calAvg = (a,b,c)=> (a + b + c)/3

let avgAmol = calAvg(5,6,7)
let avgSarika = calAvg(7,8,9)
let avgPoorva = calAvg(5,6,7)

function getTopper(studentOne,studentTwo,studentThree){
    if(studentOne > studentTwo  && studentOne >studentThree){
        console.log(`Student one is Topper`)
    }
    else if(studentTwo > studentThree){
        console.log(`StudentTwo is Topper`)
    }
    else {
        console.log(`Student Three is Topper`)
    }
}
getTopper(avgAmol,avgSarika,avgPoorva)

 

let abc = ["i","am","Kranti"]
let zz = abc.join(" ")
console.log(zz)
console.log(typeof(zz))
console.log(zz.split("a"))