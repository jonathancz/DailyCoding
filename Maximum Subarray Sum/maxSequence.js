/**
 * For building the encrypted string:
   Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
   Do this n times!

   Examples:
   "This is a test!", 1 -> "hsi  etTi sats!"
   "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

   Write two methods:
   function encrypt(text, n)
   function decrypt(encryptedText, n)

   For both methods:
   If the input-string is null or empty return exactly this value!
   If n is <= 0 then return the input text.
 */

function encrypt(text, n) {
    // Solve the problem recursively; as it repeats the same process n number of times.
    if (n <= 0 || !text) {
        return text
    }
    let second = text.split("").filter((elem, i) => i % 2 === 1)
    let rest = text.split("").filter((elem, i) => i % 2 === 0)
    return encrypt(second.concat(rest).join(""), n - 1)
}

function decrypt(encryptedText, n) {

}