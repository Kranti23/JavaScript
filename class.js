//object literal
let kranti = {
    fullName: "Chavan Kranti",
    age: 23,
    city: "Tuljapur",
    skills: ["Js", "cypress", "telecommunication"]
}

for (let key in kranti) {
    console.log(key, kranti[key])
}

//---------- setting the properties outside the class ----------------------------
class Coep {
    name = undefined
    dept = undefined;
    elective = undefined
}

let college = new Coep()
console.log(college)
let campus = new Coep()
console.log(campus)

college.name = "College of Engineering Pune"
college.dept = "ENTC"
college['elective'] = "Control Systems"
college.hod = "Dr.Mahajan"
console.log(college)


//---------------------- setting values using Constructor ------------------

// CONSTRUCTOR --->> alwys returns object only
//            ---->>setting values at the time of creating obj 

class Minskole {
    constructor(onr, brh, ar) {
        this.owner = onr
        this.branch = brh;
        this.area = ar
    }
}
let center = new Minskole("Chinmay Deshpande", "Kharadi", "West Mah")
console.log("\nIT coaching center in pune : ", center)

let coaching = new Minskole("Mrs.Deshpande", "Nagpur", "Vidarbh")
console.log("\nNew branch of Minskole: ", coaching)

center['tools'] = { testing: 'cypress', devlopment: 'python' }
console.log(center)

////////////////////////////////////////////////////////////////////////

let sessions = [
    new Minskole("Shubhnagi", "Pune", "North"),
    new Minskole("Mayuri", "Nashik", "Khandesh"),
    new Minskole("Gaytri", "Tuljapur", "Marathwada")
]

console.log(sessions[0])

////// keys of all elemnts /////////////////////////////////////////////////////

sessions.forEach((el) => {
    for (let key in el) {
        console.log(key, el[key])
    }
})

let lang = ["C", "JS"]
sessions.forEach((el, index) => {
    el.lang = lang[index]
    //  console.log(el)
    //  el['lang'] = lang[index]
})
console.log(sessions)


//------ SET FUNCTION --------------------------------------

class Family {
    motherName(mn) {
        this.mom = mn
    }

    fatherName(fn) {
        this.dad = fn
    }

    setFamTree(pl){
        this.place = pl
    }

}

let fam = new Family()
console.log("\n\n Display Family:",fam)

fam.fatherName("Eknath Chavan")
console.log(fam)

fam.motherName("Mangal")
console.log(fam)

fam.setFamTree("Nampur")
console.log(fam)

