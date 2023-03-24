//Bucle For
/* Autoincremento
    i = i + 1
    i += 1
    i++
*/

for(let i = 1; i < 10; i++) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//Estructura for...of
for(let valor of lista) {
    console.log(valor);
}

//Estructura ForEach
lista.forEach(lista => {
    console.log(lista);
});

//Estructura for....in
let persona = {
    nombre: 'Jinson',
    apellido: 'Castillo',
    edad: 22,
    isDeveloper: true
}

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}