// let and const 

// function --- function declation , function expression , arrow function 
// for , while , conditional statement (if and else) ternary 
// switch
// Arrays =======================>
// Objects ==> object liternal 
// destructure and struture
// functions (every other datatype)
// primitive and secondary 
// rest and spread
// ----------------------------------------------------------------->

let student = {
    fullName:"chinmay deshpande",
    age:12

}

// dot notation and bracket notation

// student['fullName']
// student.fullName

// student.age = 23
// student['age'] = 34

// student.lang = "hindi"
// student['lang'] = "english"

// delete student['lang']
// delete student.lang

// username + unique username

let students = [
    {
        fullName:"chinmay deshpande" // ["chinmay","deshpande"] "cd"
        // username:"cd"
    }
,
    {
        fullName:"poorva vyas"
    },

    {
        fullName:"sarika pansare"
    },
    {
        fullName:"chaitanya dani"
    },
    {
        fullName:"chaitanya de"
    },

    {
        fullName:"chaitanya djjj"
    }
]

students.forEach(function(el){

    let un = el.fullName.split(" ").reduce(function(acc,el){
        return acc + el[0] //c  ====> cd

    },"")

    un = isUnique(un)
    el.username  = un
})
console.log(students)

function isUnique(username){
    //console.log(username)
    for(let i = 0 ; i < students.length ; i++){
        if(students[i].username){
            if(students[i]['username'] === username){
                let updated =  username+username
                return  isUnique(updated)
            }
        }
        else{
            return username
        }

    }

}

// rest  parameter------------------------------>
//           0  1  2  3
let array = [22,33,44,55]
console.log(array)

// [11,22,33,33,44,55,66,77,88,9,900,0,88,99,00,223,44,55,66,77]
// rest operator 

function sumAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}

let aaa = sumAll(11,22,33,33,44,55,66,77,88,9,900,0,88,99,00,223,44,55,66,77)
console.log(aaa)
function above(a,...arr){
    console.log(arr)
    console.log(a)

    return arr.filter(function(el){
        return el > a
    })
}

let aaaa = above(18,11,22,33,33,44,55,66,77,88,9,900,44,88,99,44,223,44,55,66,77)
let aaaaa = above(30,11,22,33,33,44,55,66,77,88,9,900,44,88,99,44,223,44,55,66,77)
console.log(aaaa)
console.log(aaaaa)

// spread operator 

let transactions = [22,44,55,66,77,88,99,99]
function lastFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
lastFive(transactions[0],transactions[1],transactions[2],transactions[3],transactions[4])
lastFive(...transactions)


// 1,2,3,4 ====>  ...arr (rest)
// [1,3,4,5] ===>  ...arr(spread)

// students.map(function(el){

//     if(el.username == username){

//     }


// })




// Program One 
// Remove the duplicate elements from the array 

let numbers = [22,33,4,11,22,33,44,55,66]
//expected output :- [22,33,4,11,44,55,66]



// /----------------------------------------------------/
// // Program two 
// // Find the min and max number from the given array
// let finMaxMin = [-199,22,33,44,11,22,33,-300,11,22]
// // expected Output :-  
// //Max : 44
// //Min : -300


// /----------------------------------------------------/
// // Program three
// // Reverse the string from the array 

// let name = "chinmay"
// //expected output : - "yamnihc"




// /----------------------------------------------------/
// // Program four
// // Find the largest word from the string
// let sentence = "i am learning javascript"
// //expected output : - "javascript"




// Program five 
// Print first 10 even number 
// expected output : - 2,4,6,8,10,12,14,16,18,20





// let calbirthYear = function(el){
//     return 2021 - el 
// }
// //let add = calBirhtYear(20)
// //console.log(add)
// function printValue(el,fn){

//     // let fn = function(el){
//     //     return 2021 - el 
//     // }
//     // el --- 2022

//     let age = fn(2021-el)
//     return age
// }
// let rrr = printValue(2022,calbirthYear)
// console.log(rrr)



let numbers = [22,33,44]  // 24,35,46

