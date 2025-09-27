import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Define os valores mínimo e máximo para saque
const minimo = 10;
const maximo = 1000;

console.log("CAIXA ELETRONICO");
let saque = Number(
  prompt("Digite o valor que deseja sacar (Mínimo 10 e Máximo 1000): ")
);

// Verifica se o valor está dentro do permitido
if (saque < minimo || saque > maximo) {
  console.log(`VALOR INVÁLIDO. O valor deve ser entre ${minimo} e ${maximo}`);
} else {
  // Calcula a quantidade de notas de 100
  let notas100 = Math.floor(saque / 100); // Notas de 100
  let resto = saque % 100;

  // Calcula a quantidade de notas de 50
  let notas50 = Math.floor(resto / 50); // Notas de 50
  resto = resto % 50;

  // Calcula a quantidade de notas de 20
  let notas20 = Math.floor(resto / 20); // Notas de 20
  resto = resto % 20;

  // Calcula a quantidade de notas de 10
  let notas10 = Math.floor(resto / 10); // Notas de 10
  resto = resto % 10;

  // Calcula a quantidade de notas de 5
  let notas5 = Math.floor(resto / 5); // Notas de 5
  resto = resto % 5;

  // Calcula a quantidade de notas de 2
  let notas2 = Math.floor(resto / 2); // Notas de 2
  resto = resto % 2;

  // Exibe a quantidade de cada nota, se houver
  if (notas100 > 0) console.log(`Notas de 100: ${notas100}`); // Mostra notas de 100
  if (notas50 > 0) console.log(`Notas de 50: ${notas50}`); // Mostra notas de 50
  if (notas20 > 0) console.log(`Notas de 20: ${notas20}`); // Mostra notas de 20
  if (notas10 > 0) console.log(`Notas de 10: ${notas10}`); // Mostra notas de 10
  if (notas5 > 0) console.log(`Notas de 5: ${notas5}`); // Mostra notas de 5
  if (notas2 > 0) console.log(`Notas de 2: ${notas2}`); // Mostra notas de 2

  // Se sobrar algum valor, não é possível sacar com as notas disponíveis
  if (resto > 0) {
    console.log(`Valor restante não pode ser sacado: R$${resto}`); 
  }
}
//ATIVIDADE PRONTA