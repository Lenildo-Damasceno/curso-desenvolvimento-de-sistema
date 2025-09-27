import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("SISTEMA DE TARIFA DE TRANSPORTE INTERMUNICIPAL");

let idade = Number(prompt("Digite sua idade: "));
let estudante = String(prompt("Você é estudante? (sim/não): ").toLowerCase());

//aninhado
if (idade <= 5) {
    console.log("Você tem direito à entrada gratuita.");
} else if (idade >= 6 && idade <= 17) {
    console.log("Você tem direito à meia tarifa.");
} else if (idade >= 18 && idade <= 59) {
    if (estudante === "sim") {
        console.log("Você tem direito à meia tarifa.");
    } else {
        console.log("Você paga a tarifa inteira.");
    }
} else if (idade >= 60) {
    console.log("Você tem direito à tarifa gratuita.");
}
