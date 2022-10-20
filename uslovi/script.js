// uslovi: if, else, else if, switch

let a = 11;
let b = 10;

if(a < b) {
    console.log('Prvi broj je manji od drugog');
} else {
    console.log('Prvi broj NIJE manji od drugog');
}

let vreme = 21;

if( vreme < 10) {
    console.log('Dobro jutro');
} else if (vreme < 19)

{
    console.log('Dobar dan');

} else {
    console.log('Dobro vece');
}


let mesec = 6;

if(mesec === 1) {
    console.log('Januar');
} else if(mesec === 2) {
    console.log('februar');
} else if(mesec === 3) {
    console.log('Mart');
} else if (mesec === 4) {
    console.log('April');
} else if (mesec === 5) {
    console.log('Maj');
}else {
    console.log('Jun');
}


let mes = 12;
switch(mes) {
    case 1 :
        console.log('Januar');
        break;
    case 2 :
        console.log('Februar');
        break;
    case 3:
        console.log('Mart');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('Maj');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Avgust');
        break;
    case 9:
        console.log('Septembar');
        break;
    case 10:
        console.log('Oktobar');
        break;
    case 11:
        console.log('Novembar');
        break;
    case 12:
        console.log('Decembar');
        break;

}

