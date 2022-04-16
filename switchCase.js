
// -------------------- Tenary Operator ---------------

// let age = 18
// if(age > 18){
//     console.log('you can drive')
// }
// else{
//     console.log('\t\n you can not drive')
// }

let age = 18
age >= 18 ?console.log('\n you can drive'):console.log('you can not drive')
//console.log(r)

66 > 56 && 88 === "88" ? console.log('op is correct'):console.log('op is incorrect')

let pp = 66 > 56 && 88 === "88" 
pp ? console.log('correct'):console.log('incorect')


//---- Without break ----------

let city = "Pune"
switch(city){

    case 'Pune':
        console.log("\nMaharshtra")

    case 'Indore':
        console.log("UP")

    case "Lucknow":
        console.log("MP")

    default:
        console.log('city is not found')

}

//------------- With Break ---------------

let place = "indore"
switch(place){
    case 'Pune':
        console.log("\tMaharashtra")
        break

    case 'indore':
        console.log('\tUttarpradesh')
        break
    
    case 'Gandhinagar':
        console.log('\tGujarat')
        break

    default:
        console.log('\tnot found')
        break

}

//------------------------------------------

let friend = "Kranti"
switch(friend){

    case "Nikhil":
    case 'Kranti':
        console.log('\nBest friends') 
        

    case 'Kanchan':
    case 'Kranti':
        console.log("Classmates")
        break

    case 'Akash':
    case 'Prasad':
        console.log("Dost") 
        break   

    default:
        console.log("not my friend")

}

//---------------------------------------------------------
// console.log(Math.floor(23.6))
// console.log(Math.ceil(23.4))
// console.log(Math.round(233.3))
// console.log(Math.round(233.6))

//console.log(Math.random())    / 0 to 0.99

console.log(Math.floor(Math.random() * 6) + 1)

console.log(Math.random())      //0 to 0.9
console.log(Math.random()*6)    //0 to 5.99
console.log(Math.floor(Math.random()*6))   // 0 to 5 
console.log(Math.floor(Math.random()*6 + 1) )    // 1 to 6






