let mapOne = new Map([
    ['question', 'answer'],
    ['What is Capital of Maharashtra', 'Mumbai'],
    ['What is my name', 'Kranti'],
    ['What is her fav color', 'Black'],
    ['What is the capital of Gujarat', 'Gandhinagar']
])

let correctAns = 0
//let regExp = /^What/
for (let [key, value] of mapOne) {
    if (key != "question") {
        let userInput = prompt(key)
        if (userInput === value) {
            correctAns += 1
        }
    }

    // if (regExp.text(key)) {
    //     let userInput = prompt(key)
    //     if (userInput === value) {
    //         correctAns += 1
    //     }
    // }

}
if (correctAns == 4) {
    console.log("Won Gold Medal")
}
else if (correctAns == 3) {
    console.log("Won Silver Medal")
}
else if (correctAns == 2) {
    console.log("Won Bronze Medal")
} else {
    console.log("Better Luck Next Time..!!")
}



