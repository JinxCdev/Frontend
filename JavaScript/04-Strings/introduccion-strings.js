//Session 4 - Strings(cadenas de caracteres)
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola Soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comiilas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comiilas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";
let str_comiilas_simples2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\'';


console.log(str_comillas);
console.log(str_comiilas_simples);
console.log(str_comiilas_dobles);
console.log(str_comiilas_simples2);

//Comillas invertidas (backticks)
let str_backticks = `hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Jose";
let saludo = `hola, ${ nombre } Bienvenido`;

console.log(saludo);

//Plantillas HTML
let plantilla = `
<html>
    <h1>Pagina Web de ${ nombre }</h1>
    <p>Este es un parrafo</p>
</html>
`

console.log(plantilla);

//Introduccion de variables en HTML
let libros = ["Empieza por el por que", "El monje que vendio su Ferrari", "El poder del ahora"];

