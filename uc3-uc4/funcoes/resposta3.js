import PromptSync from "prompt-sync"
import { adicionarEstoque, listarEstoque, consultarEstoque, removerEstoque, registrarVenda, relatorio} from "./funçoes3.js"
const prompt = PromptSync()

let produto = ['BOLO', 'PAO']
let quantidade = [4, 50]
let preco = [10, 1]
let vendidos = []
let vendidoQtde = []
let opcao,  nomeProduto, faturamento = 0

do{
    console.log(`### PADARIA DO SENAC ###
        0. Sair
        1. Listar estoque
        2. Consultar produto
        3. Adicionar produto
        4. Remover produto
        5. Registrar venda
        6. Relatório final    `)
    opcao = Number(prompt('Digite a opção desejada: '))
    if(opcao === 0) break
    switch(opcao){
        case 1:
            listarEstoque (produto, quantidade, preco) 
        break
        case 2: 
            nomeProduto = prompt("Digite o nome do produto para consulta: ").toUpperCase()
            let indice = consultarEstoque(produto, nomeProduto)
            if (indice !== -1) {
                console.log('PRODUTOS - QUANTIDADE - PREÇO ')
                console.log(`${produto[indice]}\t - ${quantidade[indice]}\t - ${preco[indice]}`)
            } else {
                console.log("Produto não encontrado!")
            }
        break
        case 3: 
            nomeProduto = prompt("Nome do produto: ").toUpperCase()
            let qtdNovo = Number(prompt("Quantidade: "))
            let precoNovo = Number(prompt("Preço: "))
            adicionarEstoque(produto, nomeProduto, quantidade, qtdNovo, preco, precoNovo)
        break
        case 4:
            nomeProduto = prompt("Digite o nome do produto para remoção: ").toUpperCase()
            removerEstoque(produto, nomeProduto, quantidade, preco)
        break
        case 5:
            nomeProduto = prompt("Digite o nome do produto para compra: ").toUpperCase()
            let qtdVenda = Number(prompt("Quantidade: "))
            faturamento = registrarVenda(produto, nomeProduto, quantidade, qtdVenda, preco, faturamento, vendidos, vendidoQtde)
            break
        case 6:
            relatorio(produto, quantidade, preco, faturamento, vendidos, vendidoQtde)
        break
        default: 
            console.log('Opção inválida!')
    }
}while(true)



