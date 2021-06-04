// Realizar una página con un script que calcule el valor de la letra de un número de DNI 
// (Documento nacional de identidad). El algoritmo para calcular la letra del dni es el siguiente: 
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M,
// Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
let resto = 0;
do {
    let dni = prompt("Ingresar dni");
    dni = Number(dni);
    if(dni=>0 && dni<=99999999){
        resto = dni%23;
        switch(resto) {
            case 0: alert("Al DNI: "+dni+" le corresponde la letra T"); break;
            case 1: alert("Al DNI: "+dni+" le corresponde la letra R"); break;
            case 2: alert("Al DNI: "+dni+" le corresponde la letra W"); break;
            case 3: alert("Al DNI: "+dni+" le corresponde la letra A"); break;
            case 4: alert("Al DNI: "+dni+" le corresponde la letra G"); break;
            case 5: alert("Al DNI: "+dni+" le corresponde la letra M"); break;
            case 6: alert("Al DNI: "+dni+" le corresponde la letra Y"); break;
            case 7: alert("Al DNI: "+dni+" le corresponde la letra F"); break;
            case 8: alert("Al DNI: "+dni+" le corresponde la letra P"); break;
            case 9: alert("Al DNI: "+dni+" le corresponde la letra D"); break;
            case 10: alert("Al DNI: "+dni+" le corresponde la letra X"); break;
            case 11: alert("Al DNI: "+dni+" le corresponde la letra B"); break;
            case 12: alert("Al DNI: "+dni+" le corresponde la letra N"); break; 
            case 13: alert("Al DNI: "+dni+" le corresponde la letra J"); break;
            case 14: alert("Al DNI: "+dni+" le corresponde la letra Z"); break;
            case 15: alert("Al DNI: "+dni+" le corresponde la letra S"); break; 
            case 16: alert("Al DNI: "+dni+" le corresponde la letra Q"); break;
            case 17: alert("Al DNI: "+dni+" le corresponde la letra V"); break;
            case 18: alert("Al DNI: "+dni+" le corresponde la letra H"); break; 
            case 19: alert("Al DNI: "+dni+" le corresponde la letra L"); break;
            case 20: alert("Al DNI: "+dni+" le corresponde la letra C"); break;
            case 21: alert("Al DNI: "+dni+" le corresponde la letra K"); break; 
            case 22: alert("Al DNI: "+dni+" le corresponde la letra E"); break;

        }
    }
    else {
        alert("DNI Incorrecto, ingresalo nuevamente");
    }


} while(confirm("Continuar?"));