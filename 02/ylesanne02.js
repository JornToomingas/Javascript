// Ülesanne 02
// Jörn Markus Toomingas
// 20.10.2026

// Kellaaeg
// Oodatav tulemus nt: "10:20:56AM"
let tund = 10;
let minut = 20;
let sekund = 56;

console.log(`${tund}:${minut}:${sekund}AM`);

// Tsitaat lause ees
let tsitaat1 = "Kes minevikku ei mäleta,";
let tsitaat2 = "see elab tulevikuta.";
let autor = "Juhan Liiv";

console.log(`"${tsitaat1} ${tsitaat2}" - ${autor}`);

// Mallide kasutamine

let Eesnimi = "Karl";
let Perenimi = "Kold";

// E-posti aadressi muutmine

let epost = "karl.kold@hkhk.edu.ee.com";

console.log(epost.replaceAll("hkhk.edu.ee", "gmail"));

// Andmerida analüüs
// Oodatav tulemus: "40.19.226.175" ja "mmartinovic0"
let andmed = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

console.log(andmed.replaceAll("1,Marshal,Martinovic,", "").replaceAll(",Male", ""));
