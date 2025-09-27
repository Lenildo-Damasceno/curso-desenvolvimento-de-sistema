import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valorCompra, desconto, valorFinal;

console.log("Para saber quanto vai pagar na sua compra, digite as informações solicitadas.");
valorCompra = Number(prompt("Qual o valor da compra (R$): "));

if (valorCompra <= 100) {
    console.log(`A compra é de R$ ${valorCompra.toFixed(2)}\nNão houve desconto.\nO valor final é R$ ${valorCompra.toFixed(2)}`);
} else if (valorCompra > 100 && valorCompra <= 500) {
    desconto = valorCompra * 0.05;
    valorFinal = valorCompra - desconto;
    console.log(`A compra é de R$ ${valorCompra.toFixed(2)}\nO valor do desconto é R$ ${desconto.toFixed(2)}\nO valor final é R$ ${valorFinal.toFixed(2)}`);
} else {
    desconto = valorCompra * 0.10;
    valorFinal = valorCompra - desconto;
    console.log(`A compra é de R$ ${valorCompra.toFixed(2)}\nO valor do desconto é R$ ${desconto.toFixed(2)}\nO valor final é R$ ${valorFinal.toFixed(2)}`);
}

if (valorCompra >= 300) {
    console.log("Parabéns! Você ganhou um cupom bônus para usar na próxima compra!");
}