import PromptSync from "prompt-sync"
const prompt = PromptSync() 

class Cliente {
    #cpf
    #contato
    nome
    constructor(cpf, nome, contato) {
        this.#cpf = cpf
        this.nome = nome
        this.#contato = contato
    }
    get cpf() {
        return this.#cpf
    }
    set cpf(novoCpf) {
        this.#cpf = novoCpf
    }
    get contato() {
        return this.#contato
    }
    set contato(novoContato) {
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
    constructor(message, code = null) { 
        super(message);
        this.name = "TesteError";
        this.code = code; // 'QUARTO_OCUPADO' ou 'DATA_INVALIDA'
    }
}
//não permitir datas passadas
//não permitir reservar um quarto já ocupado
//não permitir cancelar uma reserva inexistente
//não permitir adicionar um quarto com número já existente

export { Cliente, Hotel, Quarto, Reserva, TesteError }