import { Computador, Memoria, Processador, Armazenamento, Tela } from './classes.js';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let computador1;

while (true) {
    console.log('\n=== Menu PC ===');
    console.log('1. Montar PC');
    console.log('2. Ver ficha');
    console.log('3. Instalar software');
    console.log('4. Listar softwares');
    console.log('5. Usar memória');
    console.log('0. Sair');
    
    const opcao = prompt('Opção: ');

    switch (opcao) {
        case '1':
            const marca = prompt('Marca: ');
            const modelo = prompt('Modelo: ');
            
            const memoria = new Memoria('DDR4', '3200MHz', 16);
            const processador = new Processador('Intel', 'i7', '3.8GHz', 8);
            const armazenamento = new Armazenamento('SSD', 512, 100);
            const tela = new Tela('15.6"', '1920x1080');
            
            computador1 = new Computador(marca, modelo, processador, memoria, armazenamento, tela);
            computador1.softwares = [];
            console.log('PC criado!');
            break;

        case '2':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            console.log(`\nPC: ${computador1.marca} ${computador1.modelo}`);
            if (computador1.Processador) console.log(`CPU: ${computador1.Processador.marca} ${computador1.Processador.modelo}`);
            if (computador1.Memoria) console.log(`RAM: ${computador1.Memoria.capacidade}GB ${computador1.Memoria.tipo}`);
            if (computador1.Armazenamento) console.log(`Storage: ${computador1.Armazenamento.capacidade}GB ${computador1.Armazenamento.tipo}`);
            if (computador1.Tela) console.log(`Tela: ${computador1.Tela.tamanho} ${computador1.Tela.resolucao}`);
            break;

        case '3':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            const soft = prompt('Software: ');
            computador1.softwares.push(soft);
            console.log(`${soft} instalado!`);
            break;

        case '4':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            console.log('Softwares instalados:');
            if (computador1.softwares.length > 0) {
                computador1.softwares.forEach(s => console.log(`- ${s}`));
            } else {
                console.log('(nenhum)');
            }
            break;

        case '5':
            if (!computador1) { console.log('Monte o PC primeiro.'); break; }
            const qtd = Number(prompt('Quantidade de memória para usar (GB): '));
            const resultado = computador1.Memoria.usarMemoria(qtd);
            if (resultado) {
                console.log(`${qtd}GB usados. Restam ${computador1.Memoria.capacidade}GB`);
            } else {
                console.log('Memória insuficiente!');
            }
            break;

        case '0':
            console.log('Saindo...');
            process.exit(0);

        default:
            console.log('Opção inválida.');
    }
}

