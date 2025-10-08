import promptSync from "prompt-sync";
const prompt = promptSync();

class ContaBancaria {
    #nomeTitular;
    #saldo;
    numeroContaBancaria;
    numeroAgencia;
    dataAbertura;

    constructor(nomeTitular, numeroContaBancaria, numeroAgencia, dataAbertura) {
        this.#nomeTitular = nomeTitular;
        this.#saldo = 0; 
        this.numeroContaBancaria = numeroContaBancaria;
        this.numeroAgencia = numeroAgencia;
        this.dataAbertura = dataAbertura;
    }

    get nomeTitular() {
        return this.#nomeTitular;
    }
    set nomeTitular(novoNome) {
        this.#nomeTitular = novoNome;
    }
    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }
    set saldo(novoValor) {
        if (novoValor >= 0) {
            this.#saldo = novoValor;
        } else {
            console.log("O valor do saldo não pode ser negativo.");
        }
    }
    sacar() {
        let valorsaque = Number(prompt(`Digite o valor que deseja sacar: `));
        if (valorsaque > 0 && valorsaque <= this.#saldo) {           
            this.#saldo -= valorsaque;
            console.log(`Saque de R$${valorsaque} realizado com sucesso. Seu novo saldo é R$${this.#saldo}.`);
        } else {
            console.log(`VALOR INSUFICIENTE PARA SAQUE. Saldo atual: R$${this.#saldo}`);
        }
    }
    depositar() {
        let valordeposito = Number(prompt(`Digite o valor que deseja depositar: `));
        if (valordeposito > 1) {
            this.#saldo += valordeposito;
            console.log(`Depósito de R$${valordeposito} realizado com sucesso. Seu novo saldo é R$${this.#saldo}.`);
        } else {
            console.log(`INSIRA UM VALOR ACIMA DE R$1.`);
        }
    }
    calcularrendimento(rendimento) {
        if (rendimento > 0) {
            let valorRendimento = (this.#saldo * rendimento) / 100;
            console.log(`O rendimento sobre o saldo de R$${this.#saldo} a uma taxa de ${rendimento}% é R$${valorRendimento.toFixed(2)}.`);
        } else {
            console.log("A taxa de rendimento deve ser maior que zero.");
        }
    }
}

// Função para interagir com o cliente
function menuCliente(cliente) {
    console.log(`Bem-vindo ao Banco XYZ, ${cliente.nomeTitular}!`);
    console.log("1. Sacar");
    console.log("2. Depositar");
    console.log("3. Calcular Rendimento");
    console.log("4. Sair");

    let continuar = true;
    while (continuar) {
        const escolha = prompt("Escolha uma opção (1-4): ");
        switch (escolha) {
            case "1":
                cliente.sacar();
                break;
            case "2":
                cliente.depositar();
                break;
            case "3":
                const taxaRendimento = Number(prompt("Digite a taxa de rendimento (%): "));
                cliente.calcularrendimento(taxaRendimento);
                break;
            case "4":
                console.log("Obrigado por usar o Banco XYZ. Até logo!");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

// Criando os clientes
const cliente1 = new ContaBancaria("João Silva", "123456", "001", "2023-10-01");
const cliente2 = new ContaBancaria("Maria Oliveira", "654321", "002", "2023-11-15");

// Menu principal
console.log("Selecione o cliente:");
console.log("1. João Silva");
console.log("2. Maria Oliveira");
const clienteEscolhido = prompt("Escolha o cliente (1-2): ");

if (clienteEscolhido === "1") {
    menuCliente(cliente1);
} else if (clienteEscolhido === "2") {
    menuCliente(cliente2);
} else {
    console.log("Cliente inválido. Encerrando o programa.");
}
