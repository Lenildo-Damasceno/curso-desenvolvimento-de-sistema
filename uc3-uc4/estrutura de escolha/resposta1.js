import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("=====CONVERSOR DE MOEDAS PELA TAXA DO CAMBIO DO DIA====");
let valorReais = Number(prompt("INSIRA SEU VALOR EM REAIS R$: "));
console.log("ESCOLHA A MOEDA QUE DESEJA CONVERTER:");
console.log("1. Dólares");
console.log("2. Euros");
console.log("3. Libras");
console.log("4. Pesos");
console.log("5. Francos");
let opcao = Number(prompt("Digite o número da moeda que deseja converter: "));

let valorEmDolares = valorReais / 5.424;
let valorEmEuros = valorReais / 6.353;
let valorEmLibras = valorReais / 7.326;
let valorEmPesos = valorReais / 0.0042;
let valorEmFrancos = valorReais / 6.753;

switch (opcao) {
  case 1:
    console.log("Dólares: " + valorEmDolares.toFixed(2));
    break;
  case 2:
    console.log("Euros: " + valorEmEuros.toFixed(2));
    break;
  case 3:
    console.log("Libras: " + valorEmLibras.toFixed(2));
    break;
  case 4:
    console.log("Pesos: " + valorEmPesos.toFixed(2));
    break;
  case 5:
    console.log("Francos: " + valorEmFrancos.toFixed(2));
    break;
  default:
    console.log("Número inválido");
}

console.log("VOCÊ TEM R$ " + valorReais.toFixed(2) + " EQUIVALENTE A:");
console.log("- " + valorEmDolares.toFixed(2) + " DÓLARES");
console.log("- " + valorEmEuros.toFixed(2) + " EUROS");
console.log("- " + valorEmLibras.toFixed(2) + " LIBRAS");
console.log("- " + valorEmPesos.toFixed(2) + " PESOS");
console.log("- " + valorEmFrancos.toFixed(2) + " FRANCOS");
  