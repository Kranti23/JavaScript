/*
    comparision, logical , conditional , switch , truthy and falsy value  */

//  + - / * % 2**3== 2 raise to 3
// i = i + 1 ,i = i -1 , i-= 1 , i++ , i--

// comparision operator
//< , > , <= , >= , != , ==...abs value only , === ....checks abs value n type, !==
//2 oper hoge toh checks abs value only
//3 hoge toh abs value n type

// program 1

let a = 100
let b = 50
console.log(a > b)  // booelan

// comparison 

console.log(8 < 8)  // false
console.log(8 <= 8) // true
console.log(7 > 6) // true 
console.log(6 <= 7) // true 
console.log(6 == 6) // true 
console.log(6 == '6') // true
console.log(6 === '6') // false

// == (value) , === (value and type)
// '6' --- string 
//  6 ---  number  
console.log(6 == 6) // true
console.log(6 === 5) // false
console.log('5' === '5') // true
console.log(5 != 4) //  true
console.log(5 != '5') //  false
console.log(6 !== '6') // true
console.log('5' == '5') // true
console.log('5' === '5') // true

// program 1
console.log('----- AND ----- ')
console.log(7 > 5 && 7 == 7)
console.log(7 === '7' && '7' == '7')

console.log(6 == '6' || 6 !== '6')
console.log(6 !== 6 || true)
console.log(7 > 8 || 8 === '8')
//         false || false

// NOT - !
console.log(!true)
console.log(!false)

// condition statement

let numberofTickets = 6
if (numberofTickets <= 5) {
    console.log('5 percent discount')
}
if (numberofTickets > 5 && numberofTickets <= 10) {
    // True &&  True
    console.log('10 percent discount')
}


let numberofTicketsB = 3
if (numberofTicketsB <= 5) {
    console.log('5 percent discount')
}
if (numberofTicketsB > 5 && numberofTicketsB <= 10) {
    // True &&  True
    console.log('10 percent discount')
}


let numberofTicketsC = 3
if (numberofTicketsC <= 5) {
    console.log('5 percent discount')
}
else if (numberofTicketsC > 5 && numberofTicketsC <= 10) {
    // True &&  True
    console.log('10 percent discount')
}
else {
    console.log('Incorrect input')
}


console.log("============== TRUTHY FALSY =====================================")
//truthy ---->> integers (+,-) , 'A' , "Chinmay", " " ,[] ,{},infinity, special symbols
//falsy ----->> 0, undefined, null

//let numA = 0
if (0) {
    console.log("HIIIII")
}
else {
    console.log("byeeeee")
}


if (Infinity) {
    console.log("HIIIII")
}
else {
    console.log("byeeeee")
}

if ('_') {
    console.log("HIIIII")
}
else {
    console.log("byeeeee")
}

//------------------ BOOLEAN ----------------------------------

let abc = Boolean(null)
console.log(abc)

console.log(Boolean({}))
console.log(Boolean(undefined))
console.log(Boolean(-2))
console.log(Boolean(0))

//0---try again
//1 ---study more
// 1 > ---pass

//let number = 0
let number = 1
if (number == 0) {
    console.log("Try Again")
}
else if (number == 1) {
    console.log("Study More")
}
else {
    console.log("Pass")
}

//============================================\
let a = 100
let b = 200
let c =50
if(a>b){
    if(a>c){
  console.log("a is greater")
    }
    else{
        console.log("c is greater")
    }
}
else if(b > c){
    console.log(" b is greater")
}
else{
    console.log(" c is greater")
}


//-----------------------
if( a > b && a > c){
    console.log('a is greater')
}

else if(b > c){
    console.log( ' b is greater')
}
else{
    console.log('c is greater')
}









