const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversed;
};
// Do not edit below this line
module.exports = palindromes; 
/*console.log(palindromes('racecar')); 
console.log(palindromes('tacos'));
console.log(palindromes('A car, a man, a maraca.')); */
