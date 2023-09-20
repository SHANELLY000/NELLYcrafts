
// Utilizando la palabra clave var
var nombre = "Shania";

// Utilizando la palabra clave let
let nombre = "Shania";

// Utilizando la palabra clave const (constante)
const nombre = "Shania";

//
var edad = 25;
console.log(edad);

//
var esEstudiante = true;
var esEstudiante = false;
var esEstudiante = true;
console.log(esEstudiante);

//
function sumar(a, b) {
    if (a > b) {
    return true;
    } else {
    return false;
    }

}var resultado = sumar(5, 3);
  console.log(resultado); // Imprimirá "true" en la consola

function esMayor(a, b) {
    return a > b;
}

//
var resultado = esMayor(5, 3);
console.log(resultado); // Imprimirá "true" en la consola

//
var num = 42;

if (num > 0) {
console.log("El número es positivo.");
} else if (num < 0) {
console.log("El número es negativo.");
} else {
console.log("El número es cero.");
}

//
var edad = 20;

if (edad >= 18) {
console.log("Eres mayor de edad");
} else {
console.log("Eres menor de edad");
}

//
var colores = ["rojo", "azul", "verde", "amarillo", "rosa"];
console.log(colores[0]); // Imprimirá "rojo" en la consola
var colores = ["rojo", "azul", "verde", "amarillo", "rosa"];
console.log(colores.length);
var colores = ["rojo", "azul", "verde", "amarillo", "rosa"];

for (var i = 0; i < colores.length; i++) {
console.log(colores[i]);
}