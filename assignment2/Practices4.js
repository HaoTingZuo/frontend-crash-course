//Practices4-1.1
for (let i = 1; i <= 10000; i++) {
    console.log(i);
}
//Practices4-1.2
let i = 1;
while (i <= 10000) {
    console.log(i);
    i++;
}

//Practices4-2.1
for (i = 2; i <= 100; i += 2) {
    console.log(i);
}

//Practices4-2.2
let i = 2;
while (i <= 100) {
    console.log(i);
    i += 2;
}
//Practices4-3.1
for (i = 1; i <= 100; i += 2) {
    console.log(i);
}

//Practices4-3.2
let i = 1;
while (i <= 100) {
    console.log(i);
    i += 2;
}

//Practices4-4
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


//Practices4-5
console.log(7)
console.log(77)
console.log(777)
console.log(7777)
console.log(77777)
console.log(777777)
console.log(7777777)