// map , set --->> datatypes 
// using map() we can define key here as any kind of datatype 

let pp = new String('hiiii')           //object
console.log(pp)

let mapOne = new Map()
console.log(mapOne)                 //empty obj
console.log(mapOne.size)

console.log('__________________ METHODS OF MAP _______________________________')
//-----> set , get, clr, has, keys, del, values, entries

mapOne.set("name","Kranti")
console.log(mapOne)

mapOne.set(true,"is bachelor")                       //--> boolean as key
mapOne.set(23,"age")                                 //-->> number as key
let sk = ["cypress","JS","C"]
mapOne.set(sk,"skills")                              //  --> array as a key
let fam = {mother:"mangal",father:"eknath"}
mapOne.set(fam,"parent")                              //--> object as key
console.log(mapOne)


//-------------------------------------------
console.log(mapOne.get(sk))                   //===> returns value 
console.log(mapOne.get(23))
console.log(mapOne.get(true))

//-----------------
// mapOne.clear()
// console.log(mapOne)

console.log(mapOne.has(fam))
console.log(mapOne.keys())
console.log(mapOne.entries())          //--> returns obj having keys,val in array

console.log(mapOne.delete(sk))         // -->> true 
console.log(mapOne)


//------------------------------------------------------------------------------
let mapTwo = new Map([
    ["question","answer"],
    ["What is Capital of Maharashtra","Mumbai"],
    ["What is my name","Kranti"],
    ["What is her fav color","Black"],
    ["What is the capital of Gujarat","Gandhinagar"]
])

for(let key of mapTwo){
    console.log(key)
}
for(let key of mapTwo.keys()){
    console.log(key)
}
for(let key of mapTwo.values()){
    console.log(key)
}
for(let key of mapTwo.entries()){
    console.log(key)
}


console.log("------------------------ SET METHODS ------------------------")
// set()-->> can't allow duplicate number/elems

let array = [23,43,22,40,23,67,40]
console.log(array)

setOne = new Set(array)         //--- removes duplicate elms
console.log(setOne)

console.log(Array.from(setOne))      //returns array from the set

console.log(setOne.has(43568))  
console.log(setOne.size)

console.log(setOne.delete(40))       //true
console.log(setOne)
console.log(setOne.keys())


for(let a of setOne){
    console.log(a)
}

for(let a of setOne.keys()){
    console.log(a)
}

for(let a of setOne.entries()){
    console.log(a)
}

for(let [a,b] of setOne.entries()){
    console.log(a,b)
}

//-------------------------
let setThree = new Set([[23,32],[30,4],[11,56]])
//console.log(setThree)
for(let [key,value] of setThree.entries()){
    console.log(key,value)            //key n value same hie hai
}

//                       0         1         0       1            0    1
let setTwo = new Set([["MH","Maharashtra"],["UK","uttarakhand"],["GA","GOA"]])
for(let [aa,bb] of setTwo.entries()){
   // console.log(aa[0],bb[1])
   // console.log(aa[0],bb[0])
   //console.log(aa[1],bb[0])
   console.log(aa[0],bb[2])
}



let add = setTwo.add(45)            //---------- adding number 
console.log(add)
console.log(setTwo)


 setTwo.add({frd:"priyanka",age:25,place:"pune"})           //-->> add object
console.log(setTwo)

setTwo.add(["kranti","mayuri","shital"])
console.log(setTwo)

setTwo.add(false)
console.log(setTwo)

