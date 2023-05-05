//Practices2-1
let age = 18;

if (age >= 18) {
    console.log('可以投票');
} else {
    console.log('不能投票');
}

let age = 16;

if (age >= 18) {
    console.log('可以投票');
} else {
    console.log('不能投票');
}

//Practices2-2
let num = 10;

if (num % 2 === 0) {
    console.log(`${num} 是偶數`);
} else {
    console.log(`${num} 是奇數`);
}

let num = 9;

if (num % 2 === 0) {
    console.log(`${num} 是偶數`);
} else {
    console.log(`${num} 是奇數`);
}

//Practices2-3
let x = 11;
let y = 30;
console.log(x > y);
console.log(x < y);

//Practices2-4
let x = 11;
let y = 30;
let z = 37;
console.log(x > y);
console.log(x > z);
console.log(y > z);

//Practices2-5
let min = 10;
let max = 100;
let num = 30;

console.log(num > min && num < max);

//Practices2-6
let year = 2000;

if (year % 4 = 0 && year % 100 = 0 && year % 400 = 0) {
    '是閏年!'
} else {
    '不是閏年!'
}
