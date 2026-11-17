// Ülesanne 05
// Jörn Markus Toomingas
// 17.11.2026


// Temperatuur
let temperatuur = 25;
if (temperatuur >= 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur < 15) {
    console.log("Jahe ilm!");
} else {
    console.log("Mõnus temperatuur!");
}

// Kasutajanime kontroll

const kasutajanimi = prompt("Sisesta kasutajanimi:");
if (kasutajanimi === "admin") {
    console.log("Tere, admin!");
} else {
    console.log("Tere, kasutaja!");
}

// Ürituse pileti hind

const piletityyp = "taispilet";
const vanus = 25;
