import PromptSync from "prompt-sync";
const prompt = PromptSync();
let idade, dias;

idade = prompt("Digite sua idade: ");
dias = idade * 365;
console.log("Você viveu aproximadamente " + dias + " dias.");
