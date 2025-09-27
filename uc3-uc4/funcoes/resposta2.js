import promptSync from 'prompt-sync';
const prompt = promptSync();

let saldo = 10;
let deposito = 0;

function depositar(valor, saldo) {
    return saldo + valor;
}

function sacar(valor, saldo) {
    return saldo - valor;
}

function verSaldo(saldo) { }


let operacao = prompt("Qual operação você deseja fazer? (depositar, sacar, ver saldo): ").toLowerCase();

if (operacao === "depositar") {
    deposito = Number(prompt("Quanto você deseja depositar? "));
    saldo = depositar(deposito, saldo);
    console.log(`Depósito de R$${deposito} realizado com sucesso. Seu novo saldo é R$${saldo}.`);

} else if (operacao === "sacar") {
    let valor = Number(prompt("Quanto você deseja sacar? "));
    if (valor > saldo) {
        console.log("Saldo insuficiente para saque.");
    } else {
        saldo = sacar(valor, saldo);
        console.log(`Saque de R$${valor} realizado com sucesso. Seu novo saldo é R$${saldo}.`);

    }
}
 console.log("Saldo final:", saldo);