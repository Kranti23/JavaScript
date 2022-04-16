//----- check whether the word is there or not in the string
let string = "Priyanka is my friend";
// let userInput = "my";

//    if(string.includes(userInput)){
//        console.log("word found")
//    }else{
//        console.log("Not found")
//    }

// let userInput = prompt("Enter the string")
// if (string.includes(userInput)) {
//     console.log('string matches')
// }
// else {
//     console.log('not matches')
// }


//Program-2------>> removes spaces in between string

//console.log(string.split(''))
// let jj = string.split('')
// console.log(jj.join(''))
//console.log(string.indexOf('my'))

let frd = "Priy euu"
let printRes = ""
for (let i = 0; i < frd.length; i++) {
    if (frd[i] !== " ") {
        printRes = printRes + frd[i]
    }
}
console.log(printRes)


// Program 3 --->> check palindrome or not 

let input = "papap";
let result = "";

let inputLen = input.length
//console.log(inputLen)
for (let i = 0; i < input.length; i++) {
    result = input[i] + result
}
//console.log(result)
// if (result === input) {
//     console.log('it is palindrome')
// }
// else {
//     console.log('not a palindrome')
// }

let revLen = result.length
console.log(revLen)

if(revLen === inputLen){
    console.log('it ia palindrome')
}
else{
    console.log('not palindrome')   
}









