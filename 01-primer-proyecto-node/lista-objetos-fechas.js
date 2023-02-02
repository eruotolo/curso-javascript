// LISTAS ARRAY O ARREGLO
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(2, "Hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = 3;
lista3[1] = "Hola 3";
lista3[2] = true;
lista3[3] = undefined;
lista3[4] = null;

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// OBJETOS (se definen diferente tipos de atributos)
const movil = {
    altura: 10,
    anchura: 5,
    marca: "iPhone",
    isWhite: false,
    contactos: ["Mariano", "Victoria", "Enzo", "Luis"], //Array
    tarjeta : {                                         //Object
        marca: "Sandisk",
        tamaño: 10,
    },
}
movil.marca = "Samsung";
movil.anyo = 2021;

console.log(movil);

// FECHAS
// Libreria de apoyo: moment.js
const ahora = new Date();           // Definir fecha ahora
console.log(ahora);

const mili = new Date(10);    // Saber fecha en milisegundos
console.log(mili);

const cadena = new Date("march 25,2023");
console.log(cadena);

const valores = new Date(2023,0,25);
console.log(valores);

const dias = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();
const hora = ahora.getHours();

console.log(dias);
console.log(mes);
console.log(año);
console.log(hora);

