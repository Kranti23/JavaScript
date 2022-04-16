//---------Variables Defining---------
//let--->>for block scope
//var--->>for global scope
//const--->>for const values

let a = 34
a = 89
console.log(a)

const number = 23
console.log(number)
//number  =  34              //now it will not work gives error
//console.log(number)

var x = 23                     //like let variable
x = 90
console.log(x)

//to try out new code without deleting previous(comment out)


//DEFINING VARIABLES
//no special symbols except (underscore) _ and $
//camelCase ----------fullName
//underscore --------full_Name
//$ use kr skte------$city
//donot use number at first
let city$ = "nagpur"
console.log(city$)

let $me = "Kranti"
console.log($me)

//---------------TYPE---------->>different bahaviour /properties
let noOne = 10
console.log(typeof noOne)

let above18 = true
console.log(typeof above18)

let fullN = "Kranti Chavan"
console.log(typeof fullN)


//NUMBER ----->deci/float,can be positive or negative
//BOOLEAN ---->can only hold two values (true / false)
//STRING -----> collection of character and stores value by index

//Assignment operators
//SHORTHAND
let y = 23
y += 1          //y = y + 1
console.log(y)

let yy = 23
yy -= 2                     //yy = yy - 2
console.log(yy)

let yz = 23
yz *= 4                    //yz = yz * 4 
console.log(yz)

let b = 44
b /= 11                   //b = b / 11 
console.log(b)

let sqrt = 2 ** 3        //2 raise to 3
console.log(sqrt)

// j++   //j = j + 1  increment 
// k--    //k = k -1  decrement


//CONDITION STATEMENTS
// truthy ------>> 1,-1, integers,special symbols,true
// falsy  ------>> 0,null,undefined,false


if(1){      //true
    console.log("hiii")
}
else {
    console.log("byeee")
}

if(infinity){           true
    console.log("hieee")
}
else{
    console.log("bye")
}

if (undefined){
    console.log("hyeee")
}
else{
    console.log('--')
}

//    Concatnation
// let name = "kranti"
//let surname ="chavan"
//console.log(name+''+surname)    

