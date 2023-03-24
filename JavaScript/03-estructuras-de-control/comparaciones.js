//Comparaciones

//Igualdad
if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es igual a 5");
}

let a = 5;
let b = "5";

//Solo compara el valor
//compara el valor y el tipo
if(a == b){
    console.log("a es igual a b - Debil");
}

if (a === b) {
    console.log("a es igual a b - Fuerte");
}

let c = 4;
let d = 10;

if (c != d) {
    console.log("c es diferente de d - Debil");
}

if (c !== d) {
    console.log("c es diferente de d - Fuerte");
}

//comparacion mayor que y menor que
let max = 10;
let min = 5;

if (max > 5) {
    console.log("max es mayor que min");
}

if (max >= min) {
    console.log("max es mayor que min");
    
}