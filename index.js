// function isEven(a) {
//     if(a == 0)return "even"
//     if(a == 1)return "odd"
//     return isEven(Math.abs(a) % 2)
// }
// console.log(isEven(143));
// console.log(isEven(-42));
// console.log(isEven(4243545));

// function sumOfDigits(a) {
//     if(a == 0) return 0;
//     return a % 10 + sumOfDigits(~~(a / 10))
// }
// console.log(sumOfDigits(12345));
// console.log(sumOfDigits(222));

// function factorial(a) {
//     if(a == 1) return 1;
//     return a * factorial(a - 1);
// }
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(2));

// function sumTo(a) {
//     if(a == 0)return 0;
//     return a + sumTo(a - 1)
// }
// console.log(sumTo(10));
// console.log(sumTo(7));
// console.log(sumTo(5));

// function power(a,b) {
//     if(b == 0)return 1;
//     return a * power(a, b - 1);
// }
// console.log(power(2,3));
// console.log(power(3,3));
// console.log(power(4,2));

// function sumOddTo(a) {
//     if (a == 0) return 0;
//     if (a % 2 != 0) return a + sumOddTo(a - 1);
//     return 0 + sumOddTo(a - 1);
// }
// console.log(sumOddTo(9));

// function isArmstrong(a) {
//     let a1 = Math.floor(a / 100);
//     let a2 = Math.floor(a / 10 % 10);
//     let a3 = a % 10;
//     let sum = (a1 * a1 * a1) + (a2 * a2 * a2) + (a3 * a3 * a3);
//     if (sum == a) return true;
//     else return false;
// }
// console.log(isArmstrong(153));
// console.log(isArmstrong(123));
// console.log(isArmstrong(370));

// function isMultiple(a, b) {
//     if(a % b == 0)return true;
//     else return false
// }
// console.log(isMultiple(10, 5));
// console.log(isMultiple(15, 4));
// console.log(isMultiple(12, 3));

// function sumDigit(a) {
//     if(a == 0)return 0;
//     return a%10 + sumDigit(Math.floor(a / 10))
// }
// console.log(sumDigit(111));
// console.log(sumDigit(222));
// console.log(sumDigit(333));

// function multiSum(a) {
//     let sum = null;
//     for(let i = 1; i <=10; i++) {
//         sum += a * i;
//     }
//     return sum;
// }
// console.log(multiSum(1));
// console.log(multiSum(6));
// console.log(multiSum(10));

function gcd(a) {
    
}
console.log(gcd(32, 8));
console.log(gcd(8, 12));
console.log(gcd(17, 13));
