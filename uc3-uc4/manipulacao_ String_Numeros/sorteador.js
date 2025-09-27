import PromptSync from "prompt-sync"
const prompt = PromptSync()

let max = Number(prompt('Digite o valor máximo para sortear:'))
let min = Number(prompt('Digite o valor mínimo para sortear:'))
let sorteado = Math.trunc((Math.random() * (max-min))+min)
console.log(`Valor Gerado: ${sorteado}`)