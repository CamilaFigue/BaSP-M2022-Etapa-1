// For
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

// excercise a

let animales = ["perro", "gato", "pajaro", "caballo", "vaca"];

for (let i=0; i < animales.length; i++) {

    window.alert(animales[i]);
}

// excercise b

for (let i=0; i < animales.length; i++) {

    animales[i] = animales[i].substring(0,1).toUpperCase() + animales[i].substring(1);

    window.alert(animales[i]);
}

// exercise c

let sentence = "";

for (let i=0; i < animales.length; i++) {

  sentence = sentence + " " + animales[i];
}

window.alert("Sentence:" + sentence);

// exercise d

let vacio = [];

for (let i=0; i < 10; i++) {
    
    vacio[i] = i;
}

console.log("ex05-for D: LLenar array ", vacio);