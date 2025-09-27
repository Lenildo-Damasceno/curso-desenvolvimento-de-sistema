import PromptSync from "prompt-sync" 
const prompt = PromptSync() 

let pontosJogador1 = 0
let pontosJogador2 = 0
let dado1, dado2
let i = 1

let jogador1 = prompt('Nome do Jogador 1: ')
let jogador2 = prompt('Nome do Jogador 2: ')

while(i <= 3){
    
    prompt(`Agora é a vez de ${jogador1}, aperte enter para jogar o Dado:`)
    let sorteado = Math.trunc((Math.random() * 6)+1)
    console.log(`Valor do Dado do ${jogador1}: ${sorteado}`)
    pontosJogador1 += sorteado

    prompt(`Agora é a vez de ${jogador2}, aperte enter para jogar o Dado:`)
    let sorteado2 = Math.trunc((Math.random() * 6)+1)
    console.log(`Valor do Dado do ${jogador2}: ${sorteado2}`)   
    pontosJogador2 += sorteado2
    i++
}
if (pontosJogador1 > pontosJogador2) {
    console.log(`\n${jogador1} venceu o jogo 😎!`);
    console.log(`${jogador2} perdeu o jogo. 😭`);
} else if (pontosJogador2 > pontosJogador1) {
    console.log(`\n${jogador2} venceu o jogo 😁!`);
    console.log(`${jogador1} perdeu o jogo 😪 `);
} else {
    console.log("\nO jogo terminou empatado 🤡 !");
}

//pronto