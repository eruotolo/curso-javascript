var variables;
let variableLet_;

// variable del tipo var
var a = 1;
console.log(a);

a = 4;
console.log(a);

// variable del tipo constante

const constante = "Hola soy una constante";
console.log(constante);
// const constante = "Adios"; // error

// variable del tipo let

let b = 3;
console.log(b);

b = 5;
console.log(b);

/*
 Diferencia entre Ley y Var
 var afecta a todo el código, y let afecta al bloque de código donde esta la variable
*/

var variable = "Hola soy una variable VAR";
for (let i = 0; i < 10; i++) {
    var variable = "Hola soy una variable";
}
console.log(variable);

let variableLet = "Hola soy una variable LET";
for (let i = 0; i < 10; i++) {
    let variableLet = "Hola soy una variable";
}
console.log(variableLet);

/////////////////////////

var num = 4;

console.log(typeof num);

num = "Hola soy num";

console.log(typeof num);