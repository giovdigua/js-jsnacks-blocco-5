var zucchine = [
    {
        varieta:'bianca',
        peso: 3 ,
        altezza: 6
    },
    {
        varieta:'spinosa',
        peso: 4 ,
        altezza: 16
    },
    {
        varieta:'verde',
        peso: 8 ,
        altezza: 26
    },
    {
        varieta:'lunga',
        peso: 7 ,
        altezza: 10
    },
    {
        varieta:'bianca',
        peso: 8 ,
        altezza: 15
    },
    {
        varieta:'spinosa',
        peso: 4 ,
        altezza: 18
    },
    {
        varieta:'verde',
        peso: 3 ,
        altezza: 22
    },
    {
        varieta:'lunga',
        peso: 7 ,
        altezza: 20
    },
    {
        varieta:'bianca',
        peso: 7 ,
        altezza: 9
    },
    {
        varieta:'spinosa',
        peso: 14 ,
        altezza: 13
    },
    {
        varieta:'verde',
        peso: 8 ,
        altezza: 21
    },
    {
        varieta:'lunga',
        peso: 25 ,
        altezza: 14
    }
];

var zucchineMin15 = [];
var zucchineMag15 = [];

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].altezza <= 15) {
        zucchineMin15.push(zucchine[i]);
    } else {
        zucchineMag15.push(zucchine[i]);
    }zucchine[i]
}
var sommaMag15 = 0;
var sommaMin15 = 0;

for (var i = 0; i < zucchineMag15.length; i++) {
    sommaMag15+= zucchineMag15[i].peso;
}

for (var i = 0; i < zucchineMin15.length; i++) {
    sommaMin15 += zucchineMin15[i].peso;
}
console.log(zucchineMag15);
console.log(zucchineMin15);
console.log(sommaMag15);
console.log(sommaMin15);
