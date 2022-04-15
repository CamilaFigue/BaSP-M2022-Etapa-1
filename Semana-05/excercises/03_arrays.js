// Arrays

// excercise a

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log ("ex03-arrays A: Los meses 5 y 11 son:", meses[4], "y", meses[10]);

// excercise b

var alfabaticamenteMeses = meses.slice();

console.log ("ex03-arrays B: Meses ordenados alfabeticámente:", alfabaticamenteMeses.sort());

// excercise c

meses.unshift("Primer elemento");
meses.push("Ultimo elemento");

console.log ("ex03-arrays C: Agregar un elemento al principio y al final del array:", meses);

// excercise d

meses.shift();
meses.pop();

console.log ("ex03-arrays D: Quitar un elemento del principio y del final del array:", meses);

// excercise e

console.log ("ex03-arrays E: Orden invertido del array:", meses.reverse());

// excercise f 

console.log ("ex03-arrays F: Separación de meses con guión:", meses.join(" - "));

// excercise g

console.log ("ex03-arrays F: Copia de meses de mayo a noviembre:", (meses.reverse()).slice(4,11));