function printArray(arr,fn){
    let newArray = [] // [24,35,46]
    for(let i = 0 ; i < arr.length;i++){
       let newElement = fn(arr[i])
       newArray.push(newElement)
    }
    return newArray
}
let addTwo = function(el){
    return el + 2
}

let mulTwo = function(el){
    return el * 2
}



let rrrrr = printArray(numbers,addTwo)
console.log(rrrrr)// [24,35,46]

let rrrrrr = printArray(numbers,mulTwo)
console.log(rrrrrr)

// rest operator 

function add(...people){
    console.log(people)

    let total = people.reduce(function(pre,next){
            return pre + next
    },0)

    return total
}
let totalA = add(1,2,2,3,4,55,5,66,22,33,44,55,66,77,11,22,33)
console.log(totalA)


//let filterPeople = [18,33,44,55,55,62,23,44,15,17,66]


function filterPeople(a,...b){
    let nn = b.filter(function(el){
        return  el > a
    })
    return nn
}

let jjj = filterPeople(18,33,44,55,55,62,23,44,15,17,66)
let jjjk = filterPeople(30,33,44,55,55,62,23,44,15,17,66)
console.log(jjj)
console.log(jjjk)

let transactions = [11,22,33,44,55,66,77,88]



function addFirstFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
addFirstFive(...transactions)

//addFirstFive(transactions[0],transactions[1],transactions[2],transactions[3],transactions[4])

//12,3,4,55,6,66,66 =====>  ...reset operator
//[33,44,5,6,77] =======>  ... spread opertar


let person = {
    age:10,
    rollNo:20,
    mark:[22,44,55]
}


function printObj({age,...b}){

    console.log(b)
    console.log(age)


}
printObj(person)



/*   ------------------------   */
function additiona(...arr){
     let sum = arr.reduce(function(acc,el){
         return acc + el
     },0)   

     console.log(sum)
}

additiona(12,3)
additiona(12,13,14,14,15,15)
additiona(12,23,44,55,6,6,77,88,88,99)
// /--------------------------------------/

let transactionsA = [22,33,44,55,66,77,88]
function addFive(a,b,c,d,e){

    console.log(a+b+c+d+e)

}
//addFive(transactionsA[0],transactionsA[1],transactionsA[2],transactionsA[3],transactionsA[4])
addFive(...transactionsA)

let student = "ram"
let students = ["chinmay","ram","sham","ganesh","sarika"]
let r = [student,...students]
console.log(r)
students.unshift("poorva")
console.log(students)
let f = [...students,student]
console.log(f)

/*        */

let array = [1,2,3,4]
let arrayB = [5,6,7,8]

let baa = arrayB.reduce(function(acc,el){

    return acc.concat(el)

},array)

console.log(baa)

// /-------------------------------------/

// let bar = arrayB.reduce(function(acc,el){
//     console.log(acc)
//     return acc.push(el)

// },[])

// console.log(bar)

/*  spread */


array = [1,2,3,4]
arrayB = [5,6,7,8]
console.log([...array,...arrayB])


// /----------------------/


let obj1 = {foo:"bar",x:"42"}
let obj2 = {foo:"biz",y:"13"}

let ray = {...obj1,...obj2}
console.log(ray)


let personV = {
    firstName:"chinmay deshpabde",
    age:23,
    skills:["python","javascript"],
    age:34
}

function printObj({firstName,...personC}){

    console.log(firstName)
    console.log(personC)
    
}
printObj(personV)


//------------------------------------->


let arrNames = ["sarika","Poorva","Ram"]
let arrTwos = ["Ram","Rajesh","Sunil"]

let [aa,bb,cc,dd,ee,rr,tt] = [...arrNames,...arrTwos] 
console.log(rr)

let ra = [11,22,33,44]
let j = [33,44,55,66]


function addAll(...aarr){
    let total = aarr.reduce(function(acc,el){
        return el+acc
    },0)

    console.log(total)
}
addAll(...ra,...j)
//console.log(typeof [...ra,...j])

















