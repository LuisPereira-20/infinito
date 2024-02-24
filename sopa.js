  // Lista de palabras
  const palabras = ["perro", "gato", "caballo", "vaca", "cerdo", "oveja", "gallina", "pato", "conejo", "loro",
  "rojo", "azul", "verde", "amarillo", "naranja", "morado", "negro", "blanco", "marrón", "gris",
  "pan", "leche", "queso", "carne", "pescado", "fruta", "verdura", "arroz", "pasta", "pizza",
  "España", "México", "Argentina", "Colombia", "Perú", "Chile", "Venezuela", "Ecuador", "Bolivia", "Uruguay",
  "Madrid", "Ciudad de México", "Buenos Aires", "Bogotá", "Lima", "Santiago de Chile", "Caracas", "Quito", "La Paz", "Montevideo"];

// Generar una sopa de letras infinita
function generarSopaLetras(ancho, alto) {
const sopaLetras = [];
for (let i = 0; i < alto; i++) {
const fila = [];
for (let j = 0; j < ancho; j++) {
fila.push(palabras[Math.floor(Math.random() * palabras.length)]);
}
sopaLetras.push(fila);
}
return sopaLetras;
}

// Imprimir la sopa de letras
function imprimirSopaLetras(sopaLetras) {
const sopaLetrasElement = document.getElementById("sopa-letras");
sopaLetrasElement.innerHTML = "";
for (let fila of sopaLetras) {
const filaElement = document.createElement("div");
for (let letra of fila) {
const letraElement = document.createElement("span");
letraElement.textContent = letra;
filaElement.appendChild(letraElement);
}
sopaLetrasElement.appendChild(filaElement);
}
}

// Buscar una palabra en la sopa de letras
function buscarPalabra(sopaLetras, palabra) 
for (let i = 0; i < sopaLetras.length; i++) 
for (let j = 0; j < sopaLetras[0].length; j++) 
// Buscar la palabra en horizontal
if (sopaLetras[i][j] === palabra[0]) {
let encontrado = true;
for (let k = 1; k < palabra.length; k++) {
if (sopaLetras[i][j + k] !== palabra[k]) {
encontrado = false;
break;
}
}
if (encontrado) {
return true;
}
}

// Buscar la palabra en vertical
if (sopaLetras[j][i] === palabra[0]) {
let encontrado = true;
for (let k = 1; k < palabra.length; k++) {
if (sopaLetras[j + k][i] !== palabra[k]) {
encontrado = false;
break;
}
}
if (encontrado) {
return true;
}
}

// Buscar la palabra en diagonal
if (sopaLetras[i][j] === palabra[0]) {
let encontrado = true;
for (let k = 1; k < palabra.length; k++) {
if (sopaLetras[i + k][j + k] !== palabra[k]) {
encontrado = false;
break;
}
}
if (encontrado) {
return true;
}
}

