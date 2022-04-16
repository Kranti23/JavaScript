
// function declaration
 
function random(a,b){
  return a+b;    
}
let op = random(2,55)
console.log(op)

let x = 10 + 56 
// function expression 

let mul = function(x,y){
      console.log(x * y)
}
mul(3,7)


// arrow function 

let mul2 = (x,y) =>{
    console.log(x * y)
}
mul(3,12)


let mul3=(x,y) =>console.log(x * y)
mul3(3,7)