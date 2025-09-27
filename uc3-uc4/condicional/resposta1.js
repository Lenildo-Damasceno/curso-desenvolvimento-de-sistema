import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

console.log('=== Controle de Velocidade ===');

const limite = Number(prompt('Digite a VELOCIDADE PERMITIDA: '));
const velocidade = Number(prompt('Digite a velocidade do carro (em km/h): '));

if (Number.isNaN(limite) || Number.isNaN(velocidade)) {
  console.log('Entrada inválida. Certifique-se de digitar números.');
  process.exit(1);
}

if (velocidade > limite) {
  const excesso = velocidade - limite;

  if (excesso <= limite * 0.1) {
    console.log('ATENÇÃO: ACIMA DO PERMITIDO, MULTA LEVE');
  } else {
    console.log('ATENÇÃO: ACIMA DO PERMITIDO, MULTA GRAVE');
  }
} else {
  console.log('Velocidade dentro do limite permitido.');
}