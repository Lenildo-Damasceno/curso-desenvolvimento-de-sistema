import promptSync from "prompt-sync";
const prompt = promptSync();

class Pessoas  {
    #cpf;

    constructor(nome, cpf, data_nascimento) {
        this.nome = nome;
        this.#cpf = cpf;
        this.data_nascimento = data_nascimento;
    }
    get cpf() {
        return this.#cpf;
    }
    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }
    
    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.data_nascimento}`);
        console.log(`CPF: ${this.#cpf}`);
    }
}


class Funcionarios extends Pessoas {
    #salario;
    #matricula;

    constructor(nome, cpf, data_nascimento, cargo, salario, matricula) {
        super(nome, cpf, data_nascimento);
        this.cargo = cargo;
        this.#salario = salario;
        this.#matricula = matricula;
        
    }
    get salario() {
        return this.#salario;
    }
    set salario(novoSalario) {
        const salarioDIGITADO = prompt("Digite o novo salário: ");
        if (isNaN(salarioDIGITADO) || salarioDIGITADO.trim() === "") {
            console.log("Valor inválido. O salário deve ser um número.");
            return;
        }
        this.#salario = parseFloat(salarioDIGITADO);
        
    }
    
    get matricula() {
        return this.#matricula;
    }
    set matricula(novaMatricula) {
        this.#matricula = novaMatricula;
    }
    
    calculo_horaextra(horas) {
        const horasEXTRAS = prompt("Digite a quantidade de horas EXTRA VOCÊ FEZ ? ");
        if (horasEXTRAS * 15) {
            const valordashoras = horasEXTRAS * 15;
            console.log("Valor das horas extras: R$" + valordashoras);
        }
            return;
}
}
class Gerente extends Funcionarios {
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadeEquipe) {
        super(nome, cpf, data_nascimento, cargo, salario, matricula);
        this.setor = setor;
        this.quantidadeEquipe = quantidadeEquipe;
       
        if (this.quantidadeEquipe >= 10) {
            let bonus = this.salario * 0.10;
            this.salario += bonus;
            console.log(`${this.nome} recebeu um bônus de R$${bonus.toFixed(2)} por gerenciar uma equipe grande.`);
        }
    }
}
