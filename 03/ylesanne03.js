// Ülesanne 03
// Jörn Markus Toomingas
// 20.10.2026

// Soiduaeg ja kaugus
let soiduaeg = 35; //min
let soidukaugus = 20; //kmh

console.log

// Postituse kuvamine
let postitus = 137; 
let max_postitus= 10;
let jagamine = postitus / max_postitus;
let floatAsNumber = parseInt(jagamine);
console.log(floatAsNumber);

// Serveri töökulu

let serveri_voimsus = 400; //vatti (W)
let elektri_hind = 9.69; //senti/kWh

let kwh = serveri_voimsus / 1000; //kW
let kulud = kwh * elektri_hind; //senti/kWh

console.log(kulud);