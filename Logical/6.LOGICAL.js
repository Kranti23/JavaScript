//Problem 1---->Reversing the string elements

let string1 = "i am new to javascript";
let splittedString1 = string1.split(" ");
let newString1 = [];

function revString(namei) {
  revStr = "";
  for (let i = 0; i < namei.length; i++) {
    revStr = namei[i] + revStr;
  }
  return revStr;
}
for (let i = 0; i < splittedString1.length; i++) {
  newString1.push(revString(splittedString1[i]));
}
console.log(newString1.join(" "));

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 2---->Fetching highest and lowest number in array

let numArray = [21, -65, 43, 98, -23, 98, 56, -37];
let highest = 0;
let lowest = 0;
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > highest) {
    highest = numArray[i];
  } else if (numArray[i] < lowest) {
    lowest = numArray[i];
  }
}
console.log(highest);
console.log(lowest);

console.log(
  "----------------------------------------------------------------------------------------------"
);
//Problem 3---->Reversing the string

let strA = "Karan,prasad,yogesh,Prataprao";
let strB = "";

for (let i = strA.length - 1; i >= 0; i--) {
  strB += strA[i];
}

console.log(strB);

let revStrC = strA.split(",").reverse();
console.log(revStrC);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 4

let pm = "MmodiI";
let namo = "";
for (let i = 0; i < pm.length; i++) {
  if (i != 0 && i != pm.length - 1) {
    namo = namo + pm[i];
  }
}
console.log(namo);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 5---->python.py extract py

let lang = "python.py";
let sep = lang.split(".");
console.log(sep[sep.length - 1]);

//or

let pton = "python.py";
let pyyp = "";
for (let i = 0; i < pton.length; i++) {
  if (i == pton.length - 1 || i == pton.length - 2) {
    pyyp = pyyp + pton[i];
  }
}
console.log(pyyp);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 6---->

let prack = [
  [1, 2, 5],
  [4, 6, -9],
  [100, -200, -300],
];
let blankArry = [];
for (let i = 0; i < prack.length; i++) {
  for (let j = 0; j < prack[i].length; j++) {
    blankArry.push(prack[i][j]);
  }
}
console.log(blankArry);

let highValue = 0;
let lowValue = blankArry[0];
for (let k = 0; k < blankArry.length; k++) {
  if (blankArry[k] > highValue) {
    highValue = blankArry[k];
  } else if (blankArry[k] < lowValue) {
    lowValue = blankArry[k];
  }
}
console.log(highValue);
console.log(lowValue);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 7---->find out count of word in given string

let statementA =
  "I am new to javascript and i wish to learn every concept of javascript . javascript is great";
let spr = statementA.split(" ");

let count = 0;
for (let a = 0; a < spr.length; a++) {
  if (spr[a].includes("javascript")) {
    count++;
  }
}
console.log(count);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//problem 8---->Count the vowels from given string

let song =
  "i tried so hard and got so far But in the end it doesn't even matter";
let count1 = 0;
for (let s = 0; s < song.length; s++) {
  if (
    song[s] == "a" ||
    song[s] == "e" ||
    song[s] == "i" ||
    song[s] == "o" ||
    song[s] == "u"
  ) {
    count1++;
  }
}
console.log(count1);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 9---->Sorting the array have differant type of elements

let multiArray = [
  67,
  "karan",
  "rajshree",
  -22,
  "pratiksha",
  4,
  "abhijeet",
  "laukik",
  -365,
];
let digits = [];
let alphabets = [];
for (let m = 0; m < multiArray.length; m++) {
  if (typeof multiArray[m] == "number") {
    digits.push(multiArray[m]);
  } else {
    alphabets.push(multiArray[m]);
  }
}
digits.sort(function (a, b) {
  return a - b;
});

alphabets.sort();

let newArray = digits.concat(alphabets);
console.log(newArray);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 10---->Compresing the string

function compress(string) {
  let stringC = "";
  let countC = 1;
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i + 1)) {
      countC += 1;
    } else {
      stringC += `${string.charAt(i)}${countC}`;
      countC = 1;
    }
  }
  console.log(stringC);
}

