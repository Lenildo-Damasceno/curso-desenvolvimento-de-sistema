import promptSync from "prompt-sync";
const prompt = promptSync();
import { Pessoas,Funcionarios,Gerente,Diretor } from "./resposta1.js";
    

do {
    console.log("\n=== MENU DE OPÇÕES ===");
    console.log("1. Cadastrar Funcionário");
    console.log("2. Cadastrar Gerente");
    console.log("3. Cadastrar Diretor");
    console.log("4. Sair");
    } while (opcao !== "4");

    switch (opcao) {
        case "1":
            const nomeFUNC = prompt("Digite o nome do Funcionário: ");
            const cpfFUNC = prompt("Digite o CPF do Funcionário: ");
            const dataNASC = prompt("Digite a data de nascimento do Funcionário (DD/MM/AAAA): ");
            const cargoFUNC = prompt("Digite o cargo do Funcionário: ");
            const salarioFUNC = parseFloat(prompt("Digite o salário do Funcionário: "));
            const matriculaFUNC = prompt("Digite a matrícula do Funcionário: ");
            const funcionario = new Funcionarios(nomeFUNC, cpfFUNC, dataNASC, cargoFUNC, salarioFUNC, matriculaFUNC);
            funcionario.mostrarInformacoes();
            console.log(`Cargo: ${funcionario.cargo}`);
            console.log(`Salário: R$${funcionario.salario.toFixed(2)}`);
            console.log(`Matrícula: ${funcionario.matricula}`);
            funcionario.salario = salarioFUNC; 
            funcionario.calculo_horaextra();
            break;
        case "2":
            const nomeGER = prompt("Digite o nome do Gerente: ");
            const cpfGER = prompt("Digite o CPF do Gerente: ");
            const dataNASCGER = prompt("Digite a data de nascimento do Gerente (DD/MM/AAAA): ");
            const cargoGER = prompt("Digite o cargo do Gerente: ");
            const salarioGER = parseFloat(prompt("Digite o salário do Gerente: "));
            const matriculaGER = prompt("Digite a matrícula do Gerente: ");
            const gerente = new Gerente(nomeGER, cpfGER, dataNASCGER, cargoGER, salarioGER, matriculaGER);
            gerente.mostrarInformacoes();
            console.log(`Cargo: ${gerente.cargo}`);
            console.log(`Salário: R$${gerente.salario.toFixed(2)}`);
            console.log(`Matrícula: ${gerente.matricula}`);
            gerente.calcularBonificacao();
            break;
            gerente.calcularBonificacao();
    }
