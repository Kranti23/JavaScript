//array is also Object
let names=["Kranti","Nikhil","Gayatri","Pranali"]
for(let i=0;i<5;i++){
    //console.log(i)
    console.log(names[i])
}

//retrive
console.log(names[1])

//update 
names[0] = "kanchan"

//del
names.shift()
names.pop()
names.splice(1,2)

//add
names.push()
names.pop()
names.splice(1,2,"ref","ref2","ref3")

//Property
let pp = names.length
console.log(pp)
let city = ['Pune','mumbai','delhi']

let a = city.push('bhopal','Nashik')                         // returns new length of array
console.log(a)
console.log(city)            //array 

let b = city.unshift('Varanasi')
console.log(b)                     // adds the elem to start / at the index 0

let c = city.pop()              // removes the elm from last 
console.log(c)                  //returns the renoved elem

console.log(city.shift())         //removes the elem from first n returns it
console.log(city)

console.log('---------------------------------------------------------')

let alpha = ["a",'b','c','d']

console.log(alpha.indexOf('b'))        // return indx if ele else it will return -1
console.log(alpha.indexOf('f'))

console.log(alpha.includes('e'))       // return true if ele is found else false
console.log(alpha.includes('a'))         

// slice ---->> arrname.slice(start position,endpoint(not inclusive))
// action-->>divides the array based on index 
//return-->>array

//              -4     -3      -2      -1
let country=['India','China','Japan','USA']
let d = country.slice(1,3)
console.log(d)
console.log(country)

console.log(country.slice(0,1))
console.log(country.slice(-3,-1))
console.log(country.slice(-1,-3))        // ulta nhi work krta --- return blank array 

console.log("======================================================")

//----------------------------------------------------------------------------

let birthYear=[2000,1998,1990,1999]              

let calAge=[]                            //[22,20,32,23]
for(let i=0;i<birthYear.length;i++){

    //console.log(2022-birthYear[i])
    let agee=2022-birthYear[i]
    calAge.push(agee)
}
console.log(calAge)

//map() -------------> works wid every elm of aray
//return ---> new array

let zz=birthYear.map(function(el,index,arr){
console.log(el,index,arr)
    return 2022 - el
})
console.log(zz)


let num = [11,22,45,66,33]
let cc = num.map((el)=>{
    return el + 2 ;
})
console.log(cc)                 


let agess = [44,56,77,88,44,33]
let above60=[]

for(let i=0;i<6;i++){
console.log(agess[i])

if(agess[i]>60){
    above60.push(agess[i])
}
}
console.log(above60)

// filter()  ---->> filter out elem based on condition 
// return ----> new array

let ddd = agess.filter((el)=>{
return  el > 60
})
console.log(ddd)


let marks =[11,45,24,56]
let sum=0

for(let i=0;i<marks.length;i++){
    sum = sum + marks[i]
    //0+11 = 11
    //11+45 = 56
    //56+24 = 80
}
console.log(sum)

// reduce() --->> adds up evey elem 
//return single value

let abbb = marks.reduce(function(acc,el,index,arr){

    return acc + el    
},0)
console.log(abbb)

/* 
 map( ) ------> works wid every elm of arr $ returns arry
 filter() ---> filter outelem based on condition & retuns arry
 reduce() ---> adds up evry elm of arr & returns single value
 for Each() ---> works wid evry elem of array returns nothing
*/

let x =["chinmay","nikhil","poorva"]
for(let i =0;i<x.length;i++){
    console.log("welcome " + x[i])
}


x.forEach((el,index,arr)=>{
    console.log("welcome " + el)
})

//------------------
let aaaaa = [3,5,7]
let bbbb = [2,6,9]

let op = aaaaa.map((el,index)=>{
return el * bbbb[index] 
})
console.log(op)

console.log("-----------------------------------------------------------")
let jj = [22,33,11]

let opp = jj.map(el=> el*2)
console.log(opp)

console.log(jj.filter(el=> el>20))

console.log(jj.reduce((acc,el)=> acc+el,0))


//--- every(),some(),find(),findIndex().foreach()
let summ = [22,44,56,11,77,99,4,34]
let cccc = summ.every((el,index,arr)=>{
    return el > 20

})
console.log(cccc)

let ppp = summ.some((el)=>{
    return el > 20
})
console.log(ppp)

let find = summ.find(function(el){
return el > 30
})
console.log(find)

let ii = summ.findIndex((el)=>{
    return el > 30
})
console.log(ii)

//=====================================================================

let xx = ["pune",'mumbai','nashik',"Nandurbar"]
console.log(xx.reverse())

let y = xx.sort()
console.log(y)

//----------->> splice() ---remove elem 
let fruitss = ['tomato','papya','cherry','mango','apple']

//fruitss.splice(index,noOfElementstoDEleted,rel,rel,rel)

let gg = fruitss.splice(1,3)           // starting wid index 1 containing elmts 3 
console.log(gg)

console.log(fruitss.splice(-3))
console.log(fruitss)

console.log(fruitss.splice(2))

//----------------------------
let info =["chimnay","deshpande","7709192441"]
let wer = info.join(' @ ')
console.log(wer)

//-------------
//             0        1           2 
let arr = [[11,22,44],[33,67,88],[1,3,5]]
///         0 1 2       0 1 2     0 1 2 
console.log(arr[2][2])

let iii = arr.flat()
console.log(iii)

// let ijj = arr.fill('a',1,4)
// console.log(iij)


// concat
 let hat = [22,33,66]
let bat = [55,66,77]
let rrrr = hat.concat(bat)
console.log(rrrr)

//console.log(bat.conacat(hat))

console.log(...hat,...bat)                // spread
console.log([...hat,...bat])



