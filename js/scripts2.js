// - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], 
// eres mayor/menor de edad" en función de la edad que le pasemos.
function legalAge(name,age){
    if(age>=18){
        return'Hola '+name+', eres mayor de edad';
    }
    return 'Hola '+name+', eres menor de edad'
}
// - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.
function largestNumber(a,b){
    if(a>b){
        return a;
    }
    return b;
}
// Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.
function negative(number){
    if(number<0){
        return 'negativo';
    }
    return 'positivo';
}
// - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", 
// si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"
function media(grade1,grade2,grade3){
    total=(grade1+grade2+grade3)/3;
    if(total<5){
        return 'Suspenso';
    }else if(total>=5 && total<8){
        return 'Aprobado';
    }
    return 'Matricula de Honor';
}
// - Crea una función que reciba tres números y devuelva el mayor de ellos.
function largestNumber2(number1,number2,number3){
    if(number1>number2 && number1>number3){
        return number1;
    }else if(number2>number3 && number2>number1){
        return number2;
    }
    return number3;
}
// - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, 
// "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. 
// Si no es divisible por ninguno, devuelve el número.
function divisibleNumber(number){
    if(number%3===0 && number%5===0){
        return 'Es divisible por 3 y por 5';
    }else if(number%3===0){
        return 'Es divisible por 3';
    }else if(number%5===0){
        return 'Es divisible por 5';
    }
    return number;
}

// - Crea una función que reciba un número entero y determine si es par o impar. 
// Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.
function oddOrEven(number){
    if(number%2===0){
        return'Es un numero par';
    }
     return 'Es un numero impar';
    
}

// - Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, 
// pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" 
// o "No es un año bisiesto" en función del resultado

function leapYear(year){
    if(year%400===0){
        return 'Es Bisiesto';
    }else if(year%100===0){
        return 'No es Bisiesto';
    }else if(year%4===0){
        return 'Es Bisiesto';
    }
}

// - Crea una función que reciba dos valores y los sume, la función debe sumar los valores aunque se los mandemos en formato
//  string y SÓLO debe convertirlos a number si llegan como string.

function typeOffValue(a,b){
    if(typeof a && typeof b === "string"){
        return (parseInt(a)+parseInt(b));
    }
     return a+b;
}