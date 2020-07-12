
// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);

// }

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('hello world');
console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(7, 8));
// console.log(calc(2, 8));
// console.log(calc(12, 8));

function ret() {
    let num = 10;



    return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function() {
    console.log('hello world');
};

logger();

const calc = (a, b)  => {
    return (a + b);
}; 

console.log(calc(7, 9));


const str = 'test';
const arr = [1, 2, 4];

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some  fruit";

console.log(fruit.indexOf('fruit'));

const logg = "hello world";

console.log(logg.slice(6));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 4));

const numm = 13.6;

console.log(Math.round(numm));

const nummm = '12.9px';
console.log(parseFloat(nummm));