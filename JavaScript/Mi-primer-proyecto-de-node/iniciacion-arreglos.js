//Listas, array o arreglo
const lista = [1, "Hola", true, undefined, null]
const lista2 = new Array(1, "Hola", true, undefined, null)
const lista3 = new Array(3);
lista3[0] = "Hola";
const lista4 = [lista, lista2, lista3]; 

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil =  {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raul"],
    tajeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

console.log(movil.tajeta.marca);



//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis);