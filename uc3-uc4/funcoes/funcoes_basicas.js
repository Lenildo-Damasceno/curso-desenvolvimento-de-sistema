
// 1. Somar dois números
export function somar(a, b) {
  return a + b;
}

// 2. Verificar se um número é par ou ímpar
export function parOuImpar(n) {
  return n % 2 === 0 ? 'Par' : 'Ímpar';
}

// 3. Calcular a média de uma lista de números
export function media(lista) {
  if (lista.length === 0) return 0;
  return lista.reduce((acc, val) => acc + val, 0) / lista.length;
}

// 4. Converter Celsius para Fahrenheit
export function celsiusParaFahrenheit(c) {
  return (c * 9/5) + 32;
}

// 5. Verificar se uma palavra é palíndromo
export function ehPalindromo(palavra) {
  let limpa = palavra.toLowerCase().replace(/\s/g, '');
  return limpa === limpa.split('').reverse().join('');
}

// 6. Contar vogais em uma string
export function contarVogais(texto) {
  return (texto.match(/[aeiouáéíóúãõâêîôûàèìòù]/gi) || []).length;
}

// 7. Gerar um número aleatório entre dois valores
export function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 8. Formatar uma data para o padrão brasileiro
export function formatarDataBR(data) {
  return data.toLocaleDateString('pt-BR');
}

// 9. Capitalizar a primeira letra de uma frase
export function capitalizar(frase) {
  return frase.charAt(0).toUpperCase() + frase.slice(1);
}

// 10. Verificar se um número é primo
export function ehPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
