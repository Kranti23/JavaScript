
let input = "0123456789"
let output = ""                //"5987604321"
for (let i = 0; i < input.length; i++) {
    if (input[i] != 5 && input[i] != 0) {
        output = output + String(10 - Number(input[i]));
        console.log(output)
    }
    else {
        val = Number(input[i]) === 0 ? 5 : 0
        output = output + val
    }
}
console.log(output)