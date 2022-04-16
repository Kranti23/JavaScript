
function add(a, b) {
    console.log(a + b)    //undefined + undefined = NaN
    //return a+b
}
add()
//let pp = add(2,56)
//console.log(pp)


// -------------------- Setting default values for parameter ----------------------------------
function mul(p = 2, q = 9) {
    console.log(p * q)
}
mul()             //18       //taking default values
mul(7, 70)


//------------ Passing array as a parameter to function -----------------------------------

let friend = ["nikhil", "akash", "kanchan", "shubham"]
function myFriends([a, b, c]) {                     // desturing of array
    console.log('my friends are : ' + a + ' and ' + c)
    console.log(`my batchmate is ${b}`)
}
myFriends(friend)

// let accA = friend.reduce((acc,el)=>{
//         return acc.length > el.length;
// },"")
// console.log(accA)                  //??


//===========================>> printing all elem of passed array
function myFriends(arr) {
    //arr =  ["nikhil", "akash", "kanchan", "shubham"] ----->> behind the scenes
    arr.forEach((el) => {
        console.log(el)
    })
}


//-------------------- Object as a parameter to another function -----------------------------

let info = {
    Name: "Kranti Chavan",
    age: 23,
    skills: ["java", "cypress", "C"]
}

function printObj({ Name: nm, age, skills: [a, b] }) {
    console.log(nm, age, b)
}
printObj(info)


//------------------------function as a parameter to another function -------------------------

let addition = function (x, y) {
    console.log(x + y)
}
// addition(50,150)
// console.log(addition)

function add2(fn, p, q) {
    // let fn = function (x,y){
    //     console.log(x+y)
    // }
    //let p=4 ,b = 5
     //console.log(p*q)            //this will print first
    fn(p, q)
   // console.log(p-q)     
}
add2(addition, 4, 5)

addition(30, 30)
console.log(addition)                  //printing function
addition(170, 170)                     // calling function

console.log(' ================== LOGICAL ======================================== ')

//-------------------- print longest word of array -------------------

let fruits = ["mango", "chiku", "watermelon", "papaya"]
//var longestWord =>>
let longestWord = fruits.reduce(function (acc, el) {
    if (el.length > acc.length) {
        return el;
    }
    else {
        return acc;
    }
}, " ")
console.log(longestWord)


//------------ print highest number in array -----------------------
let num = [11, 45, 66, 78, 454, 77, 83, 111]

let max = num.reduce(function (acc, el) {
    if (el > acc) {
        return el
    }
    else {
        return acc
    }
}, num[0])                      // acc ==>> 11
//el ------->> 11
//acc----->> 11 ,el---->>45
//el--->> 66 acc--->> 11
console.log(max)


//__________ longest word in string __________________________________________________________

let quotes = "do what you love"
//console.log(typeof quotes)

let arrElem = quotes.split(" ")
// console.log(arrElem)
// console.log(arrElem.length)

let longestWordd = arrElem.reduce((acc, el) => {
    if (acc.length > el.length) {
        return acc       
    } else {
        return el;
    }
}, " ")
console.log("\n\nDisplay the longest word here:",longestWordd)
/*
  acc ==> " "
  el -- do       acc --->>do
  acc ---do
  el -- what     acc--->>what
  acc--- what
  el --- you      acc -->>what
  acc--- what
  el--- love      el---->>love
*/



// //-------------------object as a parameter-----------------------------------------
// let vehicle = {
//     brand:"BMW",
//     owner:"nikhil",
//     id:35477
// }
// function printVehicle(object){
//     console.log("\nobject is :",object)
//     for(let key in object){
//         console.log(key,object[key])
//     }
// }
// printVehicle(vehicle)

// function printObj({brand:bb,id:ii,owner}){
//     console.log(`brand is ${bb} and its ID is ${ii}`)
// }
// printObj(vehicle)              //new reference is created for array and object


// //_______________________________________________________________________________________

// let random = [11,34,66,23]
// function printArr(arr){
// //arr=[11,34,66,23]
//      arr[0] = 89
//      console.log(arr)       //[89,34,66,23]
// }
// console.log(random)        //[11,34,66,23]        prints first
// printArr(random)
// console.log(random)         //[89,34,66,23]


// let me ={
//     age:23,
//     place:"Nashik"
// }
// function displayObj(obj){
//     console.log(obj)    // obj = me ---->> "nashik"
//     obj.place = "Pune"
// }
// console.log(me)    //nashik         //it will print first
// displayObj(me)
// console.log(me)        //pune


// //---------------------------------------------------
// let fam = {
//     brother:"Akash",
//     sister:"Simran"
// }
// function changeBro(obj){
//     console.log(obj)          //obj = fam object pura print hoga 
//     obj['brother'] = "nilesh"
//     return obj
//     console.log(obj)
// }
// console.log(fam)             //fam obj
// changeBro(fam)
// // let ff = changeBro(fam)
// // console.log(ff)              //for returned obj--->updtaed obj
// console.log(fam)              //updated object 


// //------------------------>>>>>>>>>>>>>>>>>>...

// let exp = function(a,b){
//    console.log(a-b)
// }
// //exp(3,4)

// function sub(fn){
//     // fn = function(a,b){
//     //     console.log(a-b)
//     //  }
//     fn(12,44)

//     fn = function(x,y,z){
//         console.log(x-y-z)
//     }
//     exp(30,10,10)
// }
// sub(exp)
// exp(5,2,1)




