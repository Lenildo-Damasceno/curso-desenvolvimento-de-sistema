import PromptSync from "prompt-sync"
import * as classes_resposta1 from "./resposta1.js" 
const prompt = PromptSync()


const hotel = new classes_resposta1.Hotel("Hotel JS")

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
        console.log('0. Voltar')
        const opcao = prompt('Escolha uma opção: ')
        
        // CORREÇÃO 3: Lógica do menu corrigida e simplificada
        if (opcao === '1') {
            try {
                hotel.adicionarquarto();
            } catch (error) {
                console.error(`[ERRO]: ${error.message}`);
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
            
                // CORREÇÃO 2: Usando a referência correta da importação
                const cliente = new classes_resposta1.Cliente(cpf, nome, contato)

                hotel.listarQuartosDisponiveis();
                const numeroStr = prompt('Número do quarto que deseja reservar: ')
                const numero = parseInt(numeroStr, 10)
                const quarto = hotel.quartos.find(q => q.numero === numero)
                if (!quarto) {
                    throw new Error('Quarto não encontrado ou indisponível.');
                }

                const dataStr = prompt('Data da reserva (dd/mm/yyyy): ')
                hotel.reservarQuarto(quarto, dataStr, cliente)

            } catch (error) {
                console.log(`\n[ERRO] Não foi possível fazer a reserva: ${error.message}\n`);
            }

            hotel.reservarQuarto(quarto, data, cliente)

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

// Menu principal
