// For

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