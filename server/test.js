// const { FORMERR } = require("dns");
// const moment = require("moment")
// // let app = false
// // app ? console.log("Yay") : console.log("Blams");;

// let today = moment() + 1

// console.log(today);

// let A = [2, 3, 2, 4, 5, 1, 3]
let B = [
	{
		nama: 'Anton',
		Tahun: 2020,
		Jumlah: 500,
	},
	{
		nama: 'Budhi',

		Tahun: 2021,
		Jumlah: 200,
	},

	{
		nama: 'Ari',
		Tahun: 2020,
		Jumlah: 300,
	},

	{
		nama: 'Sonny',
		Tahun: 2020,
		Jumlah: 400,
	},

	{
		nama: 'Anton',
		Tahun: 2021,
		Jumlah: 400,
	},
	{
		nama: 'Anton',
		Tahun: 2022,
		Jumlah: 400,
	},
	{
		Tahun: 2022,
		Jumlah: 400,
	},
	{
		Tahun: 2022,
		Jumlah: 400,
	},
	{
		Tahun: 2021,
		Jumlah: 400,
	},
];

const hasil = [];

B.map((item) => {
	let penm = 0;

	let index = hasil.findIndex((a) => a.Tahun == item.Tahun);
	if (index > -1) {
		hasil[index].Jumlah += item.Jumlah;
	} else {
		hasil.push(item);
	}
});
// console.log(B);
console.log(hasil);

// hasil = [
//     { Tahun: 2020, Jumlah: 1000 },
//     { Tahun: 2021, Jumlah: 1200 },
//     { Tahun: 2022, Jumlah: 1500 },
// ]

// function mergeData(data) {
//     let year = {}

//     return data.reduce((acc, item) => {
//         if (year[item.Tahun] === undefined) {

//             acc.push(item)
//             year[item.Tahun] = acc.length - 1
//         } else {
//             acc[year[item.Tahun]].Jumlah += item.Jumlah
//         } return acc
//     }, [])
// }

console.log();
// console.log(mergeData(B));

// let Aa = 1;
// let Bb = 2;
// let Cc = 3;
// if (Cc == Bb || Cc !== Aa) console.log('ok');
// console.log(Cc);

let a = new Date();
console.log(a);
