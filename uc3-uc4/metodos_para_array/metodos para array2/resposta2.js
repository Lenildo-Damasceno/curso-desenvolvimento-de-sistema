import PromptSync from "prompt-sync" 
const prompt = PromptSync() 

let nomes = ["bernardo", "Caio", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Júlia"]
let media = [3.5, 2.0, 9.2, 6.5, 5.8, 4.0, 1.7, 8.1, 9.5]
let satus = ['Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo']
let mediageral
let result
let medialunos
let buscarnome

console.log ('========SENAC ============== \n')
console.log (' TODOS ALUNOS E SUAS MEDIAS')
nomes.forEach((nome, indice) => {
    console.log(nome,' - Média:',media[indice],'\n')
})
console.log('====Alunos aprovados==== \n')
media.forEach((media, indice) => {
     if (media >= 7) {    
    console.log(nomes[indice],' - Média:',media)
    }        
})
mediageral = media.reduce((acumulador, categoriaAtual, indice) => {
    return (acumulador + media[indice])   
}) 
console.log ('MEDIA DE TODA TURMA',mediageral.toFixed(2))  


buscarnome = prompt("Digite o nome do aluno para buscar: ")
result = nomes.find((nome) => nome.toLowerCase() === buscarnome.toLowerCase())
if (result) {
    const indice = nomes.indexOf(result)
    console.log(`Aluno encontrado: ${result} - Média: ${media[indice]} - Status: ${satus[indice]}`)
} else {
    console.log("Aluno não encontrado.")
} 
console.log('ALUNOS ATIVOS');
satus.forEach((status, indice) => {
    if (status === 'Ativo') {
        console.log(`${nomes[indice]} - Status: ${status}`)
    }
});

console.log("Alunos com nota menor que 4:");

media.forEach((nome, indice) => {
   if (media[indice] < 4) {
     console.log(`${nome} - Nota: ${media[indice]}`);
  }
})


 

    




