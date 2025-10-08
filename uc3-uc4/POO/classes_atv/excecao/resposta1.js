import promptSync from "prompt-sync";
const prompt = promptSync();

class TesteError extends Error {
    constructor(message) { 
        super(message);
        this.name = "TesteError"; 
    }
}


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

    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }

  
    sacar(valor) {
        if (isNaN(valor)) throw new Error("Valor inválido. Digite um número.");
        if (valor <= 0) throw new TesteError("O valor do saque deve ser positivo.");
        if (valor > this.#saldo) {
            throw new TesteError(`SALDO INSUFICIENTE. Saldo atual: ${this.saldo}`);
        }
        
        this.#saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: ${this.saldo}.`);
    }

  
    depositar(valor) {
        if (isNaN(valor)) throw new Error("Valor inválido. Digite um número.");
        if (valor <= 0) {
            throw new TesteError("O valor do depósito deve ser positivo.");
        }

        this.#saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: ${this.saldo}.`);
    }

  
    calcularrendimento(taxa) {
        if (isNaN(taxa)) throw new Error("Taxa de rendimento inválida. Digite um número.");
        if (taxa <= 0) {
            throw new TesteError("A taxa de rendimento deve ser maior que zero.");
        }

        const valorRendimento = (this.#saldo * taxa) / 100;
        console.log(`O rendimento sobre o saldo de ${this.saldo} a uma taxa de ${taxa}% é R$${valorRendimento.toFixed(2)}.`);
    }
} 
function menuCliente(cliente) {
    console.log(`\nBem-vindo ao Banco XYZ, ${cliente.nomeTitular}! Saldo atual: ${cliente.saldo}`);
    console.log("1. Sacar");
    console.log("2. Depositar");
    console.log("3. Calcular Rendimento");
    console.log("4. Sair");

    let continuar = true;
    while (continuar) {
        try {
            const escolha = prompt("Escolha uma opção (1-4): ");
            switch (escolha) {
                case "1":
                    const valorSaque = Number(prompt("Digite o valor para sacar: "));
                    cliente.sacar(valorSaque);
                    break;
                case "2":
                    const valorDeposito = Number(prompt("Digite o valor para depositar: "));
                    cliente.depositar(valorDeposito);
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
            if (continuar) {
                console.log(`Saldo atualizado: ${cliente.saldo}`);
            }
        } catch (error) {
            
            console.error(`\n[ERRO] ${error.message}\n`);
        }
    }
}


try {
    const cliente1 = new ContaBancaria("João Silva", "123456", "001", "2023-10-01");
    const cliente2 = new ContaBancaria("Maria Oliveira", "654321", "002", "2023-11-15");

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
} catch (error) {
    console.error(`Ocorreu um erro inesperado no programa: ${error.message}`);
}

