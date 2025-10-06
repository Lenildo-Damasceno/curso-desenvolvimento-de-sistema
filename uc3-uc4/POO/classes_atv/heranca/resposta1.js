import promptSync from "prompt-sync";
const prompt = promptSync();

export class Pessoas  {
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


export class Funcionarios extends Pessoas {
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
}
}


export class Gerente extends Funcionarios {
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadeEquipe) {
        super(nome, cpf, data_nascimento, cargo, salario, matricula);
        this.setor = setor;
        this.quantidadeEquipe = quantidadeEquipe;
    
    }
    calcularBonificacao() {
        if (this.quantidadeEquipe >= 10) {
            let calculodeBonificacao = this.salario * 0.15;
            this.salario += calculodeBonificacao;
            console.log(`${this.nome} recebeu um bônus de R$${calculodeBonificacao.toFixed(2)} por gerenciar uma equipe grande.`);
        }
        else {
            let calculodeBonificacao = this.salario * 0.07;
            this.salario += calculodeBonificacao;
            console.log(`${this.nome} recebeu um bônus de R$${calculodeBonificacao.toFixed(2)} por gerenciar uma equipe pequena.`);
        }
    }
    }


export class Diretor extends Funcionarios {
     #participacaoLucros;
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadeEquipe, participacaoLucros, departamento, tempodirecao) {
        super(nome, cpf, data_nascimento, cargo, salario, matricula);
        this.participacaoLucros = participacaoLucros;
    }
    get participacaoLucros() {
        return this.#participacaoLucros;
    }
    set participacaoLucros(novaParticipacao) {
        this.#participacaoLucros = novaParticipacao;
    }
    calcularGRatificacao() {
        if (this.tempodirecao >= 5) {
            const bonus = this.salario * 0.30;
            this.salario += bonus;
            console.log(`${this.nome} recebeu um bônus de R$${bonus.toFixed(2)} por 5 anos ou mais de direção.`);
        } else if (this.tempodirecao < 5 && this.tempodirecao >= 3) {
            const bonus = this.salario * 0.25;
            this.salario += bonus;
            console.log(`${this.nome} recebeu um bônus de R$${bonus.toFixed(2)} por 3 a 5 anos de direção.`);
        } else if (this.tempodirecao >= 2) {
            const bonus = this.salario * 0.20;
            this.salario += bonus;
            console.log(`${this.nome} recebeu um bônus de R$${bonus.toFixed(2)} por menos de 2 anos de direção.`);
        }
    }
}
    


export class Dono extends Pessoas {
    #patrimonio; #participacaoAcionarias;
    constructor(nome, cpf, data_nascimento, patrimonio, participacaoAcionarias) {
        super(nome, cpf, data_nascimento);
        this.#patrimonio = patrimonio;
        this.#participacaoAcionarias = participacaoAcionarias;
    }
    get patrimonio() {
        return this.#patrimonio;

    }
    
    set patrimonio(novoPatrimonio) {
        this.#patrimonio = novoPatrimonio;
    
    }

    get participacaoAcionarias() {
        return this.#participacaoAcionarias;
    }
    
    set participacaoAcionarias(novaParticipacao) {
        this.#participacaoAcionarias = novaParticipacao;
    }
    ivestir (valor) {
        const valorINVESTIDO = prompt("Digite o valor que você quer investir: ");
        if (isNaN(valorINVESTIDO) || valorINVESTIDO.trim() === "") {
            console.log("Valor inválido. O valor deve ser um número.");
            return;
        }
        this.#patrimonio += parseFloat(valorINVESTIDO);
        console.log(`Novo patrimônio após investimento: R$${this.#patrimonio.toFixed(2)}`);
    }

    retirarLucro (valor) {
        const valorRETIRADO = prompt("Digite o valor que você quer retirar: ");
        if (isNaN(valorRETIRADO) || valorRETIRADO.trim() === "") {
            console.log("Valor inválido. O valor deve ser um número.");
            return;
        }
        if (parseFloat(valorRETIRADO) > this.#patrimonio) {
            console.log("Valor inválido. Você não pode retirar mais do que o seu patrimônio.");
            return;
        }
        this.#patrimonio -= parseFloat(valorRETIRADO);
        console.log(`Novo patrimônio após retirada: R$${this.#patrimonio.toFixed(2)}`);
    }
}

