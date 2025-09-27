import PromptSync from "prompt-sync";
const prompt = PromptSync();


console.log( "Bem-vindo(a) ao nosso simulador de empréstimo.");

const salarioMensal = Number(prompt("Para começar, por favor, informe seu salário mensal: R$ "));
const valorSolicitado = Number(prompt("Ótimo! Agora, digite o valor que você deseja emprestar: R$ "));
const numeroDeParcelas = Number(prompt("Em quantas parcelas você gostaria de pagar? "));




const margemPermitida = salarioMensal * 0.30;


const jurosMensal = valorSolicitado * 0.035;


const valorTotalAPagar = valorSolicitado + (jurosMensal * numeroDeParcelas);


const valorDaParcela = valorTotalAPagar / numeroDeParcelas;


// A condição verifica se a parcela cabe na margem de 30% do salário
if (valorDaParcela > margemPermitida) {
    console.log("\n------------------------------------");
    console.log(" Empréstimo Negado");
    console.log("------------------------------------");
    console.log(`O valor da parcela (R$ ${valorDaParcela.toFixed(2)}) excede 30% do seu salário, que é de R$ ${margemPermitida.toFixed(2)}.`);
    console.log("Tente diminuir o valor do empréstimo ou aumentar o número de parcelas.");
} else {
    console.log("\n------------------------------------");
    console.log(" Parabéns! Seu empréstimo foi APROVADO!");
    console.log("------------------------------------");
    console.log(`Valor solicitado: R$ ${valorSolicitado.toFixed(2)}`);
    console.log(`Número de parcelas: ${numeroDeParcelas}x`);
    console.log(`Valor de cada parcela: R$ ${valorDaParcela.toFixed(2)}`);
    console.log(`Taxa de juros mensal: 3.5%`);
    console.log(`Custo total dos juros: R$ ${(jurosMensal * numeroDeParcelas).toFixed(2)}`);
    console.log(`Valor total a ser pago: R$ ${valorTotalAPagar.toFixed(2)}`);
    console.log("------------------------------------");
}
