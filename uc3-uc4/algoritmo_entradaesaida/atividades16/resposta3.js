import PromptSync from "prompt-sync";
const prompt = PromptSync();

let altura, largura, area, perimetro;
console.log("Cálculo da área e perímetro de um retângulo");
altura = parseFloat(prompt("Digite a altura do retângulo: "));
largura = parseFloat(prompt("Digite a largura do retângulo: "));
area = altura * largura;
perimetro = 2 * (altura + largura);
console.log(`A área do retângulo é: ${area}`);
console.log(`O perímetro do retângulo é: ${perimetro}`);
