// Funciones
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

// excercise a

function suma(a, b) {
    return a + b;
}

var resultado = suma(25, 22);
console.log("ex06-Functions A: El resultado es", resultado);

//excercise b

function numeroValido(a, b) {
    if (isNaN(a, b)) {
        return window.alert("ex06-Functions B: Error, uno de los parametros no es un numero");
    } else {
        return a + b;
    }
}

console.log("ex06-Functions B: Resultado:", numeroValido(33, 22));
console.log("ex06-Functions B: Resultado:", numeroValido('c', 22));

//excercise c 

function validateInteger(num) {
    if (Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
}

console.log("ex06-Functions C: Resultado:", validateInteger(22));
console.log("ex06-Functions C: Resultado:", validateInteger(0.22));

//excercise d

function validarEntero(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 + num2;
    } else {
        return window.alert("ex06-Functions D: Error, uno de los parametros no es un numero entero");
        Math.round(num1);
        Math.round(num2);
    }
}

console.log("ex06-Functions D: Resultado:", validarEntero(22, 44));
console.log("ex06-Functions D: Resultado:", validarEntero(0.22, 0.44));

//excercise e

function suma2(a, b) {
    return validarEntero(a, b);
}

var resultado2 = suma2(22, 0.44);
console.log("ex06-Functions E: Resultado:", resultado2);