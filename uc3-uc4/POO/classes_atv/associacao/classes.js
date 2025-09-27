import promptSync from "prompt-sync";
const prompt = promptSync();

export class Memoria {
    #tipo
    #frequencia
    #capacidade

    constructor(tipo, frequencia, capacidade) {
        this.#tipo = tipo;
        this.#frequencia = frequencia;
        this.#capacidade = capacidade;
    }

    set tipo(novoTipo) {
        this.#tipo = novoTipo;
    }

    get tipo() {
        return this.#tipo;
    }

    set frequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }
    get frequencia (){
        return this.#frequencia
    }
    
    set capacidade(novaCapacidade) {
        this.#capacidade = novaCapacidade;
    }
    get capacidade (){
        return this.#capacidade
    } 
    
    imprimir() {
        this.tipo = prompt("DIGITE TIPO DA SUA MEMORIA : EX. DD3 : ");
        this.frequencia = prompt("DIGITE A FREQUENCIA DA MEMORIA QUE VOCÊ QUER: EX.1066 MHz. : ");
        this.capacidade = prompt("DIGITE A CAPACIDADE QUE VOCÊ QUER: EX.16GB: ");
        console.log(`TIPO DA SUA MEMORIA: ${this.tipo}, COM UMA FREQUÊNCIA DE : ${this.frequencia}, E A CAPACIDADE DE: ${this.capacidade}`);
    }

    usarMemoria() {
            let memoriaemUso = Number(prompt(`DIGITE A QUANTIDADE DE MEMORIA DESEJA USAR `));
            if (capacidade > 0 && memoriaemUso <= this.#capacidade) {           
                this.#capacidade -= memoriaemUso;
            if (this.#capacidade > 0 && memoriaemUso <= this.#capacidade) {           
            } else {
                console.log(`MEMORIA INFUFIENTE `);}


        } else {
            console.log(`MEMORIA INFUFIENTE `);
        }
    }

    liberarMemoria(quantidade) {
            this.#capacidade += quantidade;
            console.log(`Memória liberada: ${quantidade}. Capacidade disponível: ${this.#capacidade}.`);
        }
    } //FIMDACLASSE 

export class Processador {
    #marca
    #modelo
    #nucleos
    #velocidade
    #frequencia

    constructor(marca, modelo, velocidade, nucleos) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#frequencia = frequencia;
        this.#nucleos = nucleos;
    }

    set marca(novaMarca) {
        this.#marca = novaMarca;
    }
    get marca() {
        return this.#marca;
    }
    set modelo(novoModelo) {
        this.#modelo = novoModelo;
    }
    get modelo() {
        return this.#modelo;
    }
    set nucleos(novoNucleos) {
        this.#nucleos = novoNucleos;
    }
    get nucleos() {
        return this.#nucleos;
    }

    imprimir() {
        console.log(`Processador: ${this.#marca}, Modelo: ${this.#modelo}, Núcleos: ${this.#nucleos}, Velocidade: ${this.#velocidade} GHz`);
    }
    executarPrograma(nome){

    }

}   //FIMDACLASSE

export class Armazenamento {
#tipo
#capacidade
#espaco_utilizado

constructor(tipo, capacidade, espaco_utilizado){
    this.#tipo = tipo;
    this.#capacidade = capacidade;
    this.#espaco_utilizado = espaco_utilizado;
}

set tipo(novoTipo) {
        this.#tipo = novoTipo;
    }
    get tipo() {
        return this.#tipo;
    }

    set capacidade(novaCapacidade) {
        this.#capacidade = novaCapacidade;
    }
    get capacidade() {
        return this.#capacidade;
    }

    set espacoUtilizado(novoEspaco) {
        this.#espaco_utilizado = novoEspaco;
    }
    get espacoUtilizado() {
        return this.#espaco_utilizado;
    }

    imprimir() {
        console.log(`Tipo: ${this.#tipo}, Capacidade: ${this.#capacidade}, Espaço Utilizado: ${this.#espaco_utilizado}`);
    }
}   //FIMDACLASSE

export class Tela {
#tamanho
#resolucao
#espaco_utilizado

    set espacoUtilizado(novoEspaco) {
        this.#espaco_utilizado = novoEspaco;
    }
    get espacoUtilizado() {
        return this.#espaco_utilizado;
    }

set resolucao(resolucao) {
    this.#resolucao = resolucao;
}

get resolucao() {
    return this.#resolucao;
}

    imprimir() {
        console.log(`Tamanho: ${this.#tamanho}, Resolução: ${this.#resolucao}`);
    }

    ligar() {
        console.log("Tela ligada");
    }
    desligar() {
        console.log("Tela desligada");
    }
    ajustarResolucao(novaResolucao) {
        this.#resolucao = novaResolucao;
    }
}
//FIMDACLASSE
export class Computador {
    #marca
    #modelo
     constructor(marca,modelo, processador, memoria, armazenamento, tela) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.Memoria = memoria;
        this.Processador = processador;
        this.Armazenamento = armazenamento;
        this.Tela = tela;
     }
        set marca(novaMarca) {
            this.#marca = novaMarca;
        }
        get marca() {
            return this.#marca;
        }

        set modelo(novoModelo) {
            this.#modelo = novoModelo;
        }
        get modelo() {
            return this.#modelo;
        }

        imprimirFichatecnica() {
            console.log("--- Especificações do Computador ---");
            console.log(this.processador.descrever());
            console.log(this.memoria.descrever());
            console.log(this.armazenamento.descrever());
            console.log(this.tela.descrever());
            console.log("------------------------------------"); }
        instalarSoftWare (nome){
            let espacoNecessario = Number(prompt(`DIGITE O ESPAÇO NECESSARIO PARA INSTALAR O SOFTWARE ${nome} : `));
            if (espacoNecessario <= this.Armazenamento.capacidade - this.Armazenamento.espacoUtilizado) {
                this.Armazenamento.espacoUtilizado += espacoNecessario;
                console.log(`Software ${nome} instalado com sucesso.`);
            } else {
                console.log(`Espaço insuficiente para instalar o software ${nome}.`);
            }
        }
        listarSoftwares() {
            console.log(`Softwares instalados:`);
            this.softwares.forEach(software => {
                console.log(`- ${software}`);
            });
        }

        removerSoftware(nome) {
            const index = this.softwares.indexOf(nome);
            if (index !== -1) {
                this.softwares.splice(index, 1);
                console.log(`Software ${nome} removido com sucesso.`);
            } else {
                console.log(`Software ${nome} não encontrado.`);
            }
        }
} //FIMDACLASSE

// Instâncias de exemplo removidas para que o módulo não execute nada ao ser importado.

