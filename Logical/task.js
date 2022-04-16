//----------- REVERSE THE WORDS OF STRING ---------------
let input = "Have a good day"
let output = ""                              //-->> evaH a doog yad
for (let i = 0; i < input.length; i++) {
    output = input[i] + output
}
console.log(output)
let pp = output.split(' ')
console.log(pp)
console.log(pp.reverse().join(' '))

//-----without using reverse

let ss = input.split(' ')
//console.log(ss)
let newstr = []
for (let i = 0; i <= ss.legth - 1; i++) {
    for (j = 0; j <= newstr[i].length - 1; j++) {
        output = ss[i][j] + output
    }
    newstr.push(output)
    //output=""
}
console.log(newstr.join(' '))


//---------------------------------------------------------------------------------------
let strInput = "0123456789"
let strOutput = ""              //5987604321
 for (let key of strInput) {
    key = Number(key)
    if (key === 0 || key === 5) strOutput += key === 0 ? '5' : '0'
    else strOutput += 10 - key
}
console.log("\noutput is:", strOutput)


//------- 2nd way ---------
for (let key in strInput) {
    if (key === 0 || key === 5) strOutput += key === 0 ? '5' : '0'
    else if (key === 1 || key === 9) strOutput += key === 1 ? '9' : '1'
    else if (key === 2 || key === 8) strOutput += key === 2 ? '8' : '2'
    else if (key === 3 || key === 7) strOutput += key === 3 ? '7' : '3'
    else if (key === 4 || key === 6) strOutput += key === 4 ? '6' : '4'
}
console.log(strOutput)


//------- using switch case -----------

for (let key of strInput) {
    switch (key) {
        case '0': case '5':
            strOutput += key == '0' ? '5' : '0'
            break;

        case '1': case '9':
            strOutput += key == '1' ? '9' : '1'
            break;

        case '2': case '8':
            strOutput += key == '2' ? '8' : '2'
            break;

        case '3': case '7':
            strOutput += key == '3' ? '7' : '3'
            break;

        case '4': case '6':
            strOutput += key == '4' ? '6' : '4'
            
    }
}
console.log(strOutput)





