//Metodos de cadenas de  texto (parte 3)
//https://regexr.com

let texto_largo = 'Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer los plantas';

console.log(texto_largo.match(/los/g));
console.log(texto_largo.match(/Tito/g));
console.log(texto_largo.match(/mono/g));

//Si la palabra existe dentro del texto
console.log(texto_largo.includes("Tito"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("plantas"));