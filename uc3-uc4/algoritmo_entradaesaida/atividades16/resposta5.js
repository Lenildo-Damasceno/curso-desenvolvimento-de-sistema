import PromptSync from "prompt-sync";
const prompt = PromptSync();
let km,
  valkm = 5,
  valfix = 10,
  valfin,
  valarr;
console.log("Para saber o valor da entrega, digite as informações solicitadas");
km = Number(prompt("Digite a distância em km: "));
valfin = valfix + km * valkm;
valarr = Math.ceil(valfin * 100) / 100;
console.log("O valor da entrega é: " + valarr.toFixed(2));
