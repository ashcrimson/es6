"use strict";

var texto = "Hola Mundo";
console.log(texto, "empieza con h:", texto.toLowerCase().startsWith("h"));
console.log(texto, "Termina con o:", texto.toLowerCase().endsWith("o"));
console.log(texto, "incluye la palabra Carlos:", texto.includes("Carlos"));
var amigos = ["Carlos", "Alejandro", "César", "Manuel"];
console.log(amigos.includes("Manuel"));
console.log(amigos.find(function (amigos) {
  return amigos.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === "Luis";
}));