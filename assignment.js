//Question 1
console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Section A
console.log("Programmatically subtract the value of the first element in the array from the value in the last element of the array");
function subtractAge(ages) {
    console.log("ages array = " + ages); //checking that the ages array has been changed every time I call the subtractAge Function
    var length = ages.length; //sets length of 
    var agesIndex = length - 1;
    return ages[agesIndex] - ages[0];
}
console.log(subtractAge(ages));
//Section B
console.log("Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(18); //Adds value of 18 to end of ages array
console.log(subtractAge(ages));
//Section C
console.log("Use a loop to iterate through the array and calculate the average age.");
function ageAvg(ages) {
    var agesTotal = 0; //declares agesTotal
    var length = ages.length;
    var agesIndex = length - 1;
    for (let i = 0; i <= agesIndex; i++) {
    agesTotal += ages[i];
    }
return agesTotal / length;
}
console.log(ageAvg(ages));
//Question 2
console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.");
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//Section A
console.log("Use a loop to iterate through the array and calculate the average number of letters per name.");
function avgNameLength(names) {
    var nameLength = 0;
    var totalNamesLength = 0;
    var nameArrayLength = names.length;
    var nameIndex = nameArrayLength - 1;
    for (let i = 0; i <= nameIndex; i++) {
        nameLength = names[i].length;
        totalNamesLength += nameLength;
    }
    return totalNamesLength / nameArrayLength;
}
console.log(avgNameLength(names));
//Section B
console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
console.log("concat names separated by spaces: " + names.join(" "));
//Question 3
console.log("How do you access the last element of any array?");
console.log("By finding the value at the index of an array that is 1 less than the length of said array. Ex: arrayName[arrayLength - 1]");
//Question 4
console.log("How do you access the first element of any array?");
console.log("By finding the value at the index of 0 of an array. Ex: arrayName[0]");
//Question 5
console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
let nameLengths = [];
function nameLengthPush(names) {
    var nameArrayLength = names.length;
    var nameIndex = nameArrayLength - 1;
    for (let i = 0; i <= nameIndex; i++) {
        nameLengths.push(names[i].length);
    }
    return nameLengths;
}
nameLengths = nameLengthPush(names); //Started bringing final function return into seperate external variable to make things easier, too late to refactor.
console.log(nameLengths);

//Question 6
console.log("Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
function combinedNamesLength(nameLengths) {
    var totalNamesLength = 0;
    var nameLengthsLength = nameLengths.length;
    var nameLengthsIndex = nameLengthsLength - 1;
    for (let i = 0; i <= nameLengthsIndex; i++) {
        totalNamesLength += nameLengths[i];
    }
    return totalNamesLength
}
totalNamesLength = combinedNamesLength(nameLengths);
console.log(totalNamesLength);
//Question 7
console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
let word = "Hello";
let n = 3;
function concatWord(word, n) {
    var concatenatedWord = [];
    for (let i = 0; i < n; i++) {
        concatenatedWord.push(word);
    }
    return concatenatedWord;
}
concatenatedWord = concatWord(word, n);
console.log(concatenatedWord.join(""));
//Question 8
console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function fullNameGen(firstName, lastName) {
    var fullName = [];
    fullName.push(firstName);
    fullName.push(lastName);
    return fullName
}
let firstName = "Sophi";
let lastName = "Dickens";
let fullName = fullNameGen(firstName, lastName);
console.log(fullName.join(" "));
//Question 9
console.log("Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
var numbersTotal = 0;
let numbers = [41, 12, 2, 3, 15, 17, 4];
function numbersAdd(numbers) {
    let numbersTotal = 0;
    let numbersBool = false;
    for (let i = 0; i <= (numbers.length) - 1; i ++) {
        numbersTotal += numbers[i];
    }
    if (numbersTotal >= 100) {
        numbersBool = true;
    }
    return numbersBool;
    
}
numbersTotal = numbersAdd(numbers);
console.log(numbersTotal);
//Question 10
console.log("Write a function that takes an array of numbers and returns the average of all the elements in the array.");
var numAvg = 0;
function numbersAvg(numbers) {
    let numbersTotal = 0;
    for (let i = 0; i <= (numbers.length) - 1; i++) {
        numbersTotal += numbers[i];
    }
    return numbersTotal / (numbers.length);
}
numAvg = numbersAvg(numbers);
console.log(numAvg);
//Question 11
var nameLengthAvg = 0;
console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.")
function avgNumCheck(names, numbers) {
    numAvg = numbersAvg(numbers);
    nameLengthAvg = avgNameLength(names);
    if (numAvg > nameLengthAvg) {
        return true;
    }   else {
        return false;
    }
}
console.log("numAvg > nameLengthAvg == " + avgNumCheck(names, numbers));
//Question 12
console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside = true) {
        if (moneyInPocket >= 10.50) {
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
}
var isHotOutside = true;
var moneyInPocket = 8.75;
var buysDrink = willBuyDrink(isHotOutside, moneyInPocket);
console.log("willBuyDrink == " + buysDrink + " because variable isHotOutside == " + isHotOutside + " and variable moneyInPocket == " + moneyInPocket);
//Question 13
console.log("Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
//Scores city from cities skylines (uses data from my mom's current game)
let population = 0; //Declaring population variable
let revenue = 0; //Declaring revenue variable
let happiness = 0; //Declaring happiness variable
let points = 0; //Declaring points variable for city scoring
function citiesSkylinesCityApproval(population, revenue, happiness) {
    //checking population and points awarding
    if (population < 100000) {
        points += 0;
    }   else if (population <= 200000) {
        points += 0.5;
    }   else if (population > 200000) {
        points += 1;
    }
    //checking population and points awarding
    //checking revenue and points awarding
    if (revenue < 0) {
    points += 0;
    }   else if (revenue <= 1500) {
        points += 0.5;
    }   else if (revenue > 1500) {
        points += 1;
    }
    //checking revenue and points awarding
    //checking happiness and points awarding
    if (happiness < 2) {
        points += 0;
    }   else if (happiness <= 3) {
        points += 0.5;
    }   else if (happiness > 3) {
        points += 1;
    }
    //checking happiness and points awarding
    return points;
}

population = 302002; //My mom's current city population
revenue = 2305; //My mom's current incoming monthly city revenue
happiness = 4; //Best Citizen Happiness on scale from 0-4
points = citiesSkylinesCityApproval(population, revenue, happiness);
if (points < 1) {
    console.log("You have an abysmal city, try harder next time.");
}   else if (points < 2) {
    console.log("Your city is expanding, keep working to make your city better.");
}   else if(points < 3) {
    console.log("Your city is pretty well off, maybe I'll ask you to build mine for me");
}   else {
    console.log("Your city is a thriving megalopolis, you deserve the mayor of the year award!");
}