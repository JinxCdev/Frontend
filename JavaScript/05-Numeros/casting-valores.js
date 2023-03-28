//Operador .valueof() - Obtener valores numericos a partie de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

//NaN(Not a Number)- Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_dos = null;
console.log(numerador / divisor_dos);

//Como convertir los string a valores numericos como Number, parseInt y parseFloat
let numero = '5.89';
let numeroDos = 17.2;
console.log(typeof numero)
console.log(numero + numeroDos) //error en concepto;

console.log(Number(numero) + numeroDos);

console.log(parseInt(numero));
console.log(parseFloat(numero));


//Numeros hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex));

//Obtener los valores maximo y minimo en Js
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);