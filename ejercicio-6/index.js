//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
//usuario de la siguiente forma : (suponiendo que indica 30).
//30303030303030303030303030303030303
//2828282828282828282828282
//.....
//333
//1
let numero = prompt("Ingresa el numero de repeticiones para la piramide inversa");
numero = Number(numero);
let i, repeticion;

    for (i = numero; i >= 1; i--) {
        
        for (repeticion = i; repeticion >=1; repeticion--) {
           
            document.write(i);
        }
       
        document.write("<br>");
    }