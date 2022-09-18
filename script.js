function eje1() {
    let diaSemana = prompt("¿Qué día es hoy?");
    switch (diaSemana) {
        case "lunes":

            alert("Hoy es lunes, debes caminar 10km.");


            break;
        case "martes":

            alert("Hoy es martes, debes tomar 2 litros de agua.");

            break;
        case "miércoles":

            alert("Hoy es miércoles, debes correr 5km.");

            break;
        case "jueves":

            alert("Hoy es jueves, debes comer sano.");

            break;
        case "viernes":

            alert("Hoy es viernes, no debes tomar alcohol.");

            break;
        case "sábado":

            alert("Hoy es sábado, debes comer proteinas(carne).");

            break;
        case "domingo":

            alert("Hoy es domingo, debes descansar.");

            break;
        default:

            alert("Escribe el día de la semana en minúsculas.");

    }
}
function eje2() {
    for (i = 20; i <= 70; i++) {

        document.write("El número es: " + i + "<br>");

    }

}
function eje3() {
    numero = prompt("Ingrese la cant de veces que quiera que se repita el texto");
    for (i = 0; i <= numero; i++) {
        document.write("Hola Mundo" + "<br>");
    }


} 