import PromptSync from "prompt-sync";
const prompt = PromptSync();


console.log ("VERIFICAÇÃO DE ANO BI-SSEXTO")
let ano = Number(prompt("Digite o ano Para Verificação com 4 digito ex: 1990 : "));
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`O ano de ${ano} é bissexto.`);
} else {  
    console.log(`O ano de ${ano} não é bissexto.`);
}