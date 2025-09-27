import promptSync from 'prompt-sync';
const prompt = promptSync();

let nome = ['sabão', 'feijão', 'alface', 'tomate', 'cenoura']
let preco = [ 2.00, 3.00, 4.00, 5.00, 6.00 ]
let categoria = ['limpeza', 'alimento', 'hortfrut', 'hortfrut', 'hortfrut']
let imposto = 1.05

categoria.forEach((categoria, indice) => {
    if (categoria === 'hortfrut') {
        console.log(`O produto ${nome[indice]} é da categoria ${categoria} e custa R$${preco[indice]}`)
    }
}); 
let precoAcrescimo = preco.map((preco) => preco * imposto);// preco com imposto

const precotatalHortfrut = categoria.reduce((soma, categoriaAtual, indice) => { //somando só produtos do horfrut
  
    if (categoriaAtual === 'hortfrut') {
     
        return soma + precoAcrescimo[indice];
    }
    return soma;
}, 0); 
console.log(`O preço total dos itens de hortifrúti é: R$${precotatalHortfrut.toFixed(2)}`);

console.log('Produtos com preço abaixo de 5,00:');
precoAcrescimo.forEach((preco, indice) => {
    if (preco < 5.00 && categoria[indice] === 'hortfrut') { 
        console.log(`- ${nome[indice]}: R$${preco.toFixed(2)}`);
    }
});

    

 

  
    

