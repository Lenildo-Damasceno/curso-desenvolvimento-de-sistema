import PromptSync from 'prompt-sync'
const prompt = PromptSync()

console.log('=====INVESTIGAÇÃO DE CRIME=====/n')
let telef = prompt('Telefonou para vitima? ').toLowerCase()
let local = prompt('Esteve no local do crime? ').toLowerCase()
let mora = prompt('Mora perto da vitima? ').toLowerCase()
let divida = prompt('Devia para a vitima? ').toLowerCase()
let trabalhou = prompt('Ja trabalhou com a vitima? ').toLowerCase()

let contador = 0
if (telef === 'sim') {
    contador++
    
} if (local === 'sim') {
    contador++
}
if (mora === 'sim') {
    contador++
}
if (divida === 'sim') {
    contador++
}
if (trabalhou === 'sim'){
    contador++
}
switch (contador) {
    case 2:
        console.log('Suspeito')
        break
    case 3:
        console.log('Cumplice')
        break
    case 4:
        console.log('Cumplice')
        break
    case 5:
        console.log('Assassino')
        break
    default:
        console.log('Inocente')
        break
}
  