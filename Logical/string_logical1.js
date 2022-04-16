console.log(Number("4"))           //"4"===>> 4
console.log(Number("a"))      //Nan

//-------------- string Compression ----- 1st way -------------------------

// let input = "4a3b2c1d"        //--->> aaaabbbccd
// let result = ""

// for(let i =0 ;i<input.length;i++){                    //or  i+2

//     if(Number(input[i])){            //if(4)--->> true
//         result = result + input[i + 1].repeat(Number(input[i]))
//         //      ""     + "a".repeat(4)    ===>> aaaa
//         //  "aaaa"   + "b".repeat(3)      ===>> aaaabbb
//     }
// }
// console.log("\nThe compressed string is :",result)


//////// 2nd way //////////////////////////////////////////////////////////////////

let input = "4a3b2c1d"        //--->> aaaabbbccd
let result = ""
for (let i = 0; i < input.length; i++) {
    if (Number(input[i])) {
        for (let j = 0; j < Number(input[i]); j++) {
            result = result + input[i + 1]    //"aaaa " +"bbb"
            //"" + a -->a
        }
    }
}
console.log(result)


//------ count Capital letters from the string --------------------------------------------------------------
//-------- 1st way-------------
let quotes = "Worry Less Smile More"
let count = 0 ;
for(let i=0;i<quotes.length;i++){
    if(quotes[i] >= "A" && quotes[i] <= "Z"){
        //console.log(i)
        console.log("display capital letters :",quotes[i])             //??
        count ++ ; 
    }
}
console.log("\nCount of capital letters is : ",count)


//-------------- 2nd way ------------
let qq = "Just Learn And Grow"
let count1 = 0
for(let i =0;i<qq.length;i++){
   // console.log(qq.charCodeAt([i]))

   if(qq.charCodeAt(i)>= 65 && qq.charCodeAt(i) <=90){
       count1 ++ 
   }
}
console.log(count1)


//---------- print the string by removing space -------------------
let color = "Bl ue"
let printRes = ""
for (let i = 0; i < color.length; i++) {
    console.log(color[i])
    if (color[i] !== " ") {
        printRes = printRes + color[i]    //"" + B ==>> B
        // B + l ==>> Bl
    }
}
console.log(printRes)

//------------print it reveerse removing space -------------
let rev = ""
for (let i = 0; i < color.length; i++) {
    if (color[i] !== " ") {
        rev = color[i] + rev
    }
}
console.log(rev)


//--------------- Counting vowels seperately --------------------------------

let sir = "shivrAjmotegaOnkar"
let kk ={}

for(let i =0 ;i<sir.length;i++){
    if((sir[i] == "a") || (sir[i] == "e" ) ||
     (sir[i] == "i") || (sir[i] == "o") || (sir[i] == "u")){
    //     if((sir[i] == "a" || "A") || (sir[i] == "e" || "E" ) ||
    //  (sir[i] == "i" || "I") || (sir[i] == "o" || "O") || (sir[i] == "u" || "U")){

    if(sir[i] === "a" || "A" ){

        //console.log(sir[i])
    }
        if(kk[sir[i]]){

            kk[sir[i]] = Number(kk[sir[i]]) + 1
        }
        else{
            kk[sir[i]] = 1
     }
    
    }
}
console.log(kk)

/////////////////////////////////////////////////////////////////////////////////////////
 let state = "jammu And kashmir"
let vowels ={}

for(let i =0 ;i<state.length;i++){
    switch(state[i]){
        
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":

        if(vowels[state[i]]){
                  vowels[state[i]] = Number(vowels[state[i]]) + 1
        }else{
            vowels[state[i]] = 1
        }

    }
}
console.log(vowels)
















// let person = {
//         name:"nikhil",
//         age:24,
//         name:"prasad"
// }
// console.log(person)

// if(person['height']){
//     console.log("i am true")
// }
// else{
//     console.log("i am false")
// }




