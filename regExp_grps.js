let friends = "Priyanka, Sheetal and Kranti will get job soon..!! job"
let regExp = /job/ig

////methods of regExp--->.
// let a = regExp.exec(friends)
// console.log(a)

// let b = regExp.exec(friends)
// console.log(b)

// let c = regExp.exec(friends)
// console.log(c)                             //null

// let d = regExp.exec(friends) 
// console.log(d)
// console.log("-----------------------------------------------------------------------------")

// let dd = regExp.test(friends)
// console.log(dd)

// // let pp =/will/ig
// let ee = regExp.test(friends)
// console.log(ee)

// let rr = regExp.test(friends)
// console.log(rr)

// let rrrr = regExp.test(friends)
// console.log(rrrr)


// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
let str = "Welcome to the world of Minskole"
let reg = /minskole/gi
let reg2= /RCC/gi

console.log(str.match(reg))      
console.log(str.search(reg))
console.log(str.search(reg))
console.log(str.search(reg2))
console.log(str.replace(reg,"Chemistry"))
console.log(str.replace(reg2,"Chemistry"))
console.log(str.match(reg2))        //null



//--------------- METACHARACTERS in REGULAR EXPRESSION ----------------------------->>

let frd2 = "Nikhil"
let regEx = /^Nik/                     //--------->> match if strng startswith pattern        
//let regEx = /Nik/     
console.log(regEx.test(frd2))


//----     match if strng ends with pattrn ------------------------------
let regEx2 = /Nik$/
if(regEx2.test(frd2)){
    console.log("\n\nYesss I'm executed")
}
else{
    console.log("\nI'm not executed")
}


//----------------------------------

let reggg = /nkl*/g             //-->true for  either 0 or many characters / substring
//let reggg = /0*/gi        
console.log(reggg.test(frd2))

//---------------------------------------
let ip = "pasad"
let regX = /pra?ad?/              //? ke pehle ka letter is optional
console.log(regX.test(ip))


//---------------------------------------------
let ipp = "Ahem*dabad"
let reggX = /Ahem\*dabad/              //--star as a string nhi jata regExp mei so using /
console.log(reggX.test(ipp))


// //-------------------------------------------
let iii = "mat"
let regggX = /m[a-z]t/
console.log(regggX.test(iii))


//--------------------------------------------
let stt = "radm"
let regExpp = /r[van][adh]m/
console.log(regExpp.test(stt))

//---------------------------------------------
let frd = "r5aj"
let reExp = /r[0-9]j/
console.log(reExp.test(frd))


//---------------------------------------------------------
let fruit = "mango"
let regEx3 = /.go/
console.log(regEx3.test(fruit))

console.log("\n****************************************************")
//----------------------------------------

let tool = "Cypress"
let regEx4 = /pa*/                //follows 0 or more occurences of string -->> true
console.log(regEx4.test(tool))

//-----------------------------
let pet = "camt"
let regEx5 = /c[a-z][0-9amb]t/
console.log(regEx5.test(pet))

//------------------------------------------------------
let str7 = "my name is kranti."
let cccc = /m[p-z][a-n]ame is/
console.log(cccc.test(str7))
console.log("__________________________________________________________________")

//----------------------------------
let exp = /[fh]/gi                          //if anyone char mathches --> true
let sent = "Happy Ending."
console.log(exp.test(sent))

//---------------------------
let exp2 = /[a-z][A-Z][0-9]/                         //pura pattrn oredrly follow krre
let sent2 = "Kranti Eknath Chavan eB5" 
console.log(exp2.test(sent2))

//------------------
let exp3 = /[abc][CAZ][0-4]/                        //pura pattern orderly dikhna chahiye
let sent3 = "i am new to hjbZ3klk" 
console.log(exp3.test(sent3))

console.log("______________________________________")

let exp4 = /[^pqr][A-Z][0-9]/                        //^except pqr kuchbhi chlega
let sent4 = "sH7 is here to present qD2 song."
console.log(exp4.test(sent4))
console.log(sent4.match(exp4))


//--------->> " ", @ , A-Z, a-z ----------------
let exp5 = /[^0-4][^a-z][A-Z]/g                  // ^except this values kuch bhi chlega    
let sent5 = "Happy @ Ending 2vX"
console.log("\n",exp5.test(sent5))
console.log(sent5.match(exp5))    



console.log("\n---------------------- GROPUS -------------------------------------------")

let exp6 = /(kranti)[abC]/g                         
let sent6 = "krantiC kranti krantiC"
console.log(exp6.test(sent6))
console.log(sent6.match(exp6))    

//--------------------------------
let exp7 = /(aa | rr | bb)/g                         
let sent7 = "aa abgf vv rr rrv bb aa bbc aab"
console.log("\n",exp7.test(sent7))
console.log(sent7.match(exp7))

//-------------------------------------------
let exp8 = /(88|77|89)/g                         
let sent8 = "899 678 896 667 773 885"
console.log("\n",exp8.test(sent8))
console.log(sent8.match(exp8))                       

//-----------------------------
let exp9 = /(Shri){1,3}/g                         
let sent9 = "ShriShri shri ShriShriShriShri ShriShriShri shri"
console.log("\n",exp9.test(sent9))
console.log(sent9.match(exp9))

//--------------------------------------------
let exp10 = /[1-9][0-9]{9}/g                         
console.log("0867987873".match(exp10))             //false--> returns null
console.log("9049934067".match(exp10))


//---------------------looks for possible combinations match
//let exp11 = /sa*lt/g                //-->> slt , salt, saalt, saaalt ....
let exp11 = /s*t/                          //-->> t, st, sst, ssst, ........
let sent11 = "salt"                        
console.log(exp11.test(sent11))             
console.log(sent11.match(exp11))

let exp12 = /tre*/                         //-->> tr, tre, tree, treee ........
let sent12 = "tr"                        
console.log(exp12.test(sent12)) 

//let exp13 = /hon*tly/                     //-->> hotly, hontly, honntly, honnntly ........
let exp13 = /ho*ne*sty/                   //--->> hnsty , honesty , hoonsty
let sent13 = "honestly"                        
console.log(exp13.test(sent13)) 









