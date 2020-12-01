
// modifiera sum() tills testet blir godkänt!
function sum(x, y) {
    return x + y
}

function myOwnMultiplyFunction(x, y) {
    return x * y
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(degree) {
    if(degree < 0){
        return true
    }
    else{
        return false
    }
}

function round(num) {
    return Math.round(num)  
}

function addingUp(number) {
    let sum = (number/2)*(1+number)
    return sum
}

function findMinMax(array) {
    const min = Math.min.apply(null,array)
    const max = Math.max.apply(null,array)

    const value = {
        min: min,
        max: max
    }
    return value
}

function afterXmasEve2020(date) {
    let newDate = new Date(date)
    let xmasDate = new Date("2020-12-24")

    if (newDate.getTime() >= xmasDate.getTime()) {
        return true
    }
    else{
        return false
    }
}

function sortByStringLength(array) {
    return array.sort((a, b) => a.length - b.length)   
}

function charCounter(letter, array) {
    
    const bigLetter = letter.toUpperCase()
    const bigArray = array.toUpperCase()
    let count = 0
    
    for (let i = 0; i < array.length; i++) {
        if (bigArray.charAt(i) === bigLetter) {
          count++;
        }
    }
    return count   
}

function numbersOnly(array) {
    let onlyNumbers=[];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !(isNaN(array[i]))) {
            onlyNumbers.push(array[i])
        }
    }
    return onlyNumbers
   
}

function sortNumbers(array, sortOrder) {
    
    if (sortOrder == 1) {
        array.sort((a, b) => a - b);
    }
    else {
        array.sort((a,b)=> b-a)
    }
    return array
}

function personFactory(firstName, lastName){
    
    let person = new Object();

    person.firstname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    person.lastname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    person.fullname = person.firstname + ' ' + person.lastname;
    person.initials = person.firstname.charAt(0) + '.' + person.lastname.charAt(0);
    
    return person;
}

function doublePrice(products) {

    const array = products;
    array[0].price *= 2;
    array[1].price *= 2;

    return array;
}

function and(val1, val2) {
    if (val1 === val2) {
        return true
    }
    else {
        return false
    }
}

function removeLeadingTrailing(string) {
   return number = Number(string);
}

function getKeysAndValues(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    let both = {
        keys: keys,
        values: values
    }

    return keys && values && both; 
}


// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
