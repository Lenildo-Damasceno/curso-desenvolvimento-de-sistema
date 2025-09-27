import promptSync from 'prompt-sync';
const prompt = promptSync();

function CalcularCalorias (tipodeexer,tempoemMin) {
    let exercicio = tipodeexer.toLowerCase();
    switch (exercicio){
        case 'caminhada':
        return tempoemMin*5
        case 'corrida' :
        return tempoemMin*10;
        case 'bicicleta':
        return tempoemMin*8;
        default: 
        return console.log("Exercício não encontrado");
 }
}


let exercicioFeito = prompt("QUAL EXERCICIO VOCÊ REALIZOU : ");

let tempoemMin = Number(prompt(`Quanto tempo você fez de ${exercicioFeito} : `));

let calorias = CalcularCalorias(exercicioFeito, tempoemMin); 

console.log(`Você gastou ${calorias} calorias fazendo ${exercicioFeito} por ${tempoemMin} minutos`);




    