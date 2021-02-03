/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * 
 * Examples:
 * pigIt('Pig latin is cool') // igPay atinlay siay oolcay
 * pigIt('Hello world !') // elloHay orldway !
 */


// Pseudo code
// 1. Split word
// 2. Check if first character is alphabetic or not
// 3. Take first character of every word and put it at the end 
// 4. Add "ay"

function isLetter(s) {
    return s.match("^[a-zA-Z\(\)]+$");
}

function pigIt(str) {
    // Split word
    words = str.split(" ")
    let modifiedWord = ''
    words.forEach(word => {
        let firstChar = word.charAt(0) + "ay"
        let restChar
        word.length > 1 ? restChar = word.substring(1, word.length) : restChar = ''
        // Check if letter is alphabetic
        if (isLetter(word.charAt(0))) {
            // console.log(word.charAt(0))
            modifiedWord = modifiedWord.concat(restChar + firstChar + ' ')

        }
        else {
            modifiedWord += word
        }
    })
    return(modifiedWord.trim())
}