import promptSync from "prompt-sync"; 
const prompt = promptSync(); 

let num; 

do {
    
    num = Number(prompt("Digite um número inteiro para saber se ele é Primo: "));
    // Se não for inteiro, aviso o usuário
    if (!Number.isInteger(num)) {
        console.log("Por favor, digite apenas números inteiros!");
    }
} while (!Number.isInteger(num)); // Repete até digitar um número inteiro

//  número que o usuário digitou
console.log(`Você digitou : ${num}`);
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(num) ? `${num} é primo` : `${num} não é primo`);
// Exibe os divisores do

// Loop para encontrar e exibir todos os divisores do número digitado
for (let i = 1; i <= num; i++) {
    // Se o resto da divisão for zero, 'i' é um divisor do número
    if (num % i === 0) {
        console.log(i);
    }
}
//ok 