import promptSync from "prompt-sync";
const prompt = promptSync();
import { Funcionarios, Gerente, Diretor } from "./classes_resposta1.js";


const todosOsFuncionarios = [];


function encontrarFuncionarioPorMatricula(matricula) {
    return todosOsFuncionarios.find(f => f.matricula === matricula);
}

let opcao = ""; 

do {
    console.log("\n========= SISTEMA DE GESTÃO DE FUNCIONÁRIOS =========");
    console.log("--- CADASTRO ---");
    console.log("1. Cadastrar Funcionário");
    console.log("2. Cadastrar Gerente");
    console.log("3. Cadastrar Diretor");
    console.log("\n--- AÇÕES ---");
    console.log("4. Listar todos os Funcionários");
    console.log("5. Calcular Horas Extras para um Funcionário");
    console.log("6. Calcular Bonificação para um Gerente");
    console.log("7. Calcular Comissão para um Diretor");
    console.log("\n8. Sair");
    console.log("=======================================================");
    
    opcao = prompt("Escolha uma opção: ").trim();

    switch (opcao) {
        case "1": {
            console.log("\n--- Cadastro de Funcionário ---");
            const nome = prompt("Nome: ");
            const cpf = prompt("CPF: ");
            const dataNasc = prompt("Data de Nascimento (DD/MM/AAAA): ");
            const cargo = prompt("Cargo: ");
            const salario = prompt("Salário: ");
            const matricula = prompt("Matrícula: ");
            
            const funcionario = new Funcionarios(nome, cpf, dataNasc, cargo, salario, matricula);
            todosOsFuncionarios.push(funcionario);
            console.log("Funcionário cadastrado com sucesso!");
            break;
        }
        case "2": {
            console.log("\n--- Cadastro de Gerente ---");
            const nome = prompt("Nome: ");
            const cpf = prompt("CPF: ");
            const dataNasc = prompt("Data de Nascimento (DD/MM/AAAA): ");
            const salario = prompt("Salário: ");
            const matricula = prompt("Matrícula: ");
            const setor = prompt("Setor: ");
            const qtdEquipe = prompt("Quantidade na equipe: ");

            const gerente = new Gerente(nome, cpf, dataNasc, "Gerente", salario, matricula, setor, qtdEquipe);
            todosOsFuncionarios.push(gerente);
            console.log("Gerente cadastrado com sucesso!");
            break;
        }
        case "3": {
            console.log("\n--- Cadastro de Diretor ---");
            const nome = prompt("Nome: ");
            const cpf = prompt("CPF: ");
            const dataNasc = prompt("Data de Nascimento (DD/MM/AAAA): ");
            const salario = prompt("Salário: ");
            const matricula = prompt("Matrícula: ");

            const diretor = new Diretor(nome, cpf, dataNasc, "Diretor", salario, matricula);
            todosOsFuncionarios.push(diretor);
            console.log("Diretor cadastrado com sucesso!");
            break;
        }
        case "4": {
            console.log("\n--- Lista de Todos os Funcionários ---");
            if (todosOsFuncionarios.length === 0) {
                console.log("Nenhum funcionário cadastrado.");
            } else {
                todosOsFuncionarios.forEach(f => f.mostrarInformacoes());
            }
            break;
        }
        case "5": {
            console.log("\n--- Calcular Horas Extras ---");
            const matricula = prompt("Digite a matrícula do funcionário: ");
            const funcionario = encontrarFuncionarioPorMatricula(matricula);
            if (funcionario) {
                const horas = prompt(`Digite as horas extras para ${funcionario.nome}: `);
                funcionario.calculo_horaextra(horas);
            } else {
                console.log("Funcionário não encontrado.");
            }
            break;
        }
        case "6": {
            console.log("\n--- Calcular Bonificação de Gerente ---");
            const matricula = prompt("Digite a matrícula do gerente: ");
            const gerente = encontrarFuncionarioPorMatricula(matricula);
            if (gerente && gerente instanceof Gerente) {
                gerente.calcularBonificacao();
            } else {
                console.log("Gerente não encontrado ou a matrícula não é de um gerente.");
            }
            break;
        }
        case "7": {
            console.log("\n--- Calcular Comissão de Diretor ---");
            const matricula = prompt("Digite a matrícula do diretor: ");
            const diretor = encontrarFuncionarioPorMatricula(matricula);
            if (diretor && diretor instanceof Diretor) {
                const lucro = prompt("Digite o lucro da empresa: ");
                diretor.calcularComissao(lucro);
            } else {
                console.log("Diretor não encontrado ou a matrícula não é de um diretor.");
            }
            break;
        }
        case "8":
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== "8");