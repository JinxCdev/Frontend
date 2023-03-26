//Metodos de cadenas de texto (parte 2)
let input = "Escorpio";
let db = "escorpio";

//tolowercase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Formas de concatenar dos cadenas de caracteres 
let str_1 = "Hola soy la primer cadena";
let srt_2 = "y yo soy la segunda cadena";

console.log(str_1.concat(" ",srt_2));
console.log(str_1 +" "+ srt_2);
console.log(`${str_1} ${srt_2}`);

//Eliminar espacios al inicio y al final
let str_3 = "  Hola soy un string con espacios al final.  ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4"; // ["H", "o", "l", "a", " ", "s", ......]

console.log(str_4.charAt(5));
console.log(str_4[5]);

//Optener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Jinson y me gusta el surf";

console.log(str_5.indexOf("me"));
console.log(str_5.charAt(18));
console.log(str_5.lastIndexOf("Jinson"))