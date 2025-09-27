import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log ("HISTORICO DE MENSAGENS DO WHATSZAPP")

let batepapo = ["Miguel, filho, não esquece de levar o casaco, viu? Parece que vai esfriar mais tarde.",
"Pai, já tô saindo de casa. Levei sim, pode deixar.",
"Comprou o pão que eu pedi?",
"Nossa, esqueci! Mas já tô voltando pra comprar, chego em 10 minutos.",
"Tá bom, meu filho. Cuidado na rua.",
"Pai, o senhor viu onde eu deixei meu fone de ouvido azul?",
"Acho que estava em cima da mesinha da sala ontem à noite. Dá uma olhada lá.",
"Achei! Valeu, pai. O melhor do mundo!",
"De nada, meu filho. Juízo aí, te amo.",
"Também te amo! Abraço.",
"Miguel, seu almoço tá pronto. Vem comer antes que esfrie.",
"Tô indo, pai! Só mais uma partida aqui.",
"Essa 'uma partida' eu conheço... Anda logo!",
"kkkkk tá bom, tá bom. Já tô descendo.",
"Filho, me ajuda a entender como posta aquele vídeo no Instagram?",
]
console.log("========================")
let MensagemEncontradas  = batepapo.splice(5, 10);
console.log(MensagemEncontradas.join('\n'))

console.log ("========================")
let invertido = MensagemEncontradas.reverse()
console.log(invertido.join('\n'))

console.log ("========================")
let posicao = Number(prompt("Digite o número da mensagem para procurar (0 a " + (MensagemEncontradas.length - 1) + "): \n"));
console.log("Mensagem encontrada:", MensagemEncontradas[posicao],"\n");

console.log ("TODAS MENSAGENS : ", MensagemEncontradas.join("---"),"\n")

console.log ("==================")