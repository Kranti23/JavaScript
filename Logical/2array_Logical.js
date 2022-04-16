
let sum = [11, 22, 99, 66, 55, 77, 66, 55, 11, 45, 66, 55, 12]
let count = 0
for (let i = 0; i < sum.length; i++) {
    if (sum[i] === 55) {
        count = count + 1
    }
}
console.log(count)


//--------------------------- program 1 ----------------------------------------
let word = ['b', 'o', 'o', 'k']
let result = {}
console.log(result)

// {
//     b:1,
//     0:2,
//     k:1
// }

for (let j = 0; j < word.length; j++) {
    if (result[word[j]]) {
        result[word[j]] = result[word[j]] + 1
    }
    else {
        result[word[j]] = 1
    }
}
console.log(result)

//--------------------- program 2 ---------------------------------------------
// {
//     'b':1,
//     'o':2,
//     'k':3
// }

let words = ['b', 'o', 'o', 'k']
let resultt = {}
let countOfb = 0
let countOfo = 0
let countOfk = 0

for (let i = 0; i < words.length; i++) {
    let rrr = words[i]
    switch (rrr) {
        case 'b':
            countOfb++;
            break;

        case "o":
            countOfo++;
            break;

        case 'k':
            countOfk++;
            break;
    }
}
resultt[word[0]] = countOfb
resultt[word[1]] = countOfo
resultt[word[2]] = countOfo
resultt[word[3]] = countOfk
console.log(resultt)


//===============================================================
let number = {
    a: 3,
    b: 4,
    c: 8,
    a: 7                                       // updated value will be printed for a 
}
console.log(number)
//console.log(number['b'])                    // 4
//console.log(number['a'])                   // 7

for (let key in number) {
    number[key] = number[key] * number[key]
}
console.log(number)

//-------------------------------------------------------
let a = [22, 33, 44, 55, 66, 17, 11, 99, 11]
let evenCount = 0
let oddCount = 0

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        evenCount++
    } else {
        oddCount++
    }
}
console.log('evenCount is : ' + evenCount)
console.log('oddCount is : ' + oddCount)
//-----------------------------------------------------------------------
for (let i = 0; i < a.length; i++) {
    a[i] % 2 == 0 ? evenCount++ : oddCount++
}
console.log(evenCount, oddCount)

//-------------------------------------------------------------------------------
let evenCount2 = a.reduce(function (acc, el) {
    let a = el % 2 === 0 ? 1 : 0      //T:F
    //console.log(a)
    return acc + a
}, 0)
console.log(evenCount2)

let oddCount2 = a.reduce((acc, el) => {
    let aa = el % 2 !== 0 ? 1 : 0
    return acc + aa
}, 0)
console.log(oddCount2)


//------------------------ program 2 ----------------------------------

let b = ["red", "red", 'green', "blue", "red", "blue", "red", "blue", "orange", "green", "orange"]
let op = {}

for (let i = 0; i < b.length; i++) {

    if (op[b[i]]) {
        op[b[i]] = op[b[i]] + 1
    } else {
        op[b[i]] = 1
    }
}
console.log(op)

for (let key in b) {
    op[key] = Math.floor(op[key] / 2)
}

console.log(op)


//--------------- Counting num of vowels in string ----------------------------------------------------
let city = "Nashik"
let counter = 0
for (let i = 0; i < city.length; i++) {

    switch (city[i]) {
        case 'a':
            counter += 1
            break;
        case 'e':
            counter += 1
            break;

        case 'i':
            counter += 1
            break;

        case 'o':
            counter += 1
            break;

        case 'u':
            counter += 1
            break;
    }
}
console.log(counter)

//----------------------- Reverse string -------------------------------
//               012345
let firstName = "Kranti"
let rev = ""            //itnarK

for (let j = 0; j < firstName.length; j++) {
    //console.log(firstName[j])
    rev = firstName[j] + rev

    //K + "" ====> K
    //r + K  ====> rK
    // a + rK ====> arK
    // n + arK ====> narK
    // t + narK ===> tnarK
    // i + tnarK ===> itnarK
}
console.log(rev)

//_______________________________________________________________________

let me = "nikhil"
let reverse = ""
for (let i = me.length - 1; i >= 0; i--) {
    console.log(me[i])
    reverse = reverse + me[i]
}
console.log(reverse)

//----------------------- Printing index of element --------------------
//1st way
let people = ["nikhil", "prasad", "Kanchan", "rila", "kele"]

for (let i = 0; i < people.length; i++) {
    if (people[i] == "Kanchan") {
        console.log("index of Kanchan is : " + i)
    }
}

// 2nd way
let rrrrr = people.map(function (el, index) {
    if (el === "nikhil") {
        console.log(index)
    }
})

// 3rd way
people.forEach((el, index) => {
    if (el === "Kanchan") {
        console.log(index)
    }
})


//------------ print cities having length of 6 --------------------------
let cities = ["pune", "nashik", "mumbai", "nagpur", "amravati", "ajmer"]

for (let i = 0; i < cities.length; i++) {
    if (cities[i].length == 6) {
        console.log(cities[i])
    }
}

// using filter
let pppp = cities.filter((el)=>{
    return el.length == 8
})
console.log(pppp)


//--------------- Desturing Logical  ----------------------------------

let array = [23,45,66,78]
console.log(array[array.length-1])

let  [x,y,z,w] = array
console.log(x,y,z,w)

//------------------- print as a single array -----------------------
//              0         1         2
let arr = [[11,22,33],[78,45,18],[55,66,77]]
console.log(arr[1][2])
let oppp = arr.flat()
console.log(oppp)
console.log('--------------------------------------------')


// ------------------ Without using flat ------------------------------------------
let res = arr.reduce(function(acc,el){
    return acc.concat(el)   //[11,22,33].concat()
},[])
console.log(res)


//-------------Object -------------------------
let stud = {
    myName : " Kranti Chavan ",
    skills: ["java","cypress","drama"],
    parents:{
        father: " Eknath ",
        mother : " Mangal "
    }
}

let {myName,skills:[p,q,r],parents:{father:ft,mother}} = stud
console.log(myName)
console.log(ft)
console.log(mother)
console.log(r,q,p)

////////////////////
let {myName:pqqq , skills,parents} = stud
console.log(parents)
console.log(skills)
console.log(pqqq)

//---------------------------------------------------------------
let div = [
    {stud: " kranti " , guru : "Chinmay sir" ,sub: "Coding"},
    {stud: ' kranti C ' , guru : "Motegaokar sir" ,sub: "Chemistry"},
    {stud: " kranti_Chavan " , guru : "Siddharth sir" ,sub: "Physics"}
] 

let [h,i,j] = div
console.log(h,i,j)

let [ {guru:qq, sub:ss},{guru:ggg,sub:dddd},{sub,guru} ] = div
console.log(sub , guru)
console.log(ss)
console.log(dddd)


