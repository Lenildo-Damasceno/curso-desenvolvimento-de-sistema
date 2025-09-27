import promptSync from "prompt-sync";
const prompt = promptSync();

const PrecoDosProdutos = 6.99;


console.log("=====================================================================================")
console.log (`LOJÃO BARATÃO DE SEU MANOEL TUDO A ${PrecoDosProdutos}R$, Tabela para Uso dos Caixas`)
console.log("=====================================================================================")

console.log(`Quantidade  - Preço  R$ `);
for (let i = 1; i <= 50; i++) {
     const total = (i * PrecoDosProdutos).toFixed(2);

    console.log(` ${i}              ${total}`);
    
}
//ok 