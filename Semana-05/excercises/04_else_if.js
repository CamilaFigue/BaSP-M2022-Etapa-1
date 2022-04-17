// If - else

// excercise a

var numAleatorio = Math.random();

if (numAleatorio >= 0.5) {
    console.log("ex04-if_else A: Greater than 0,5", numAleatorio);
} else {
    console.log("ex04-if_else A: Lower than 0,5", numAleatorio);
}

// excercise b

var numAleatorio2 = Math.random() * 100;

numAleatorio2 = Math.round(numAleatorio2);

console.log(numAleatorio2);

if (numAleatorio2 < 2) {
    console.log("ex04-if_else A: Bebe");
} else if (numAleatorio2 <= 12) {
    console.log("ex04-if_else A: Niño");
} else if (numAleatorio2 <= 19) {
    console.log("ex04-if_else A: Adolescente");
} else if (numAleatorio2 <= 30) {
    console.log("ex04-if_else A: Joven");
} else if (numAleatorio2 <= 60) {
    console.log("ex04-if_else A: Adulto");
} else if (numAleatorio2 <= 75) {
    console.log("ex04-if_else A: Adulto Mayor");
} else {
    console.log("ex04-if_else A: Anciano");
}