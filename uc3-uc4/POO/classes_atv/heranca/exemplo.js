import promptSync from "prompt-sync";
const prompt = promptSync();

class Transporte  {
    constructor(tipo, capacidade) {
        super(tipo, capacidade);
    }

    exibirDetalhes() {
        console.log(`Tipo de transporte: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidade} pessoas`);
    }


}
class terreste extends Transporte {
    constructor(tipo, capacidade, rodas) {
        super(tipo, capacidade);
        this.rodas = rodas;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Número de rodas: ${this.rodas}`);
    }
}

class aquatico extends Transporte {
    constructor(tipo, capacidade, calado) {
        super(tipo, capacidade);
        this.calado = calado;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Calado: ${this.calado} metros`);
    }
}

class aereo extends Transporte {
    constructor(tipo, capacidade, envergadura) {
        super(tipo, capacidade);
        this.envergadura = envergadura;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Envergadura: ${this.envergadura} metros`);
    }
}