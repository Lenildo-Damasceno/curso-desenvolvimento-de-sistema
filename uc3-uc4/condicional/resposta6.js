import PromptSync from "prompt-sync";
const prompt = PromptSync();

let carro = 12,
  moto = 7,
  caminhao = 25;
let total,
  ExtraCarroMoto = 3,
  ExtraCaminhao = 5;

console.log("ESTACIONAMENTO SENAC");
let tipoVeiculo = prompt(
  "Digite o tipo do veículo (carro, moto, caminhao): "
).toLowerCase();
let horasEstacionado = parseInt(
  prompt("Digite a quantidade de horas estacionado: ")
);

if (tipoVeiculo === "carro") {
  if (horasEstacionado > 2) {
    total = carro + (horasEstacionado - 2) * ExtraCarroMoto;
  } else {
    total = carro;
  }
  console.log(`O valor total para o carro é R$ ${total.toFixed(2)}`);
} else if (tipoVeiculo === "moto") {
  if (horasEstacionado > 2) {
    total = moto + (horasEstacionado - 2) * ExtraCarroMoto;
  } else {
    total = moto;
  }
  console.log(`O valor total para a moto é R$ ${total.toFixed(2)}`);
} else if (tipoVeiculo === "caminhao") {
  if (horasEstacionado > 2) {
    total = caminhao + (horasEstacionado - 2) * ExtraCaminhao;
  } else {
    total = caminhao;
  }
  console.log(`O valor total para o caminhão é R$ ${total.toFixed(2)}`);
} else {
  console.log(
    "Tipo de veículo inválido. Por favor, digite 'carro', 'moto' ou 'caminhao'."
  );
}