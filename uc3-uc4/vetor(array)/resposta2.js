import promptSync from 'prompt-sync';
const prompt = promptSync();
// variaveis
let consoantes = [];
let vogais = [];

// laço de repetição
for (let i = 0; i < 15; i++) {
    let letra;
    do { //aqui digo usuario apenas letras
        letra = prompt(`Digite a ${i + 1}º letra : `).toLowerCase();
        if (!letra.match(/^[a-z]$/)) {
            console.log("Digite apenas uma letra (sem números ou símbolos)!");
        }
    } while (!letra.match(/^[a-z]$/)); //(/^[a-z]$/)); //expressão regular para validar se é letra
    if (letra.match(/[aeiou]/)) {//verificando se é vogal ou consoante
        vogais.push(letra);
    } else {
        consoantes.push(letra);
    }
} 
console.log("FORAM LIDAS  A QUANTIDADE DE:", consoantes.length, "CONSOANTES"); //mostrando quantidade de consoantes
console.log("AS CONSOANTES SÃO:", consoantes);
