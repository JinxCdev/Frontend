let str_nombre = "Jinson";
let str_apellido = "Castillo";

let estudiante = str_nombre +" "+str_apellido;
console.log(estudiante);

let estudianteMayus = str_nombre +" "+str_apellido;
console.log(estudianteMayus.toUpperCase());

let estudianteMinus = str_nombre +" "+str_apellido;
console.log(estudianteMinus.toLowerCase());

let cadena = estudiante.length;
console.log(cadena);

let str_letra = str_nombre.charAt(0);
console.log(str_letra);

let str_letra1 = str_apellido.charAt(7);
console.log(str_letra1);

let str_sinEspacios = estudiante.trim();
console.log(str_sinEspacios.length);

let contiene = estudiante.includes("Jinson");
console.log(contiene);