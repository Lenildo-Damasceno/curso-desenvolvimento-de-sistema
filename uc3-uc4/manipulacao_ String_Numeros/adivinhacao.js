import PromptSync from "prompt-sync"
const prompt = PromptSync()

let adivinhar = Math.trunc((Math.random() * 100))
let i = 1
while(i <= 3){
    let num = Number(prompt('Digite um número:'))
    if(num === adivinhar){
        console.log('Acertou!')
    }else{
        console.log('Errou!')
        if(adivinhar > num){
            console.log('Maior!')
        }else{
            console.log('Menor!')
        }
}
i++
}
console.log('Numero Sorteado: ', adivinhar)