import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = Number(prompt("Digite um número menor que 1000: "));
if (numero <0 || numero>=1000){
    console.log ("NUMERO IVALIDO")
} else {
    let unidades = numero % 10;//
    let dezenas = parseInt((numero % 100) / 10);
    let centenas = parseInt(numero / 100);
    console.log(`Centenas: ${centenas}, Dezenas: ${dezenas}, Unidades: ${unidades}`);
} 