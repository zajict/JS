// petlje: for, for/in, for/of, while, do/while

// petlja while:

// 25 novcanica
let novcanice = 25;

// 10 eura vrednost jedne novcanice
let vrednost_nov = 10;


// izbrojane novcanice
let izbrojane_nov = '';

/* broji novcanice sve dok je brojac manji od broja novcanica */

while(izbrojane_nov < novcanice) {
    
    izbrojane_nov ++;
   

    console.log(izbrojane_nov);
}

console.log(izbrojane_nov * vrednost_nov);



// nizovi  .length
// izbrojati koliko ima novcanica u nizu

let novac = [10, 20, 50, 100, 20, 5, 10, 10, 20, 100];

let broj_novca = novac.length;

console.log(novac.length);

console.log(typeof(novac))

console.log(novac);

// ako zelimo da pristupimo nekom broju u navedenom nizu onda upisujemo njegov redni broj u nizu:

console.log(novac[0]);
// racunar broji od nule, pa je prvi broj u nizu rednog broja 0.


// ispisujem clanove niza. ovako se ispisuju bez obzira koliko ih ima

let brojac = 0;

while(brojac < broj_novca) {
    console.log(novac[brojac]);

    brojac++;
}



console.log('KRAJ PETLJE');

if(brojac < broj_novca) {
    console.log('Brojac je manji');
}else {
    console.log('Brojac nije manji');
}

console.log('brojac: ' + brojac);





// petlja for:
// zadatak je da izbrojim novcanice koristeci for petlju:


let nov = [10, 20, 50, 100, 20, 5, 10, 10, 20, 100];

let broj_nov = nov.length;

let broja_c = 0;

ukupno_novca = 0;

// for(broja_c = 0; broja_c < broj_nov; broja_c++) 
// ovo je isto kao:
for(let broja_c in nov) {
    console.log(broja_c)
    console.log(nov[broja_c]);

    ukupno_novca += nov[broja_c];
}
console.log('--------')
console.log(ukupno_novca)

console.log('Ukupno imamo: ' + ukupno_novca + ' eura.');

// u for petlji ide sve zajedno

console.log('-------')



let automobili = ['Audi', 'BMW', 'Porche','Mercedes'];

// for( let automobil of automobili) {
//     console.log(automobili);
// }

automobili.forEach(function (automobil) {
    console.log(automobil);
});

// objekti
// mozemo ih posmatrati kao malo napredniji niz

let auta = {prvi_auto: 'Audi', drugi_auto: 'BMW', treci_auto: 'Porsche', cetvrti_auto: 'Mercedes'};

console.log(auta);

// bolji nacin

let auto = {
    audi: '50000',
    bmw: '60000',
    porsche: '70000',
    mercedes: '90000'
};
console.log(auto);
console.log('-------');

// detaljnije specifikacije automobila mozemo da predstavimo na sledeci nacin

// kada otvorimo ovako posle let, na primer, viticaste zagrade {}, to znaci da u okviru njim imamo jedan objekat

let specifikacije = {
    audi: ['7000', '2017', 'Q7'],
    bmw: ['50000', '2018', '330D'],
    porche: ['60000', '2017', 'Boxter'],
    mercedes: ['90000', '2020', '5400'],
};

console.log(specifikacije);

console.log('------');


// sve ovo da ispisemo u petlji da lepo izgleda

for(specifikacija in specifikacije){
   
    console.log(specifikacije[specifikacija]);
    console.log('-------');

}
console.log(specifikacije);


// u {} zagradama su objekti
// u [] zagradama su nizovi
