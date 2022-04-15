//Strings

// excercise a

var text = "CamilaFigueroa";

console.log ("ex02-strings A: Todo mayuscula:", text.toUpperCase());

// excercise b 

var text2 = "CamilaFigueroa";
var textCortado = text2.substring(0,5);

console.log ("ex02-strings B: Las primeras cinco letras:", textCortado);

//excercise c 

var text3 = "CamilaFigueroa";
var textUltTres = text3.substring(text3.length - 3);

console.log ("ex02-strings C: Ultimas tres letras:", textUltTres);

//excercise d

var text4 = "camila Figueroa";
var primerLetraMayuscula = (text4.substring(0,1)).toUpperCase() + (text4.substring(1)).toLowerCase();

console.log ("ex02-strings D: Primer letra en mayuscula y el resto en minuscula:", primerLetraMayuscula);

//excercise e

var text5 = "Camila Figueroa";
var espacioBlanco = text5.indexOf(" ");

console.log ("ex02-strings E: El espacio en blanco se encuentra en la posición:", espacioBlanco);

//excercise f

var text6 = "camila figueroa";
var espacio = text6.indexOf(" ");
var nuevoString = (text6.substring(0,1)).toUpperCase() + 
(text6.substring(1,espacio)).toLowerCase() + 
(text6.substring(espacio,espacio+2)).toUpperCase() + 
(text6.substring(espacio+2)).toLowerCase();

console.log ("ex02-strings F: Ambas palabras con la primer letra en mayúscula y las demás minúsculas:", nuevoString);