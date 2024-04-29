function sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

let continuar = true;

while (continuar) {
    alert("¿Qué operación deseas realizar?");
    let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: salir");

    if (operacion == 5) {
        continuar = false;
        alert("¡Hasta luego!");
    } else if (operacion >= 1 && operacion <= 4) {
        let numero1 = prompt("Ingresa el primer número:");
        let numero2 = prompt("Ingresa el segundo número:");

        let resultado;

        switch (parseInt(operacion)) {
            case 1:
                resultado = sumar(numero1, numero2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case 2:
                resultado = restar(numero1, numero2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case 3:
                resultado = dividir(numero1, numero2);
                alert(`El resultado de la división es: ${resultado}`);
                break;
            case 4:
                resultado = multiplicar(numero1, numero2);
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
        }
    } else {
        alert("Operación no válida. Por favor, elige una opción válida.");
    }
}
