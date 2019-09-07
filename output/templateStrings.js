"use strict";

var nombre = "Carlos Arturo";
var edad = 23;
var pais = "Mexico";
console.log("La persona es " + nombre + " tiene " + edad + " y es de " + pais);
console.log("La persona es ".concat(nombre, ", tiene \n").concat(edad, " y es de ").concat(pais));