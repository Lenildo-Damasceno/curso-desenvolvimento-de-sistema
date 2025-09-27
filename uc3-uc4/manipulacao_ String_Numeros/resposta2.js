import PromptSync from "prompt-sync" 
const prompt = PromptSync()



console.log ("================")
console.log (" GERADOR DE CUPONS ")

let cliente = prompt('DIGITE SEU NOME : ').toUpperCase();
let primeiraLetra = cliente[0].toUpperCase();
let numeroAleatorio = Math.trunc(Math.random() * (999 - 100 + 1) + 100);
let desconto = Math.trunc(Math.random() * (  25 - 5 + 1) + 5);

console.log(`OLÁ ${cliente} SEU CUPOM É ${primeiraLetra}${numeroAleatorio}-${desconto}%`);

