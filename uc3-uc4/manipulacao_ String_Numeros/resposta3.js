import PromptSync from "prompt-sync" 
const prompt = PromptSync()

let funcionarios = []

console.log ("================")
console.log (" EMPRESA SIRIUS CYBERNETICS ")

while (true) {

  let nome = prompt("Digite o nome do funcionário (ou 'sair' para encerrar):");
  if (nome.toLowerCase() === 'sair') {
    break; 
  }
  funcionarios.push(nome);
}

let funcionariosParaSorteio = funcionarios.filter(Boolean);
console.log("Lista de funcionários:", funcionariosParaSorteio);
console.log("AGORA VAMOS AO SORTEIO DOS FUNCIONÁRIOS ");
let ganhador = Math.floor(Math.random() * funcionariosParaSorteio.length);
console.log(`O funcionário GANHADOR é foi: ${funcionariosParaSorteio[ganhador]}`);
console.log ("================")