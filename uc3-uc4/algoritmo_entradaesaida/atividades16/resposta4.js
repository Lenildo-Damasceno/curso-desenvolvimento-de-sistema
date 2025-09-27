import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor,
  pess,
  valind,
  valtot,
  acre = 0.1,
  valindarre;
console.log(
  "Para saber o valor total e individual, digite os dados solicitados"
);
valor = Number(prompt("Digite o valor da conta R$ "));
pess = Number(
  prompt("Digite a quantidade de pessoas a ser dividida a conta: ")
);
valtot = valor + valor * acre;
valind = valtot / pess;
valindarre = Math.ceil(valind * 100) / 100;
console.log(
  "O valor total é R$ " +
    valtot.toFixed(2) +
    " e o valor para cada é R$ " +
    valindarre.toFixed(2)
);
