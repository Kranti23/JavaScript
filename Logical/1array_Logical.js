// TO remove duplicate values from array
//counting even odd using resduce
//reverse string
//count the no of vowels from string
//count no of characters inside array
//exact index of elems in array
//average of all elements

// remove duplicate elem from array 
// ---------------------- 1st way using includes ------------------
let a = [22, 33, 56, 22, 78, 12, 33]
let b = []

for (i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {

        b.push(a[i])
    }
}
console.log(b)


//------------------ 2nd way using indexOf ----------------------------
// let x = b.indeOf(222)
//console.log(x)                   //-1
let aa = [22, 33, 56, 22, 78, 12, 33]
let bb = []

for (let i = 0; i < aa.length; i++) {
    if (bb.indexOf(aa[i]) < 0) {
        // -1<0 ,
        bb.push(aa[i])
    }
}
console.log(bb)

//------------------ 3rd way using filter -----------------------
let aaaa = [22, 33, 56, 22, 78, 12, 33]
let bbbb = []

let op = aaaa.filter((el, index) => {

    return aaaa.indexOf(el) == index
})
console.log(op)


//----------- TO FIND DUPLICATE ---------------
let arr = [11, 22, 33, 44, 55, 66, 77, 33, 46, 11, 22]
let array = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i+ 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i])

        }
    }
}
console.log(array)


//--------------------------------------------------
let x = [1, -33, 66, 78, -32, 11, 4 - 2]
let y = []

for (let j = 0; j < x.length; j++) {
    if (x[j] > 0) {
        y.push(x[j])
    }
}
console.log(y)


let opp = x.filter((el) => {
    return el < 0
})
console.log(opp)


let ray = x.filter(function (el) {
    return el > 0
}).reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(ray)

//------------------------------------------------
let h = [22,33,44,-76,-23]
let kk = []
h.map((el,index)=>{
    if(el>0){
        kk.push(el)
    }
})
console.log(kk)


h.forEach(function(el,index){
    if(el > 0){
        kk.push(el)
    }

})
console.log(kk)

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
// ------------ Convert number into array ----------------------------

let num = 123456
function convertor(para){
    return Number(para)
}
let arrNum = Array.from(String(num),convertor)
console.log(arrNum)



//console.log(Array.from(String(num)))


