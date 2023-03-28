//Princiaples operaciones aridmetias 
let a = 3.1;
let b = 4.1;

//Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicacion
console.log(a * b);

//Division
console.log(a / b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a);

let a_s = a.toString();
console.log(typeof a_s);

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);

//.toFixed(x) - Limita el numero de decimales al valor x
console.log(d.toFixed(2));

//.toPrecision(x) - limita el numero de cifras significativas
console.log(d.toPrecision(3))