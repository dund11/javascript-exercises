const fibonacci = function(n) {
    n = parseInt(n);
 if (n === 0) {
 return 0;
 }
 if (n < 0) {
    return "OOPS";
 } 
 let a = 0;
 let b = 1;

 for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
 }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
