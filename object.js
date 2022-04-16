
let friend = {
    name: "Nikhil",
    lastName: "Kichambare",
    place: "Pune",
    age: 24,
    //prop:"value"
}

//retrive
console.log(friend)
console.log(friend.name)
console.log(friend['place'])             // use single quote for bracket notation

//update
friend.name = "Kunal"
friend['place'] = "amravati"

// add --> create
friend.height = 5.67
friend['lang'] = "German"

//delete
delete friend.place
console.log(friend)


//------------------- Logical questions  ---------------
// dot notation not allowed in loop only bracket notation

let student = {
    fullName: "Kranti Chavan",
    marks: 92,
    skills: ['python', 'java', 'anchor', 'c++'],
    parent:{
        father:"Eknath",
        mother:"Mangal"
    }

}

// for (let key in student) {
//     // console.log(key)          // property print hoke milegi
//     console.log(key, student[key])
// }

student.skills.unshift("cypress")            //add or push
student.parent.sister = "Simran"           //add
student['parent']['father'] = "Eknath"
console.log(student)

//-----------------------------------------------------
let person = [
    {
        fullName: "akash",
        marks: 56,
        skills: ['java', 'anchor', 'c++']

    },
    {
        fullName: "prasad",
        marks: 42,
        skills: ['python', 'java', 'c++']

    },
    {
        fullName: "Kanchan",
        marks: 28,
        skills: ['python', 'java']

    }]

    for(let i =0;i<person.length;i++){
        let obj = person[i]
        for(let key in obj){
            console.log(key,obj[key])
        }
    }

    //retrive
console.log(person[2]['fullName'])
console.log(person[0].skills)
console.log(person[1].skills[1])

person[0]['skills'].push('cypress')   //add
console.log(person[0])

person[2].fullName = "Prerna Chavan"      //update
console.log(person[2])

console.log(person[1]['skills'].length)




