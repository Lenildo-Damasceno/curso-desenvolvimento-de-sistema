import PromptSync from "prompt-sync";
const prompt = PromptSync();

let frase = prompt('Digite uma frase: ');

function verificarPalindromo(frase) {
  return frase === frase.split('').reverse().join('');
}

if (verificarPalindromo(frase)) {
  console.log(`"${frase}" é um palíndromo!`);
} else {
  console.log(`"${frase}" não é um palíndromo.`);
}

