// for (initialization;condition;inc/dec)            //definite
//        statements;
//     }

/*  initialization
while(condition){                      //until condition reaches to false
    statement;
    inc/dec
}          */

//let i =0
for (let i = 0; i <= 5; i++) {

    console.log(i)
}

let j = 0
for (; j <= 3;) {

    console.log(j)
    j++
}


for (let i = 1; i <= 9; i = i + 2) {
    console.log(i) //1 3 5 7 9
}

//-----------even odd ----------------
for (let y = 1; y <= 50; y++) {
    if (y % 2 == 0) {
        console.log("Number is even", y)
    }
    else {
        console.log("Number is odd", y)
    }
}
console.log("                  ")

//-------- Print reverse ---------
// 10 8 6 5 4 2 0 
for(let i = 10 ; i>=1 ; i -=2){
    console.log(i)
}


//------------- WHILE -------------------

let r =0 ;
while(r <=10){
    console.log(r)
    r += 4
}


let p = -1 
while(p >=-5){
console.log(p)
 p--

}


//---------- BREAK STATEMENT ---------------------

for(let i =0 ; i<5 ; i++){

     if(i == 2){
         break;
     }
     console.log(i)                          // 0 1
}


// --------------- CONTINUE -------------------

for(let j =0 ;j<=6 ;j++){

    if(j == 2){
        continue;          // goes back inside loop
    }

    console.log(j)                       // 0 1 3 4 5 6 
}


let i=0
while(i<=4){
    if(i == 3){
         break;
    }
      //i++       ..... 1 2 3
      console.log(i)
      i++            // 0 1 2

}


// ------ continue using while ------------

let j =0
while(j<4){
    j++
    if(j == 3){
        continue
    }
    console.log(j)          // 1 2 4 
}







