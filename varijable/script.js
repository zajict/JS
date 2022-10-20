// first

let prvi_broj = 5;
let drugi_broj = 10;

let treci_broj = prvi_broj;

prvi_broj = drugi_broj;

drugi_broj = treci_broj;

console.log(prvi_broj);
console.log(drugi_broj);

// second
const br = 14;
console.log(br);
// let br = 15;
// console.log(br);
console.log(typeof(br));


//third

let ime = 'Pera';
let prezime = 'Peric';
let godine = 19;

console.log(ime);
console.log(prezime);
console.log(godine);

let recenica = 'On je ' + ime +  prezime + ' ima ' + godine + ' godina';
console.log(recenica);

godine++;

let recenica2 = 'sledece godine ce imati ' + godine + ' godina';
console.log(recenica2);

// godine--;
// godine--;
godine -=2;

let recenica3 = 'Prosle godine sam imao ' + godine + ' godina'
console.log(recenica3);

godine *= 2;
let recenica4 = 'Jednog dana imacu ' + godine + ' godina';
console.log(recenica4); 



/* Logicki operatori */

let a = 14;
let b = 4;

let c = 7;
let d = 9;

 console.log(a > b);
 console.log(b > c);

 console.log((a < b) && (c < d));

 console.log((a > b) || (c < d));

 console.log(c);
 console.log(!!c);
 console.log(!c);


//  null, boolean, undefined

let n = '';
console.log(typeof(n));

let m = 6;
console.log(typeof(m))
console.log(typeof(!m));










