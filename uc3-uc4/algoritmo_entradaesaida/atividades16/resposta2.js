import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nomeProduto = prompt("Digite o nome do produto: ");
const preco = parseFloat(prompt("Digite o preço do produto: "));
const desconto = parseFloat(prompt("Digite a porcentagem de desconto: "));

const valorDesconto = preco * (desconto / 100);
const precoFinal = preco - valorDesconto;

console.log("\nResumo:");
console.log("Produto:", nomeProduto);
console.log("Preço original: R$" + preco.toFixed(2));
console.log("Desconto: R$" + valorDesconto.toFixed(2));
console.log("Preço com desconto: R$" + precoFinal.toFixed(2));

//pronto
