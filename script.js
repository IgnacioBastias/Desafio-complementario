
let Opcion = 0;
let Opcion1 = 0;
let Valor = 0;
let resultado = 0;
const numeros = {
    numerosTotal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    numerosRojos: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    numerosNegros: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    numerosPares: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    numerosImpares: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    cero: [0]
}

const Pleno = () => {
    let numb = 0;
    do {
        Opcion1 = Number(prompt(`Elige un Numero del 1 al 36`));
        numb = numeros.numerosTotal.some(Valor => Valor === Opcion1);
    } while (numb === false)
    alert(`Elegiste el N°${Opcion1}`);
}
const Girar = () => {
    resultado = Math.round(Math.random() * 36);
    alert(`La ruleta salio ${resultado}`);
}

const ResultadoPleno = () => {
    if (Opcion1 === resultado) {
        alert("🤑 ¡Ganaste! 🤑");
    } else {
        alert("😢 Gana la Casa 😢");
    }
}

const Resultado = () => {
    const resultadoFinal = Valor.includes(resultado);
    console.log(resultadoFinal)
    if (resultadoFinal === false) {
        alert("😢 Gana la Casa 😢");
    } else {
        alert("🤑 ¡Ganaste! 🤑");
    }
}
alert(`  ## 🎯 Bienvenido a la ruleta 🎯 ##  `);
do {
    Opcion = Number(prompt(`
      1 Numero
      2 Rojo
      3 Negro
      4 Par
      5 Impar
      6 Cero
      7 Salir
    `))
    switch (Opcion) {
        case 1: {
            Valor = numeros.numerosTotal;
            Pleno();
            Girar();
            ResultadoPleno();
            break;
        }
        case 2: {
            alert(`🔴 Elegiste Numeros Rojos 🔴`);
            Valor = numeros.numerosRojos;
            Girar();
            Resultado();
            break;
        }
        case 3: {
            alert(`⚫ Elegiste Numeros Negros ⚫`);
            Valor = numeros.numerosNegros;
            Girar();
            Resultado();
            break;
        }
        case 4: {
            alert("👀 Elegiste Numeros Pares 👀");
            Valor = numeros.numerosPares;
            Girar();
            Resultado();
            break;
        }
        case 5: {
            alert("👁 Elegiste Numeros Impares  👁");
            Valor = numeros.numerosImpares;
            Girar();
            Resultado();
            break;
        }
        case 6: {
            alert("Elegiste el N°0");
            Valor = numeros.cero;
            Girar();
            Resultado();
            break;
        }
        case 7: {
            alert("🙌 Gracias por visitarnos 🙌");
            break;
        }
        default: {
            alert("❌ Dato no valido ❌");
            break;
        }
    }
} while (Opcion !== 7);