compress("aaaabbbccd");

//or

function Compressed2(stringA) {
  let CompressedString = "";
  let countU = 0;
  for (let i = 0; i < stringA.length; i++) {
    countU++;
    if (stringA[i] != stringA[i + 1]) {
      CompressedString += stringA[i] + countU;
      countU = 0;
    }
  }
  console.log(CompressedString);
}
Compressed2("aaaabbbccd");

console.log(
  "----------------------------------------------------------------------------------------"
);

//Problem 11---->

let h = "4a3c2b";

let even = [];
let odd = [];

for (let i = 0; i < h.length; i++) {
  if (i % 2 == 0) {
    even.push(h[i]);
  } else {
    odd.push(h[i]);
  }
}
console.log(even);
console.log(odd);

newString = " ";

for (let i = 0; i < even.length; i++) {
  newString = newString + odd[i].repeat(Number(even[i]));
}
console.log(newString);

console.log(
  "------------------------------------------------------------------------"
);

//Problem 12---->

let numString = [123];
let newstr = "";
for (let i = numString.length - 1; i >= 0; i--) {
  newstr += numString[i];
}
console.log(`ans${newstr}`);

console.log(
  "--------------------------------------------------------------------------"
);

//Problem 13---->Counting the number of occurance of character in string and result is in the object

let allS = "agdjhgjfggchfgxhv";
let output = {};

for (let i = 0; i < allS.length; i++) {
  if (output.hasOwnProperty(allS[i])) {
    output[allS[i]] = output[allS[i]] + 1;
  } else {
    output[allS[i]] = 1;
  }
}
console.log(output);

//Problem 14---->Counting the number of occurance of character in string and result is in the object
//When the string contain Capital letters

let allCapital = "AGShgcFGvHCGHccshcsCShgcs";
let output2 = {};
allCapital = allCapital.toLowerCase(); //----just lowercase the string

for (let i = 0; i < allCapital.length; i++) {
  if (output2.hasOwnProperty(allCapital[i])) {
    output2[allCapital[i]] = output2[allCapital[i]] + 1;
  } else {
    output2[allCapital[i]] = 1;
  }
}
console.log(output2);

// //Problem 15---->If the string contain special charectors in the string then counting of occurance
// //of character in the string (Numbers,Alphabets,Special charactors)

let stringG = "AJHbhfdSGVKH1538$##^%%(*&kjsdhkvh";

let numG = 0;
let AbetsG = 0;
let specialG = 0;

for (let i = 0; i < stringG.length; i++) {
  if (Number(stringG[i])) {
    numG = numG + 1;
  } else if (
    (stringG[i] >= "A" && stringG[i] <= "z") ||
    (stringG[i] >= "a" && stringG[i] <= "z")
  ) {
    AbetsG = AbetsG + 1;
  } else specialG = specialG + 1;
}
console.log(numG, AbetsG, specialG);

// program 16

// // separate out the even and odd numbers from the arrey

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenarr = [];
let oddarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenarr.push(arr[i]);
  } else {
    oddarr.push(arr[i]);
    // console.log(arr[i])
  }
}

console.log(evenarr); //[ 2, 4, 6, 8, 10 ]
console.log(oddarr); // [ 1, 3, 5, 7, 9 ]

// program 17

// Q. remove duplicate elements from the arrey

let arr = [12, 34, 12, 44, 34, 12, 45, 34, 57];

let unarr = [];

for (let i = 0; i < arr.length; i++) {
  if (!unarr.includes(arr[i])) {
    unarr.push(arr[i]);
  }
}
console.log(unarr); // [ 12, 34, 44, 45, 57 ]

// program 18

// Find Max. and Min. value  from the given arrey

let arr = [88, 94, 1, 100, 2, 0, -22, -3, 101];
arr.sort((a, b) => a - b);
console.log(`Min.value ${arr[0]}`);
console.log(`Max.value ${arr[arr.length - 1]}`);