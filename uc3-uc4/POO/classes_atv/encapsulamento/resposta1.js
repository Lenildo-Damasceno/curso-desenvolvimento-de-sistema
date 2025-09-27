import promptSync from "prompt-sync";
const prompt = promptSync();
import Cliente from './classes_resposta1.js';

let cliente1 = new Cliente();
cliente1.nome = prompt(`Digite o nome do Primeiro Cliente: `);
cliente1.endereco = prompt(`Digite o endereço de  ${cliente1.nome} : `);
cliente1.renda = Number(prompt(`Digite a Renda de ${cliente1.nome} : `)) 

console.log(`\nNome: ${cliente1.nome}\nEndereço: ${cliente1.endereco}\nRenda: R$${cliente1.renda.toFixed(2)}\n`);

let cliente2 = new Cliente();
cliente2.nome = prompt(`Digite o nome do Segundo Cliente: `);
cliente2.endereco = prompt(`Digite o endereço de  ${cliente2.nome} : `);
cliente2.renda = Number(prompt(`Digite a Renda de ${cliente2.nome} : `))


console.log(`\nNome: ${cliente2.nome}\nEndereço: ${cliente2.endereco}\nRenda: R$${cliente2.renda.toFixed(2)} `);

