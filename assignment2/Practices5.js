//Practices5-1
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(2));
console.log(isEven(3));


//Practices5-2
const isEapyear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEapyear(1900));
console.log(isEapyear(2000));


//Practices5-3
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(2));
console.log(isPrime(7));



//Practices5-4
let x = 3;
let y = 7;
let z = 11;


const mostBigger = (x, y, z) => {
    if (x > y && x > z) {
        return x;
    } else if (y > z && y > x) {
        return y;
    } else {
        return z;
    }
}

console.log(mostBigger(x, y, z));