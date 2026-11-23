// Ülesanne 06
// Jörn Markus Toomingas
// 23.11.2026

// Positiivne ja negatiivne

let arv = 6.9;
if (arv > 0) {
    console.log("Arv on positiivne");
}
else {
    console.log("Arv on negatiivne");
}


// Restoran

let bron = Number(prompt("Mitu inimest on broneeringus?"));

switch (bron) {
  case 1:
  case 2:
    console.log("Valige laud kahele inimesele.");
    break;
  case 3:
  case 4:
    console.log("Valige laud neljale inimesele.");
    break;
  case 5:
  case 6:
    console.log("Valige laud kuuele inimesele.");
    break;
  default:
    console.log("Valige suur laud.");
}
