import PromptSync from "prompt-sync"
const prompt = PromptSync() 


class Cliente {
    #cpf
    #contato
    nome
    constructor(cpf, nome, contato) {
        if (typeof cpf !== 'string' || cpf.replace(/\D/g, '').length > 11) {
            throw new TesteError("CPF inválido. O CPF não pode ter mais de 11 dígitos.")
        }
        this.cpf = cpf
        this.nome = nome
        this.contato = contato
    }
    
    get cpf() {
        return this.#cpf
    }
    set cpf(novoCpf) {
        if (typeof novoCpf !== 'string' || novoCpf.replace(/\D/g, '').length > 11) {
            throw new TesteError("CPF inválido. O CPF não pode ter mais de 11 dígitos.")
        }
        this.#cpf = novoCpf
    }
    get contato() {
        return this.#contato
    }
    set contato(novoContato) {
        if (typeof novoContato !== 'string' || novoContato.replace(/\D/g, '').length > 11) {
            throw new TesteError("Contato inválido. O contato deve ter no máximo 11 dígitos numéricos.")
        }
        this.#contato = novoContato
    }
}

class Hotel {
    nome
    quartos
    Reservas
    constructor(nome) {
        this.nome = nome
        this.quartos = []
        this.Reservas = []
    }
    adicionarquarto(quarto) {
        const numero = parseInt(prompt("Digite o número do quarto: "), 10)
        const tipoDeQuarto = prompt("Digite o tipo do quarto: ")
      
        if (Number.isNaN(numero) || !tipoDeQuarto) {
            console.log("Dados inválidos. Tente novamente.")
            return
        }

        if (this.quartos.some(q => q.numero === numero)) {
            console.log("Número de quarto já cadastrado.")
            return
        }

        const novoQuarto = new Quarto(numero, tipoDeQuarto)
        this.quartos.push(novoQuarto)
        console.log("Quarto adicionado com sucesso.")
       
    }
    reservarQuarto(quarto, data, cliente) {
        const novaReserva = new Reserva(quarto, data, cliente)
        this.Reservas.push(novaReserva)
        console.log("Reserva realizada com sucesso.")
    }
    cancelarReserva(cpf) {
        const index = this.Reservas.findIndex(reserva => reserva.cliente.cpf === cpf)
        if (index !== -1) {
            this.Reservas.splice(index, 1)
            console.log("Reserva cancelada com sucesso.")
        } else {
            console.log("Reserva não encontrada.")
        }
    }
    listarQuartosDisponiveis() {
        const quartosDisponiveis = this.quartos.filter(quarto => !this.Reservas.some(reserva => reserva.quarto === quarto))
        if (quartosDisponiveis.length > 0) {
            console.log("Quartos disponíveis:")
            quartosDisponiveis.forEach(quarto => {
                console.log(`- Quarto ${quarto.numero}: ${quarto.tipoDeQuarto}`)
            })
        } else {
            console.log("Nenhum quarto disponível.")
        }
    }
    listarReservas() {
        if (this.Reservas.length > 0) {
            console.log("Reservas:")
            this.Reservas.forEach(reserva => {
                console.log(`- Quarto ${reserva.quarto.numero} reservado por ${reserva.cliente.nome} na data ${reserva.dataReserva.toLocaleDateString('pt-BR')}`)
            })
        } else {
            console.log("Nenhuma reserva encontrada.")
        }
    }
    mostrarInformacoesReserva(cpf) {
        const reserva = this.Reservas.find(reserva => reserva.cliente.cpf === cpf)
        if (reserva) {
            console.log(`Informações da reserva para ${reserva.cliente.nome}:`)
            console.log(`- Quarto: ${reserva.quarto.numero} (${reserva.quarto.tipoDeQuarto})`)
            console.log(`- Data da reserva: ${reserva.dataReserva.toLocaleDateString('pt-BR')}`)
        } else {
            console.log("Reserva não encontrada.")
        }
    }
    adicionarReserva() {
        try {

            console.log("\n--- Adicionar Nova Reserva ---")
            const cpf = prompt('CPF do cliente: ');
            const nome = prompt('Nome do cliente: ');
            const contato = prompt('Contato do cliente: ')

            const cliente = new Cliente(cpf, nome, contato)


            this.listarQuartosDisponiveis();
            const numeroQuarto = parseInt(prompt("Digite o número do quarto para reservar: "), 10);
            if (isNaN(numeroQuarto)) {
                throw new TesteError("Número do quarto inválido.")
            }

            const quartoParaReservar = this.quartos.find(q => q.numero === numeroQuarto)
            if (!quartoParaReservar) {
                throw new TesteError("Quarto não encontrado.")
            }

            const dataStr = new Date (prompt('Data da reserva (dd/mm/yyyy): '))
            let reservaQuarto = new Reserva(quartoParaReservar, dataStr, cliente)
            this.Reservas.push(reservaQuarto)
            console.log("Reserva adicionada com sucesso.")
            console.log (this.Reservas)
        } catch (error) {
            // Captura e exibe o erro de forma amigável
            console.error(`\n[ERRO AO ADICIONAR RESERVA]: ${error.message}`)
        }
    }
    
}

class Quarto {
    numero
    tipoDeQuarto
    constructor(numero, tipoDeQuarto) {
        this.numero = numero
        this.tipoDeQuarto = tipoDeQuarto 
    }
}

class Reserva {
    quarto
    dataReserva
    cliente
    constructor(quarto, dataReserva, cliente) {
        this.quarto = quarto
        this.dataReserva = dataReserva
        this.cliente = cliente
    }
}

class TesteError extends Error {
    constructor(message) {
        super(message);
        this.name = "TesteError"
    }
}

export { Cliente, Hotel, Quarto, Reserva, TesteError }