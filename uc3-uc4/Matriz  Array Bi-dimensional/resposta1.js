import PromptSync from "prompt-sync"
const prompt = PromptSync()

let Linhasemana = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sábado"
]
 let colunaCafeAlmocoJanta = ['cafe','almoco', 'jantar']

let cardapio = [
    ["Tapioca queijo", "Frango arroz", "Sopa legumes"],
    ["Pão requeijão", "Carne purê", "Omelete queijo"],
    ["Cuscuz ovo", "Peixe batata", "Panqueca frango"],
    ["Iogurte granola", "Bife arroz", "Torta frango"],
    ["Vitamina aveia", "Lasanha salada", "Espetinho carne"],
    ["Bolo milho", "Feijoada arroz", "Pizza caseira"],
    ["Pão queijo", "Macarrão almôndega", "Sanduíche frango"]
]

let encerrar = false;

while (!encerrar) {
    const opcao = prompt(`
    --- GERENCIADOR DE CARDÁPIO ---
    Linhas: Dias da Semana | Colunas: Refeições

    1 - Consultar prato
    2 - Alterar prato
    3 - Ver cardápio completo (no console)
    4 - Sair

    Digite a sua opção:
    `);

    switch (opcao) {
        case "1": {
            const diaEscolhido = prompt("Consulta: Digite o dia da semana (linha):");
            const refeicaoEscolhida = prompt("Consulta: Digite a refeição (coluna):");

            const indiceDia = Linhasemana.findIndex(d => d.toLowerCase() === diaEscolhido.toLowerCase().trim());
            const indiceRefeicao = colunaCafeAlmocoJanta.findIndex(r => r.toLowerCase() === refeicaoEscolhida.toLowerCase().trim());

            if (indiceDia !== -1 && indiceRefeicao !== -1) {
                console.log(`Prato: ${cardapio[indiceDia][indiceRefeicao]}`);
            } else {
                console.log("Dia ou refeição inválido.");
            }
            break;
        }

        case "2": {
            const diaEscolhido = prompt("Alterar: Digite o dia da semana (linha):");
            const refeicaoEscolhida = prompt("Alterar: Digite a refeição (coluna):");

            const indiceDia = Linhasemana.findIndex(d => d.toLowerCase() === diaEscolhido.toLowerCase().trim());
            const indiceRefeicao = colunaCafeAlmocoJanta.findIndex(r => r.toLowerCase() === refeicaoEscolhida.toLowerCase().trim());

            if (indiceDia !== -1 && indiceRefeicao !== -1) {
                const novoPrato = prompt(`O prato atual é "${cardapio[indiceDia][indiceRefeicao]}".\nDigite o novo prato:`);
                if (novoPrato && novoPrato.trim() !== "") {
                    cardapio[indiceDia][indiceRefeicao] = novoPrato.trim();
                    console.log("Prato alterado com sucesso!");
                } else {
                    console.log("Alteração cancelada.");
                }
            } else {
                console.log("Dia ou refeição inválido.");
            }
            break;
        }

        case "3": {
            console.log("--- CARDÁPIO COMPLETO - PANELA DE VÓ ---");
            
            const cardapioParaTabela = {};
            for(let i = 0; i < Linhasemana.length; i++) {
                cardapioParaTabela[Linhasemana[i]] = {
                    'Café': cardapio[i][0],
                    'Almoço': cardapio[i][1],
                    'Jantar': cardapio[i][2]
                };
            }
            console.table(cardapioParaTabela);

            console.log("Cardápio exibido no console em formato de tabela.");
            break;
        }

        case "4": {
            encerrar = true;
            break;
        }

        default: {
            console.log("Opção inválida.");
            break;
        }
    }
}


























