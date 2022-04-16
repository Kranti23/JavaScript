let city = "Nashik"
for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}
console.log("------------ Reversed string ----------------")
for (let j = city.length - 1; j >= 0; j--) {
    console.log(city[j])
}

// .length -->> property
//method -->> action and return type
let friend = "Nikhil"
console.log(friend.toUpperCase())
console.log(friend.toLowerCase())

let aa = friend.toLowerCase().length         //chaining
console.log(aa)

let fruit = "Watermelon"
console.log(fruit.includes('wa'))
console.log(fruit.indexOf('e'))

console.log('----------------trim -------------------------')
let place = " Kasol "
console.log(place.trimStart().length)
console.log(place.trimEnd())
console.log(place.trim().length)

//charAt() , charCodeAt() -->> gives ascii value of character 
let gana = "music"
let gnn = gana.charAt(1)
console.log(gnn)

let cca = gana.charCodeAt(3)        //gives ascii value of i
console.log(cca)



//---------- to check the word is there in string or not -----------------------------------------------------------------------
// let names = "nikhil kranti shweta prasad akash vedu"
// let userInput = "prasad"

// if (names.includes(userInput)) {
//     console.log("friend is in the list")
// } else {
//     console.log("not in the list")
// }

// //---------- OR -------------------------------------------
// if (names.indexOf(userInput) >= 0) {
//     console.log("yes there")
// } else {
//     console.log('not there')
// }



// //_________________________________________________________________
// let me = "I am learning javascript"
// console.log(me.split(' ').join("-"))


// //------------------ count vowels in the string -------------------------------------
// let string = "I am learning cypress Automation"
// let count = 0

// // for (let i = 0; i < string.length; i++) {
// //     //console.log(string[i])
// //     if (string[i] == "a" || string[i] == "e" || string[i] == "i" || 
// //     string[i] == "o" || string[i] == "u") {

// //         count += 1;
// //     }
// // }
// // console.log(count)


// //-------------using switch -------------------------
// for (let i = 0; i < string.length; i++) {
//     switch (string[i]) {

//         case "a":
//         case "A":
//         case "e":
//         case "E":
//         case "i":
//         case "I":
//         case "o":
//         case "O":
//         case "u":
//         case "U":
        
//         count += 1 ;
//         break;
//     }
// }
// console.log("\t\nNumber of vowels :",count)


// /////////////////////////////////////////////////////////////////////////////////
let demo = "a".repeat(4)
console.log(demo)

let ppp = "23"
console.log(ppp.repeat(2))



// // let meee = "krantichavan"
// // let rrr = meee.split("").filter(function(el){
// //     return el == "a" || el == "e"  || el == "i"  || el == "o"  || el == "u"
// // })
// // console.log(rrr)


// let a = "5956";
// let b = "90";
// let c = "87"      

// if(a<b || a<c){
//      console.log("a is smallest")
// }


//------------- slice(), substring() ---------------------
let stt = "nikhil"
//       0 1 2 3 4 5 
//       n i k h i l 
//      -6-5-4-3-2-1

let iii = stt.slice(5,2)           //1st argu greater thn 2nd won't work here 
console.log(iii)                   //blank string 

console.log(stt.substring(4,0))     //swap the two argu n performs 

let jj = stt.substring(-5,-2)      // -->>doent work with negative no as an argument   
console.log(jj)                    //blank string

console.log(stt.slice(-3,-1))
 //console.log(typeof(jj))

console.log(stt.slice(4))
console.log(stt.substring(2))

console.log(stt.slice(3,0))       //blank


console.log("------------ INMUTUABLE ------------------------")
//---- doent work wid particular/single elm ------------------
let music = "travel"
console.log(music[1])

let music1 = "love"
music1[1] =  "oo"          //we cant chnge the single character of string 
console.log(music1)


/*
number + number ====> number
number + string ===> string
string + number ====> string
string + striong ===> number 
*/

let check = "Hello"
let x = 20
let y = 22

console.log(check + x + y)      //"hello" + 20 ==> "Hello20" + 22   ==>>"Hello2022"
console.log(check + y + x)
console.log(x+ y + check)

console.log(3 + "3")

console.log(`${9+9}`)


//-------------------------------------------------------------

let fav = "Do what you love, Love what you do..!!!"

let nnn = fav.replace("what","whatever")        
console.log(nnn)


//-------- defining function to replace all occurnce of words with new word -------------

function replaceAll(sentence,word,repWord){
    let array = sentence.split(' ')
   console.log(array)
   let resss =  array.map(function(el){
       if(el == word ){
           return el = repWord ;
       }
       else{
           return el
       }
    })

    console.log("\n",resss.join(' '))
}
replaceAll(fav,"what","whatever")


/////////////////////////////////////////////////////////////////////
let qqq = "i am rashi and i like to dance"
let se = qqq.search("ras")             //returns index of first character/occurence
console.log(se)
console.log(qqq.search("man"))        //returns -1

console.log(qqq.match("to"))          //arry of info

let mattt = qqq.match("new")            
console.log(mattt)                    //null



// function add (x,y){

//     console.log(x+y)
//     return [23,56,90,12,34]
// }

// let hhhh = add(20,34)
// console.log(hhhh)

// console.log(hhhh[2])






