import { Computador, Memoria, Processador, Armazenamento, Tela } from './classes.js';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let computador1;

while (true) {
    console.log('\n=== Menu PC ===');
    console.log('1. Montar PC');
    console.log('2. Ver ficha');
    console.log('3. Instalar software');
    console.log('0. Sair');
    
    const opcao = prompt('Opção: ');

    switch (opcao) {
        case '1':
            const marca = prompt('Marca: ');
            const modelo = prompt('Modelo: ');
            computador1 = new Computador(marca, modelo);
            computador1.Memoria = new Memoria('DDR4', '3200MHz', 16);
            computador1.Processador = new Processador('Intel', 'i7', '3.8GHz', 8);
            computador1.Armazenamento = new Armazenamento('SSD', 512, 100);
            computador1.Tela = new Tela('15.6"', '1920x1080');
            computador1.softwares = [];
            console.log('PC criado!');
            break;

        case '2':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            console.log(`\nPC: ${computador1.marca} ${computador1.modelo}`);
            if (computador1.Processador) console.log(`CPU: ${computador1.Processador.marca} ${computador1.Processador.modelo}`);
            if (computador1.Memoria) console.log(`RAM: ${computador1.Memoria.capacidade}GB ${computador1.Memoria.tipo}`);
            if (computador1.Armazenamento) console.log(`Storage: ${computador1.Armazenamento.capacidade}GB ${computador1.Armazenamento.tipo}`);
            break;

        case '3':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            const soft = prompt('Software: ');
            computador1.softwares.push(soft);
            console.log(`${soft} instalado!`);
            break;

        case '0':
            console.log('Saindo...');
            process.exit(0);

        default:
            console.log('Opção inválida.');
    }
}

