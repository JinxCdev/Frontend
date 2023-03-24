//Sentencias Switch
let nota = 5;

switch (nota) {
    case 5:
        console.log("Enhorabuena, has optenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias haberlo echo mejor");
        break;
    case 3:
        console.log("Has optenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado, trabaja un poquito mas para la proxima");
        break;
    default:
        console.log("Error introduce una nota entre el 1 y el 5");
}