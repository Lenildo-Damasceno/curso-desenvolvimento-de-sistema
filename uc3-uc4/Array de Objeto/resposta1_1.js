import PromptSync from "prompt-sync"
import * as classes_resposta1 from "./classes_resposta1.js" 
const prompt = PromptSync()
import fs from 'fs'
import { Console } from "console"

try { // criar diretorio se não existir
    fs.mkdirSync('Projeto Hotel') 
    console.log(`Diretório criado com sucesso!`)
} catch (error) {    
    console.error(`Erro ao criar diretório: ${error.message}`)    
}
const hotel = new classes_resposta1.Hotel("Hotel JS")

function reservarQuarto (){
  let relatorio = `Relatório de Reservas - ${new Date(). toLocaleDateString ('pt-BR')}\n`
        if (hotel.Reservas.length === 0) {
        relatorio += 'Nenhuma reserva encontrada.\n'
    } else {                    
        hotel.Reservas.forEach(reserva => {
            relatorio += `Quarto ${reserva.quarto.numero} (${reserva.quarto.tipoDeQuarto}) - Cliente: ${reserva.cliente.nome}, CPF: ${reserva.cliente.cpf}, Contato: ${reserva.cliente.contato} - Data: ${reserva.dataReserva.toLocaleDateString('pt-BR')}\n`
        })
        return relatorio
    }  

}
function readArquivo(caminho) {
    try {
        const dados = fs.readFileSync(caminho, 'utf8')
        return dados
    } catch (error) {
        console.error(`Erro ao ler arquivo: ${error.message}`)
        return null
    }
}

function Relatorios(){
    try{
    let  relatorio = reservarQuarto()
     fs.appendFileSync(`./Projeto Hotel/ReserGeral.txt`, relatorio, 'utf8')
     console.log('Relatório salvo com sucesso!', relatorio)
    } catch (error){
        console.error(`Erro ao salvar relatório: ${error.message}`)
}
}
console.log('Bem-vindo ao sistema do hotel JS !')
while (true) {
    console.log('\n1. Atendente')
    console.log('2. Cliente')
    console.log('0. Sair')
    const tipoUsuario = prompt('Você é atendente ou cliente? (1/2): ')
    if (tipoUsuario === '1') {
        menuAtendente()
    } else if (tipoUsuario === '2') {
        menuCliente()
    } else if (tipoUsuario === '0') {
        console.log('Encerrando...')
        break
    } else {
        console.log('Opção inválida.')
    }
}

function menuAtendente() {
    while (true) {
        console.log('\nMenu Atendente:')
        console.log('1. Adicionar quarto')
        console.log('2. Listar quartos disponíveis')
        console.log('3. Ver reservas')
        console.log('4. Cancelar reserva')
        console.log('5. Adicionar reserva')
        console.log('6. menu relatorio')
        console.log('0. Voltar')
        const opcao = prompt('Escolha uma opção: ')
        
        if (opcao === '1') {
            try {
                hotel.adicionarquarto()
            } catch (error) {
                console.error(`[ERRO]: ${error.message}`)
            }
        } else if (opcao === '2') {
            hotel.listarQuartosDisponiveis()
        } else if (opcao === '3') {
            hotel.listarReservas()
        } else if (opcao === '4') {
            const cpf = prompt('Digite o CPF da reserva a cancelar: ')
            hotel.cancelarReserva(cpf)
        } else if (opcao === '5') {
            hotel.adicionarReserva()
        } else if (opcao === '6') {
            while (true) {
                const Relatorios2 = prompt('DIGITE 1 PARA RELATORIO GERAL E 2 PARA RELATORIO POR MES(1/n): ').toLowerCase()
                if (Relatorios2 === '1') {
                    console.log("Relatório Geral de Reservas:")
                    Relatorios()
                    break
                } else if (Relatorios2 === '2') {
                    relatoriosPorMes()
                    break
                } else {
                    console.log('Opção inválida.')
                }
            }
        } else if (opcao === '0') {
            break
        } else {
            console.log('Opção inválida.')
        }
    }
}

function menuCliente() {
    while (true) {
        console.log('\nMenu Cliente:')
        console.log('1. Fazer reserva')
        console.log('2. Ver minha reserva')
        console.log('0. Voltar')
        const opcao = prompt('Escolha uma opção: ')
        if (opcao === '1') {
           
            try {
                const cpf = prompt('CPF: ')
                const nome = prompt('Nome: ')
                const contato = prompt('Contato: ')
            
                const cliente = new classes_resposta1.Cliente(cpf, nome, contato)

                hotel.listarQuartosDisponiveis();
                const numeroStr = prompt('Número do quarto que deseja reservar: ')
                const numero = parseInt(numeroStr, 10)
                const quarto = hotel.quartos.find(q => q.numero === numero)
                if (!quarto) {
                    throw new Error('Quarto não encontrado ou indisponível.')
                }

                const dataStr = prompt('Data da reserva (ano/mês/dia): ')
                let data
                if (dataStr.includes('/')) {
                    const parts = dataStr.split('/')
                    data = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10))
                } else if (dataStr.includes('-')) {
                    const parts = dataStr.split('-')
                    data = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10))
                } else {
                    throw new Error('Formato de data inválido.')
                }

                hotel.reservarQuarto(quarto, data, cliente)

            } catch (error) {
                console.log(`\n[ERRO] Não foi possível fazer a reserva: ${error.message}\n`)
            }

        } else if (opcao === '2') {
            const cpf = prompt('Digite seu CPF: ')
            hotel.mostrarInformacoesReserva(cpf)
        } else if (opcao === '0') {
            break
        } else {
            console.log('Opção inválida.')
        }
    }
}


