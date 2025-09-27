import promptSync from 'prompt-sync';
const prompt = promptSync();
//variaveis
let numerosdeentrada = []
let numerospares = []
let numerosimpares = []
//entrada de dados
for (let i = 0; i < 20; i++) {
    let numero;
    while (true) { //validando e forçando usuario a digitar numero valido
        let entrada = prompt("Digite o " + (i + 1) + "º número:");
        numero = Number(entrada);
        if (!isNaN(numero) && entrada.trim() !== "" && isFinite(numero)) {
            break;
        } else {
            console.log("Por favor, digite apenas números válidos!");
        }//fim do if
    }
    numerosdeentrada.push(numero);//adiciona numero ao vetor
    if (numero === 0) {
        break;
    }
}
for (let i = 0; i < numerosdeentrada.length; i++) { //separando pares e impares
    let numero = numerosdeentrada[i]
    if (numero % 2 === 0) {
        numerospares.push(numero)
    } else {
        numerosimpares.push(numero)
    }
} 
console.log("Números de Entrada:", numerosdeentrada) //mostrando numeros digitados
console.log("Números Pares:\n", numerospares)
console.log("Números Ímpares:\n", numerosimpares)

