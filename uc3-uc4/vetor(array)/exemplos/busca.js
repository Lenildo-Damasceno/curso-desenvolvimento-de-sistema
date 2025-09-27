// Exemplo: Buscando um valor no vetor
let numeros = [10, 20, 30, 40, 50];
let busca = 10;
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
