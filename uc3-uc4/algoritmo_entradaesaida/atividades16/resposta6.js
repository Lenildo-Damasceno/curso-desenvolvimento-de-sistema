import promptSync from "prompt-sync";
const prompt = promptSync();

const area_m2 = Number(prompt("Informe a àrea que irá ser pintada em m² => "));
let total_litros = (area_m2 / 6) * 1.1; //1.10 representando 100% + 10% do valor
let result_latas = Math.ceil(total_litros / 18); //arrendando para cima, assim sabe-se o total só de latas
let result_galoes = Math.ceil(total_litros / 3.6);

console.log(
  `\nCaso o usuário opte por pintar os ${area_m2}m², precisará de ${total_litros.toFixed(
    2
  )} litros.`
);
console.log(`O mesmo terá essas opções de uso:`);
console.log(`
    Usando latas de tinta com 18 litros = ${Math.ceil(
      total_litros / 18
    )} lata(s) pagando R$${result_latas * 99};
    Usando galões de 3,6 litros = ${Math.ceil(
      total_litros / 3.6
    )} galõe(s) pagando R$${result_galoes * 25}\n`);

let latas = Math.floor(total_litros / 18); //arrendondando para baixo, assim não preciso pegar mais uma lata
let faltante = total_litros - latas * 18; // identificando o faltante de latas para preencher com galões
let galoes = Math.ceil(faltante / 3.6); // preenchendo o faltante com galões arredondando para cima

console.log(
  `Caso o usuário queira aproveitamento, ele também pode comprar:
    ${latas} latas e ${galoes} galões.
    O preço final ficaria = R$${latas * 99 + galoes * 25}`
);// ok
