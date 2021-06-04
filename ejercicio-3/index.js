// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá
// indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de
// los números introducidos.

let suma = 0;
do {
    let numero = prompt("Ingresa un numero");

    if(isNaN(numero)) {
        alert("No es un numero, ingresa de vuelta")
    }
    else {
        numero = Number(numero);
        suma = suma + numero;
    }

} while(confirm("Continuar?"));

alert(suma);
