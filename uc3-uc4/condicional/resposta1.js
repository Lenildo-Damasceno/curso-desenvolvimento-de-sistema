const PromptSync = require("prompt-sync");
const prompt = PromptSync();

console.log("=== Controle de Velocidade ===");

let limite = parseFloat(prompt("Digite a VELOCIDADE PERMITIDA: "));
let velocidade = parseFloat(prompt("Digite a velocidade do carro (em km/h): "));

if (velocidade > limite) {
    let excesso = velocidade - limite;

    if (excesso <= (limite * 0.1)) {
        console.log("ATENÇÃO: ACIMA DO PERMITIDO, MULTA LEVE");
    } else {
        console.log("ATENÇÃO: ACIMA DO PERMITIDO, MULTA GRAVE");
    }
} else {
    console.log("Velocidade dentro do limite permitido.");
}