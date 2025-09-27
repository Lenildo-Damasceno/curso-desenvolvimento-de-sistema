import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor;

let consumo = Number(prompt("Digite o consumo em KWh: "));
let pagamentoEmDia = Number(prompt("O pagamento está em dia? Digite 1 para SIM ou 2 para NÃO: "));

if (consumo <= 100) {
    valor = consumo * 1.2;
} else {
    valor = consumo * 1.7;
}

if (pagamentoEmDia === 2) { // 2 significa que o pagamento está atrasado
    valor *= 1.05; // Aplica multa de 5%
}

console.log("O valor da conta de energia é R$ " + valor.toFixed(2));