export function listarEstoque (prod, qtde, valor){
    console.log('### ESTOQUE DA PADARIA ###')
    console.log('PRODUTOS - QUANTIDADE - PREÇO ')
    for(let i = 0; i < prod.length; i++){
        console.log(`${prod[i]}\t-\t${qtde[i]}\t- ${valor[i]}`)
    }
}

export function adicionarEstoque(produto, nome, quantidade, qtde, preco, valor){//3 array e 3 valores
    produto.push(nome)
    quantidade.push(qtde)
    preco.push(valor)  
}

export const consultarEstoque = (produto, nome) => produto.indexOf(nome)

export function removerEstoque(produto, nome, quantidade, preco) {
  let indice = consultarEstoque(produto, nome)
  if (indice !== -1) {
    produto.splice(indice, 1)
    quantidade.splice(indice, 1)
    preco.splice(indice, 1)
    console.log("Produto removido com sucesso!")
  }else{
    console.log("Produto não encontrado!")
  }
}

export const valorVenda = (qtde, preco) => qtde * preco

export function registrarVenda(produto, nome, quantidade, qtde, preco, faturamento, vendidos, vendidoQtde) {
  let indice = consultarEstoque(produto, nome)
  if (indice === -1) {
    console.log("Produto não encontrado!")
    return
  }
  if (quantidade[indice] < qtde) {
    console.log("Quantidade insuficiente no estoque!")
    return
  }
  let total = valorVenda(qtde, preco[indice])
  quantidade[indice] = quantidade[indice] - qtde
  vendidos.push(nome)
  vendidoQtde.push(qtde)
  console.log(`Venda: ${qtde} ${produto[indice]}(s) - Total: R$ ${total.toFixed(2)}`)
  return faturamento += total
}

export function relatorio(produto, quantidade, preco, faturamento, vendidos, vendidoQtde) {
  console.log('### RELATÓRIO FINAL ###\n')
  console.log('### VENDAS REALIZADAS ###')
  console.log('PRODUTOS - QUANTIDADE ')
  for (let i = 0; i < vendidos.length; i++) {
    console.log(`${vendidos[i]} -\t${vendidoQtde[i]}`)
  }
  if(faturamento > 0) {
     console.log(`\nFaturamento Total: R$ ${faturamento.toFixed(2)}`)
    } else {
      console.log(`\nNenhuma venda realizada até o momento.\n`)
    }
  listarEstoque (produto, quantidade, preco)
}
