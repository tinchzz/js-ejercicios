// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar”
// deben mostrarse todas las cadenas concatenadas con un - (guión).

let concatenar = "";
do {
    let cadena = prompt("Ingresa una palabra");

    if (cadena=="") {
        concatenar = concatenar + cadena;
    }
    else {
        concatenar = concatenar + cadena + "-";
    }   


} while(confirm("Continuar?"));

alert(concatenar);