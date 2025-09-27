import PromptSync from "prompt-sync"
const prompt = PromptSync()

let  maior,rn = 0, rn_soma = 0,rn_media
let menor,media,soma = 0 
let indes_maior= 0,indes_menor = 0 
let cidade = [], estado = [], veiculo = [], acidente = []
for (let index = 0; index < 3; index ++){
   
    cidade[index] = prompt("Qual é a sua cidade ?") .toUpperCase
    estado[index] = prompt("Qual é a seu estado ?").toUpperCase()
    veiculo[index] = Number(prompt("Números de veiculos ?")).toUpperCase
    acidente[index] = Number(prompt("Números de acidentes ?"))   
} 
maior = acidente [0]
menor = acidente[0]
for (let index = 0; index < 3; index ++){
    if (acidente [index] > maior ) {
        maior = acidente [index]
        indes_maior = index
    }else if(acidente[index] < menor){
        menor = acidente[index]
        indes_menor = index
    }
    soma = soma + veiculo[index]
    media = soma / index
    if (estado [index] == "RN") {
        rn++
        rn_soma = rn_soma + acidente[index]
        rn_media = rn_soma / rn 
    }
}
console.log(rn_media)
console.log(media)
console.log("A cidade ",cidade[indes_maior],"Acidentes maior",maior)
console.log("A cidade ",cidade[indes_menor],"Acidente menor",menor)