import promptSync from "prompt-sync";
const prompt = promptSync();

class Carro {
    // atributos
    constructor(cor, modelo, placa, numPorta) {
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.numPorta = numPorta;
    } //metodos
    imprimir() {
        console.log(`Carro: ${this.modelo}, Cor: ${this.cor}, Placa: ${this.placa}, Número de Portas: ${this.numPorta}`);
    }
}
let carro  = new Carro() //objeto de acordo com a classe
carro.cor = prompt("Digite a cor do carro: ");
carro.modelo = prompt("Digite o modelo do carro: ");
carro.placa = prompt("Digite a placa do carro: ");
carro.numPorta = prompt("Digite o número de portas do carro: ");
carro.imprimir();













class Pessoa {
    // atributos
    constructor(nome, altura, raca) {
        this.nome = nome;
        this.altura = altura;
        this.raca = raca;
    } //metodos
    imprimir() {
        let nome = new Pessoa();

        this.nome = prompt("Digite o nome da pessoa: ");
        this.altura = prompt("Digite a altura da pessoa: ");
        this.raca = prompt("Digite a raça da pessoa: ");
        console.log(`Nome: ${this.nome}, Altura: ${this.altura}, Raça: ${this.raca}`);
    } //metodo para alterar o nome
    alterarnome (sobrenome){
        this.nome = this.nome + " " + sobrenome
    }
    

    coletarDados() {
        this.nome = prompt("Digite o nome da pessoa: ");
        this.altura = prompt("Digite a altura da pessoa: ");
        this.raca = prompt("Digite a raça da pessoa: ");
    }
}