// Ülesanne 03
// Jörn Markus Toomingas
// 20.10.2026

// Soiduaeg ja kaugus
let soidukaugus = 35; //min
let kiirus = 20; //kmh

let soiduaeg = soidukaugus / kiirus; // tundi

console.log(soiduaeg);

// Postituse kuvamine
let postitus = 137;
let max_postitus = 10;

let lehekülgi = parseInt(postitus / max_postitus) + 1;
let viimaselLehel = postitus % max_postitus;

console.log(lehekülgi); // 14
console.log(viimaselLehel); // 7

// Serveri töökulu

let serveri_voimsus = 400; //vatti (W)
let elektri_hind = 9.69; //senti/kWh

let kwh = serveri_voimsus / 1000; //kW
let kulud = kwh * elektri_hind; //senti/kWh

console.log(kulud);