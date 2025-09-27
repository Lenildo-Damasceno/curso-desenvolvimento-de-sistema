import promptSync from 'prompt-sync';
const prompt = promptSync();

let atletas = [];   // Corrigido para declarar o array de atletas
let notas = [];    
let soma = 0;
let media;

let quantosAtletas = Number(prompt("Digite quantos atletas: "));
for (let i = 0; i < quantosAtletas; i++) {
    let nomeAtleta = prompt(`Digite o nome do atleta ${i + 1}: `);
    atletas.push(nomeAtleta);
    notas[i] = [];
    soma = 0; // Resetar soma para cada atleta
    for (let j = 0; j < 7; j++) {
        let nota = Number(prompt(`Digite a nota ${j + 1} para o atleta ${nomeAtleta}: `));
        notas[i].push(nota);
        soma += nota;
    }

    let maiorNota = Math.max(...notas[i]);
    let menorNota = Math.min(...notas[i]); 
    media = soma / 3;
    console.log(`Atleta: ${nomeAtleta}`);   
    console.log(`Maior nota: ${maiorNota}`);
    console.log(`Menor nota: ${menorNota}`);
    console.log(`Média: ${media.toFixed(2)}`);
}