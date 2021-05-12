const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


//https://www.w3schools.com/jsref/jsref_fromcharcode.asp
//random lowercase letter form a-z
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//random upper case letter from a-z
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
//get randomnumber
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
   
}


console.log(getRandomSymbol())