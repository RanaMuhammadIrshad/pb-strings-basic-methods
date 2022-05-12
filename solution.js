//1. Declare a variable named `parkWalkStr` with the value "I can walk in the park all day!". Print the word "park" to the console.

let parkWalkStr = "I can walk in the park all day!";
let findWord = parkWalkStr.substring(18, 22);
console.log(`1. ${findWord}`);
/* 2. Declare a variable named `helloStr` with the value "Hello World". Covert the value to upper case and print the converted value to the console. */
let helloStr = "Hello World";
let helloUpper = helloStr.toUpperCase();
console.log(`2. ${helloUpper}`);

/* 3. Declare another variable named `earthlingsStr` with the value "Hello Earthling". Convert the value to lower case and print the converted value to the console. */

let earthlingsStr = "Hello Earthling";
let lowerStr = earthlingsStr.toLowerCase();
console.log(`3. ${lowerStr}`);

/* 4. Declare a variable named `jsStr` with the value "JavaScript". Use a string method to print the characters "aSc" from your declared variable. */

let jsStr = "JavaScript";
let printJsStr = jsStr.substring(3, 6);
console.log(`4. ${printJsStr}`);

/* 5. Use a string method to check if the sentence "nice shoes" contains the letters l or n. Print the result of each check to the console. */

let mySentence = "nice shoes";
let includeL = mySentence.includes("l", 0);
let includeN = mySentence.includes("n", 0);
console.log(`5. ${(includeL, includeN)}`);

/* 6. Create a variable named `oldStr` and assign a word of your choice as its value. Create another variable named `newStr` and as its value assign the value of `oldStr` with the first character of the string added at the front and back, i.e.: Bananas => BBananasB */

let oldStr = "Bremen";
let newStr = oldStr;
let addWord = "B";
console.log(`6. ${addWord}${newStr}${addWord}`);

/* 7. Create a variable named `scritcherStr` and assign a word of your choice with at least 3 characters as its value. Create another variable named `lastThreeChars` and use a string method to get the last 3 characters of `scritcherStr` and assign them as the value of the new variable. Add the value of `lastThreeChars` to the beginning **and** end of `scritcherStr` and print the result to the console, expected output: Scritch => tchScritchtch */
let scritcherStr = "Germany";
let lastThreeChars = scritcherStr.substring(4, 7);
let addChar = `${lastThreeChars}${scritcherStr}${lastThreeChars}`;

console.log(`7. ${addChar}`);
/* 8. Create a variable named `boogieNightsStr` and assign a word of your choice with at least 2 characters as its value. Switch the places of the first and last charecters and print the result to the console, expected output: BoogieWoogie => eoogieWoogiB */

/* let boogieNightsStr = "JavaScript";
let firstChar = boogieNightsStr.substring(0, 1);
let lastChar = boogieNightsStr.substring(9);

console.log(`8. ${lastChar}avaScrip${firstChar}`); */

let boogieNightsStr = "JavaScript";

let firstChar = boogieNightsStr.charAt(0);
let lastLetter = boogieNightsStr.charAt(boogieNightsStr.length - 1);
let middleLetters = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log(`8. ${lastLetter}${middleLetters}${firstChar}`);

/* console.log(`${lastLetter}${boogieNightsStr.substring(1, length-1)${firstChar}}`); */

/* 9. Create 3 variables named `firstName`, `city` and `job` and assign string values, i.e, const firstName = "Maria"; const city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".  */

const firstName = "Rana";
const city = "Bremen";
const job = "Student";

console.log(`9. My name is ${firstName}. I live in ${city} and I am a ${job}.`);

/* 10. Declare a variable named `foxStr` and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console. */
let foxStr = "the quick brown fox";
let firstLetter = foxStr.charAt(0).toUpperCase();
let restString = foxStr.substring(1);
console.log(`10.${firstLetter}${restString}`);
