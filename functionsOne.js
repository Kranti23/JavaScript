// // why functions --->> DRY == do not repeat yourself

// function addition(a, b) {              //function declaration
//     console.log(a + b)
//     console.log(a * b)

// }
// addition(34, 1)
// addition(1, 2)


// //-----SETTING DEFAULT VALUES VIA PARAMETER----------

// function mul(a = 5, b = 6, c = 1) {
//     console.log(a * b * c)

// }
// mul()           //30            //dafault values lega 
// mul(3, 1, 1)         //3         //jo argument pass krenge wahi op hoga


// function div() {
//     console.log(40 / 2);
// }
// div()
// console.log(div())



//----------- FUNCTION EXPRESSION / FIRST CLASS FUNCTION --------

let add1 = function (p = 1, q = 5, r = 4) {
    console.log(p + q + r);

}
console.log('--------------------------')
// add1(2, 333, 1)
// console.log(add1)                               //returns function       
console.log(add1(1,1,1)) 
console.log(add1())   
// add1()                                            //10

console.log("=====================")



//--------- ARROW FUNCTION ---------
let mul1 = (a, b, c) => {
    console.log(a * b * c)
}
mul1(4, 5, 5)


///------------- TYPE OF FUNCTION -------------

// Function without parameter and without return type

function div1() {
    console.log(34 / 3)
}
div1()
div1()
div1()

// arrow function can be written in single statement
let division = (x,y) => {
    console.log(x / y)
    return x / y;
}
let rr = division(66 / 11)
console.log(rr)


let division1 = (x, y) => x / y
let rrr = division1(10, 5)
console.log(rrr)


// function with parameter and without return type

function add2(a, b, c) {
    console.log(a + b + c);

}
add2(4, 5, 16)
add2(3, 1, 1)


// Function with parameter and with return type

// 100rs ----given 
// 100 rs ----shown

function mul3(x, y) {
    return x * y;
}
mul3(3, 4)         //op nhi ayega 
// agr return hain toh store krna pdega and iss return ko reuse bhi krr skte

let mul4 = (a, b) => {
    return a * b;
    return 222; //no use
}
let kk = mul4(100, 4)
console.log(kk)
console.log(kk * 2)
console.log(kk + kk)



let op = function () {
    console.log("Helloo")
}
console.log(op)
op()


// let pp = function(){
//     console.log("hiii")
//     return Hii
// }
// console.log(pp)
// let k = pp()
// console.log(k)






