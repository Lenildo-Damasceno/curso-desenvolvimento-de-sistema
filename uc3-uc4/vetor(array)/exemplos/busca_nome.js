import promptSync from 'prompt-sync';
const prompt = promptSync();

// Lista com 20 nomes de alunos
let alunos = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
    "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
    "Karla", "Lucas", "Marina", "Nicolas", "Olivia",
    "Paulo", "Quésia", "Rafael", "Sofia", "Tiago"
];


let encontrado = false;
let nomeBusca = "";
while (!encontrado) {
    nomeBusca = prompt("Digite o nome do aluno para buscar: ");
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].toLowerCase() === nomeBusca.toLowerCase()) {
            encontrado = true;
            console.log(`O aluno(a) ${alunos[i]} está na sala de aula (posição ${i}).`);
            break;
        }
    }
    if (!encontrado) {
        console.log(`O aluno(a) ${nomeBusca} não está na sala de aula. Tente novamente.`);
    }
}
console.log(`Nomes na sala de aula: ${alunos.join(", ")}`);
console.log(`Total de ${alunos.length} nomes na sala de aula: ${alunos.join(", ")}`);

//push: adiciona o elemento no final do array (valor)
//Unshift: adiciona o elemento no início do array (valor)
//pop: remove o último elemento do array (sem valor)
//Shift: remove o primeiro elemento do array (sem valor)
//splice: remove ou substitui um elemento pelo índice (índice, quantos remover, valor1, valor2, ...)
//join: transforma o array em string, separando os elementos por um caractere especificado (caractere)
//length: retorna o tamanho do array (sem valor)
//indexOf: retorna o índice do primeiro elemento encontrado no array (valor)