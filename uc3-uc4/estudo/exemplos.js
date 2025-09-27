import promptSync from 'prompt-sync';
const prompt = promptSync()



let input = prompt("DIGITE UM NUMERO DE 1 A 7 PARA SABER DIA DA SEMANA");
let diadasemana = parseInt(input);

switch (diadasemana) {
	case 1:
		console.log("SEGUNDA FEIRA");
		break;
	case 2:
		console.log("TERÇA FEIRA");
		break;
	case 3:
		console.log("QUARTA FEIRA");
		break;
	case 4:
		console.log("QUINTA FEIRA");
		break;
	case 5:
		console.log("SEXTA FEIRA");
		break;
	case 6:
		console.log("SÁBADO");
		break;
	case 7:
		console.log("DOMINGO");
		break;
	default:
		console.log("Número inválido. Digite um número de 1 a 7.");
		break;
}
