/**
 * 
 *  Write a program that will calculate the number of trailing zeros 
 *  in a factorial of a given number.
 * 
 *  Be careful 1000! has 2568 digits...
 * 
 *  Examples
 *  zeros(6) = 1
 *  // 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 * 
 *  zeros(12) = 2
 *  // 12! = 479001600 --> 2 trailing zeros
 */
function zeros(n) {
    let zs = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        zs += n
    }
    return zs;
}
zeros(5)  // 1, "Testing with n = 5"
zeros(30) // 7, "Testing with n = 30"