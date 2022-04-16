
let friend = [
    {
        name: "Nilesh Chavan",
        age: 17,
        rollNumber: 45,
        skills: ["acting", "cricket", "football", "art"],
        marks: [67, 89, 96, 78, 89],
        city: "nashik",
        isAdult: false,
        birthYear: 2006
    },
    {
        name: "Nikhil Kichambare",
        age: 24,
        rollNumber: 89,
        skills: ["friendly", "photoholic", "coder"],
        marks: [90, 67, 95, 99, 83],
        city: "Pune",
        isAdult: true,
        birthYear: 1998
    },
    {
        name: "Rutuja Biradar",
        age: 24,
        rollNumber: 89,
        skills: ["cooking", "singing", "Art"],
        marks: [90, 67, 99, 88],
        city: "Udgir",
        isAdult: true,
        birthYear: 1998

    },
    {
        name: "Kranti Chavan",
        age: 23,
        rollNumber: 11,
        skills: ["c", "java", "Cypress", "html"],
        marks: [94, 90, 82, 99, 87],
        city: "Pune",
        isAdult: true,
        birthYear: 1999
    }
]

//people belong to pune city
console.log("filtered object")

// ------------------ case 1 --------------------------------
let aa = friend.filter(function (el) {
    return el.city == "Pune"
})
aa.forEach((el) => {
    console.log(el.name)

})

// ------------------ case 2  ------------------------
friend.filter((el) => {
    return el.city === "Pune"
}).forEach((el) => {
    console.log(el.name)
})


//------------- name of those whose age is greater than 22 ----------
friend.filter((el) => {
    return (el.age > 22)
    //return (2022 - el.birthYear > 22)
}).forEach(function (el) {
    console.log(el.name)
})


//---------  average age of all students -----------
let avgAge = friend.reduce((acc, el, index) => {
    return acc + (2022 - el.birthYear)
    //return acc + (el.age)
}, 0) / friend.length
console.log(avgAge)


// ------------ average marks of all friends -------------------
let avgMarks = friend.reduce((acc, el) => {
    return acc + el.marks.reduce(function (acc, el) {
        return acc + el
    }, 0)
}, 0) / friend.length
console.log(avgMarks)


// ----------- total number of skills with name ---------
//chinmay deshpande: 4
friend.forEach(function (el) {
    console.log(`${el.name}: ${el.skills.length}`)
})


//---------------- people belong to pune and includes java ---------
friend.filter((el) => {
    return el.city == "Pune" && el.skills.includes('java')
}).forEach((el) => {
    console.log(el.name)
})


//----------------- same value for age and rollnumber --------------
friend.filter((el) => {
    return 2022 - el.birthYear === el.rollNumber
}).forEach(function (el) {
    console.log(el.name)
})


//------------------- every person is above 20 -------------
let pp = friend.every((el) => {
    return 2022 - el.birthYear > 20
})
console.log(pp)

pp === true ? console.log('Every one is above 20') : console.log('fail')


//----------------- print name and length of skills ------------
friend.forEach((el) => {
    console.log(`${el.name}: ${el.skills.length}`)
})


//------------- add html to skills of all frds -----------------------------
friend.forEach((el) => {
    el.skills.push("HTML")
})
console.log(friend)

//add property lang = english 
friend.forEach(function (el) {
    el.lang = "English"
})
console.log(friend)

//------------- age above 23 ------------
let arrrr = friend.filter((el) => {
    return el.age > 23
})
console.log(arrrr)


// ------------ adding colleges to each elem -----------

friend.forEach((el) => {
    if (el.name == "Nilesh Chavan") {
        el.clg = "KK wagh"
    }
    else if (el.name == "Nikhil Kichambare") {
        el.clg = "Singhgadh"
    }
    else {
        el.clg = "COEP"
    }
})
console.log(friend)

// same using array or switch case
let clg = ["KK Wagh", "Singhgadh", "COEP"]
friend.forEach((el, index) => {
    el.clg = clg[index]
})
console.log(friend)


// print obj having city pune and skill java

let www = friend.filter((el) => {
    return el.city == "Pune" && el.skills.includes("java")
})
console.log(www)

//----------- add username in each obj -------------
//ex:kranti chavan ---> ck
friend.forEach((el) => {
    let userName = el.name.split(" ").reduce((acc, el) => {
        //   ["nilesh","Chavan"]
        return el[0] + acc     //ck
        return el[0] + acc     //kc
    }, " ")
    console.log(userName)
    el.userName = userName
})
console.log(friend)


//------------- to display Unique Username ---------------------------------------------
// Username + uniqueUsername
let students = [
    {
        fullName: "Chinmay Deshpande",   //--->> "CD"
        ht: 156
    },
    {
        fullName: "Kranti Chavan",
        ht: 156
    },
    {
        fullName: "Prasad Mahalpure",
        ht: 156
    },
    {
        fullName: "Kunal Chaure",
        ht: 156
    },
    {
        fullName: "Kratik Chauhan",   //--->> "CD"
        ht: 156
    },
]

students.forEach(function(el){
    let un = el.fullName.split(" ").reduce((acc,el)=>{
        return acc + el[0]    //c---->> cd
    },"")

    un = isUniqueUsername(un)
    el.userName = un      //adding userName pro to obj
})
console.log(students)

function isUniqueUsername(userName){
   // console.log(userName)
   for(let i =0 ;i<students.length;i++){
       if(students[i].userName){
           if(students[i]['userName'] === userName){
               let updatedUn = userName + userName
               return isUniqueUsername(updatedUn)
           }
       }
       else{
           return userName;
       }
   }

}





