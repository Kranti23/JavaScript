// //------------------ SYNCHRONOUS -------------------------------------
// function add(){
//     console.log(10+10)
// }
// function add2(){
//     console.log(1+1)
// }
// add2()        //2             //prints op for a funct which will be called first
// add()        //20


// //---------------------- ASYNCHRONOUS ----------------------------------------
// function sub(){
//     setTimeout(function(){
//         console.log(2-1)
//     },3000)
// }
// function sub2(){
//     console.log(100-60)            //40 will print first n then 1
// }
// sub() 
// sub2()               

//-------------------->> asynchro
// function one() {
//     setTimeout(() => {
//         console.log("hello")
//     }, 2000)

//     setTimeout(() => {
//         console.log("hiii")
//     }, 1000)

//     setTimeout(() => {
//         console.log("byeee")
//     }, 3000)
// }
// one()


//--------------->> CALL BACK HELL -->purani method -->> asynchro ko synchro bnaye but the code is asynch
// function greet() {
//     setTimeout(() => {               //function ke andr function hai not depends on time it will go orderly
//         console.log("Helloo")

//         setTimeout(() => {
//             console.log("Hiii")

//             setTimeout(() => {
//                 console.log("Byeee")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// greet()


console.log("********************* PROMISES ****************************")

// program 1 
let promise = new Promise(function (resolve, reject) {
    let x = 10;
    let y = 30;
    if (x != y) {
        resolve("\nWelcome to the world of Minskole.")
    } else {
        reject("\nNo coding...\n")
    }
})
promise.then(function (msg) {
    console.log(msg)
}, function (msg1) {
    console.log(msg1)
})


//program 2
let promise1 = new Promise((fulfilled, notFullfilled) => {
    let friends = ['Nikhil', 'Prasad', 'Gunjan']
    if (friends.length !== 3) {
        fulfilled(friends)
    } else {
        notFullfilled(friends.pop())     //returns last deleted elem from array
        return friends
    }
})
promise1.then(function (frds) {
    console.log(frds)
}, function (notFrd) {
    console.log(notFrd)
})


//program 3
let make = new Promise(function (resolve, reject) {
    if ('me' == 22) {
        resolve("Done Done Done..!")
    } else {
        reject("Byeeeee")
    }
})
make.then(function (msg) {
    console.log(msg)             // --> Done done done
    return msg[0]
})
    .then(function (aa) {
        console.log(aa)              //--> Done done done ,,D           
        return 11
    })
    .then((bb) => {
        console.log(bb)            //-->  Done done done --> D --> 11
    })
    .catch((msg1) => {               //.catch() nhi krr skte chain
        console.log(msg1)          // --> byeee
        return 566
    })
    .then(function (mmm) {
        console.log(mmm)            //--> byee --> 566
        return "helloooooo"
    }).then((pp) => {
        console.log(pp)             //--> byee --> 566 --> helloooo
    })


/////////////////////////////////////////////////////////////////////////
let createUser = function(){
    setTimeout(function(){
        console.log("created account successfully")
    },2000)
}   
let createID = function(){
    setTimeout(function(){
        console.log("ID created")
    },3000)
}   
let getResult = function(){
    setTimeout(function(){
        console.log("result retrieved")
    },5000)
}   
getResult()
createUser()
createID()






