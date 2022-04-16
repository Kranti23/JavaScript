
/substring of the string /     //-->> format of regular expression

let quotes = "Do what you love or LOVE what you do."
//let regExp = /love/                                 //---->> looks only for the first occurence
let regExp = /love/gi                                // ----->>looks globally and for insensitive cases

//methods of reg exp --->> exec(),test()

let aa = regExp.exec(quotes)                //1st time chlega toh only for first occurence
console.log(aa)                    

let bb = regExp.exec(quotes)               //2nd time looks globally n insensetive 
console.log(bb)           

let cc = regExp.exec(quotes)              //3rd time NULL cuz only two occurnces 
console.log(cc)                  

let dd = regExp.exec(quotes)              //again goes to 1st occurence 
console.log(dd)                    


let ppp = regExp.test(quotes)
console.log("\ndisplay true if occurs else false: ",ppp)         //returns true if substring is there

// let regExp2 = /Love/g
// let qqq = regExp2.test(quotes)
// console.log(qqq)                       //false


//--------- to stop execution after getting the regExp from string ---------------------------------------------------
//let regExp =/love/gi
result = regExp.exec(quotes)             
while(result){
    console.log(result)
    result = regExp.exec(quotes)

}



//methods of string 
//------- search() , match() , replace() -----------------------------------------------------------

let string = "Don't regret just Learn learn LEARN and grow."
let regExp3 = /LEARN/gi

let opp = string.search(regExp3)      //returns index of first occurence else -1
console.log("\nprinting index of searched elem:",opp)

let rr = string.match(regExp3)         //returns array of matched elms  else NULL
console.log("\ndisplay the matchable elems: ",rr)

let reg = /can do/gi
let aaaa = string.match(reg)            //NULL
console.log("\nmatchable elems: ",aaaa)           


let sss = string.replace(regExp3,"Earn")          //regExp replaced by new word in the string
console.log("\nprint the new string: ",sss)                                  //returns string








// //////////////////////////////////////////////////////////////
// //d = "Mcd 89886764654870902352309283454522134125632142465087543232"
// //cy.get(path["d^=Mcd *"])
// //cy.contains('/username/')
// //localhost:8000/username/chinmay0217
// //localhost:8000/username/*
// //let d = "chinmay" --->>string
// //let e = new String("chinmay")
// //let x = [1,2,3,4]
// //let ga = new Array(4)
// //let obj = {
// //     age:45,
// //       height:166
// // }
// //let aa = new obj()












