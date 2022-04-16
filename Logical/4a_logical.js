
let random = [22, 34, 16, 45]
let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function multiUsable(array, funct) {        //generic funct usable for utility functns-->>coupled funct
    let newOne = []
    for (let i = 0; i < array.length; i++) {
        let newElem = funct(array[i])
        newOne.push(newElem)
    }
    return newOne 
}


//---- utility functions defined for passing as a paraemert to generic function -----------------------------

let adding = function (el) {
    // return el + 4 ;
    console.log("Print values after addition: ", el + 4)                          //printed one by one 
}

let tenTable = function (el) {
    return el * 10
}

multiUsable(random, adding)
// let op = multiUsable(random,adding)
// console.log(op)                                        // printed as array   [26,38,20,49]
let tt = multiUsable(table, tenTable)
console.log("\nTable of 10 :", tt)

let birthYear = (el) => {
    return 2022 - el
}
let rrr = multiUsable(random, birthYear)
console.log("\nDisplay birthyears from array of random : ", rrr)

let arr = [1993, 1999, 2000, 1973]
let calAge = function (el) {
    return 2022 - el
}
let age = multiUsable(arr, calAge)
console.log("\nCalculated ages from arr : ", age)

let percentage = function (el) {
    return el * 0.20;
}
let pppp = multiUsable(random, percentage)
console.log("\nTwenty percent of each elem : ", pppp)




console.log("\n\n------------------- Concatenation -----------------------------")

let num = [222, 364, 67, 818]
let kk = [11, 69, 23, 47]

let concatenation = function () {
    let bb = kk.reduce(function (acc, el) {
        return acc.concat(el)
    }, num)
    console.log("\nDisplay result : ", bb)
}
let Concated = multiUsable(kk, concatenation)
console.log("\n\nConcated array is :", Concated)



//------------- Display Unique Username ---------------------------------------------
// Username + uniqueUsername
let friends = [
    {
        fullName: "Nikhil Kichambare",   //--->> "NK"
        ht: 160
    },
    {
        fullName: "Kranti Chavan",
        ht: 155
    },
    {
        fullName: "Prasad Mahalpure",
        ht: 155
    },
    {
        fullName: "Kunal Chaure",
        ht: 159
    },
    {
        fullName: "Kratik Chauhan",
        ht: 160
    },
]

friends.forEach(function (el) {
    let un = el.fullName.split(" ").reduce((acc, el) => {
        //["Nikhil","Kichambare"]
        return acc + el[0]          //_N--->> NK
        //return el[0] + acc        ---->>_KN
    }, "_")

    un = isUniqueUsername(un)
    el.userName = un      //adding userName property to obj
})
console.log("\n")
console.log("Display UniqueUsername of friends here : ",friends)

function isUniqueUsername(userName) {
     console.log(userName)
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].userName) {
            if (friends[i]['userName'] === userName) {
                //let updatedUn = userName + userName
                let updatedUn = userName + "_@"
                return isUniqueUsername(updatedUn)
            }
        }
        else {
            return userName;
        }
    }
}




//console.log("\n\n------------------- Concatenation -----------------------------")

// let num = [222, 364, 67, 818]
// let kk = [11, 69, 23,47]
// //[222,364,67,818,11,69,23,47]

// //multiUsable(kk,concat)
// function concat(no){
//    let rrrr = kk.reduce((acc,el)=>{      //[222,364,67,818],11
//       // console.log("kranti")
//       //return acc.concat(no)           // [num].11   
//     },num)                                         
//     console.log("result is : ",rrrr)
//  return rrrr
// }

// function multiUsable(array, funct) {               //generic funct usable for utility functns-->>coupled funct
//     //let newOne = []
//     //console.log(kk)
//     for (let i = 0; i < array.length; i++) {
//      let newElem = funct(array[i])   // [kk]      
//        console.log(newElem)
//         //newOne.push(newElem)
//     }
//    // return newOne
// }
// // let oppp = multiUsable(kk,concat)
// // console.log(oppp)
// multiUsable(kk,concat)


