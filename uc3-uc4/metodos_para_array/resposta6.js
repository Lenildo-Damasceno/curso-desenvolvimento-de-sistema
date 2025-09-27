import promptSync from "prompt-sync";
const prompt = promptSync()

const senhas = [
    'Segredo#789',    
    'ChaveSegura',
    'Acesso_F1l',      
    '123456',
    'chavefacil',
    'ACESSODENIED',
    'MinhaChave1#',
    'VALOR!',
    'Ac3sso@'
];
console.log(senhas);
const especiais = ['@', '#', '!', '%']
senhas.forEach((senha, i) => { // percorro o array de senhas e meu paramentro inicial é cada 'SENHA' e sei indice (i)
    let teste = senha.split('') // 'teste' irá receber o um array da 'senha' atual fracionada
    let temNumero = teste.some(caract => !isNaN(caract)) // peço para percorrer cada caracter e ver se tem algum número (retorna booleano)
    let temMAIUSCULA = teste.some(caract => caract !== caract.toLowerCase()) // percorro o array e teste se existe algum caracter diferente dele mesmo em minusculo
    let temEspecial = teste.some(caract => especiais.includes(caract)) // percorro o array e vejo se algum dos caracteres especiais fazem parte desse caracter 
    if(temNumero == true && temMAIUSCULA == true && temEspecial == true){
        senhas[i] = `${senha} = SENHA FORTE <--` // se todos forem verdade, a senha atende os critérios
    }  
    else{
        senhas[i] = `${senha} = SENHA FRACA (X)`
    }
});

console.log(`[===== SENHAS =====]\n${senhas.join('\n')}`);