import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("=====CALCULADORA CIENTÍFICA====");
console.log("Escolha a operação que deseja realizar:");
console.log("1. Adição");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");
console.log("5. Raiz Quadrada");
console.log("6. Potenciação");    


let opcao = Number(prompt("Digite o número da operação desejada: "));
let num1, num2;

if (opcao === 5) {
  // Para raiz quadrada, só pede um número
  num1 = Number(prompt("Digite o número para calcular a raiz quadrada: "));
} else {
  // Para as demais operações, pede dois números
  num1 = Number(prompt("Digite o primeiro número: "));
  num2 = Number(prompt("Digite o segundo número: "));
}

if(num2 === 0 && opcao === 4) {
  console.log("Erro: Divisão por zero não é permitida.");
} else {
  switch (opcao) {
    case 1:
      console.log("Resultado: " + (num1 + num2));
      break;
    case 2:
      console.log("Resultado: " + (num1 - num2));
      break;
    case 3:
      console.log("Resultado: " + (num1 * num2));
      break;
    case 4:
    console.log("Resultado: " + (num1 / num2));
    break;
    case 5:
      console.log("Resultado: " + Math.sqrt(num1));
      break;
    case 6:
      console.log("Resultado: " + Math.pow(num1, num2));
      break;
    default:
      console.log("Opção inválida.");
  }
}
  