import promptSync from "prompt-sync";
const prompt = promptSync();

 export default class data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    escreverData() {
        console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }

    escreverMes() {
        switch (this.mes) {
            case '01': console.log("Janeiro"); break;
            case '02': console.log("Fevereiro"); break;
            case '03': console.log("Março"); break;
            case '04': console.log("Abril"); break;
            case '05': console.log("Maio"); break;
            case '06': console.log("Junho"); break;
            case '07': console.log("Julho"); break;
            case '08': console.log("Agosto"); break;
            case '09': console.log("Setembro"); break;
            case '10': console.log("Outubro"); break;
            case '11': console.log("Novembro"); break;
            case '12': console.log("Dezembro"); break;
            default: console.log("Número inválido");
        }
    }

    quantofaltafimdoano() {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    const mesNum = Number(this.mes); 
    const diaNum = Number(this.dia);

    let diasCorridos = 0;
    for (let i = 0; i < mesNum - 1; i++) {
        diasCorridos += diasPorMes[i];
    }
    diasCorridos += diaNum;

    const totalDiasNoAno = 365;
    const diasRestantes = totalDiasNoAno - diasCorridos;

    console.log(`A partir de ${this.dia}/${this.mes}/${this.ano}, faltam ${diasRestantes} dias para o fim do ano.`);
}
 }
