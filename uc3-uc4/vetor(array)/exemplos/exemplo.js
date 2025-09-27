// Vetor (ou array) é uma estrutura de dados que armazena vários valores em uma única variável.
// Cada valor é acessado por um índice, começando do zero.
// Vetores são úteis para guardar listas de números, nomes, objetos, etc.

// Exemplo de vetor em JavaScript:
//let numeros = [10, 20, 30, 40, 50];

// Acessando elementos do vetor:
console.log(numeros[0]); // Mostra 10
console.log(numeros[2]); // Mostra 30

// Percorrendo todos os elementos do vetor:
for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento na posição ${i}: ${numeros[i]}`);
}

// Exemplo 1: Somando todos os valores do vetor
//let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma dos valores do vetor:", soma);

// Exemplo 2: Buscando um valor no vetor
let busca = 30;
let encontrado = false;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === busca) {
        encontrado = true;
        console.log(`Valor ${busca} encontrado na posição ${i}`);
        break;
    }
}
if (!encontrado) {
    console.log(`Valor ${busca} não encontrado no vetor.`);
}

// Exemplo 3: Calculando a média dos valores do vetor
let media = soma / numeros.length;
console.log("Média dos valores do vetor:", media);

// Exemplo: Calculando a média dos valores do vetor
let numeros = [10, 20, 30, 40, 50, 100, 200];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;
console.log("Média dos valores do vetor:", media.toFixed(2));
