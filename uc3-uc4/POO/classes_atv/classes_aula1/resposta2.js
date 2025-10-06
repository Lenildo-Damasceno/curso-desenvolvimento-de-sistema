import promptSync from "prompt-sync";
const prompt = promptSync();
import data from './classRespostas.js';

let mostrar = new data();

mostrar.dia = prompt('DIGITE O DIA :');
mostrar.mes = prompt('DIGITE O MES :');
mostrar.ano = prompt('DIGITE O ANO :');

mostrar.escreverData();
mostrar.escreverMes();
mostrar.quantofaltafimdoano();


let alterar = prompt('Deseja alterar o mês? (s/n): ').toLowerCase();
if (alterar === 's') {
    mostrar.mes = prompt('Digite o novo mês: ');
    mostrar.escreverMes();
    mostrar.quantofaltafimdoano();
}
