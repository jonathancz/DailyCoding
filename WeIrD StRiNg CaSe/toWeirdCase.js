/**
 * Write a function toWeirdCase that accepts a string, and returns the 
 * same string with all even indexed character in each word upper cased, 
 * and all odd indexed characteres in each word lower cased. The indexing just 
 * explained is zero based, so the zero-ith index is even, therefore that 
 * character be upper cased.
 * 
 * The passed in string will only consists of alphabetical characters
 * and spaces. Spaces will only be presented if there are multiple words.
 * Words will be separated by a single space.
 * 
 * Examples:
 * toWeirdCase("String") => returns "StRiNg"
 * toWeirdCase( "Weird string case" ) => returns "WeIrD StRiNg CaSe"
 *  
 */
function toWeirdCase(string) {
    outputString = ''
    charArray = string.split(' ')
    charArray.forEach(word => {
        word.split('').filter((element, index, array) => {
            if(index % 2 === 0)
            {
                outputString += (element.toUpperCase())
            } else {
                outputString += element
            }
        })
        outputString += ' '
    })
    console.log(outputString.trim())
    
}




toWeirdCase('This')
toWeirdCase('is')
toWeirdCase('should return the correct value for multiple words')