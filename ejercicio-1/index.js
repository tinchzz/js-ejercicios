// 1. Pide una nota (número). Muestra la calificación según la nota:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente 

let nota = prompt("Introducir nota (de 0 a 10)");

    if(isNaN(nota) || nota>10){
        alert("no es un numero o es mayor a 10, ingresalo de vuelta"); 
    }
    else {
        switch(nota){
            case '0': alert("Muy deficiente"); break;
            case '3': alert("Insuficiente"); break;
            case '5': alert("Suficiente"); break;
            case '7': alert("Bien"); break;
            case '8': alert("Notable"); break;
            case '10': alert("Sobresaliente"); break;
        }
    }

