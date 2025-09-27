

 let temperaturas = [];
 let soma = 0;
 let media;


console.log("===TEMPERATURA ANUAL DO RN===");
for (let i = 0; i < 12; i++) {
    let temp;
    while (true) { //validando e forçando usuario a digitar numero valido
        let entrada = prompt("Digite a temperatura do " + (i + 1) + "º mês:");
        temp = Number(entrada);
        if (!isNaN(temp) && entrada.trim() !== "" && isFinite(temp)) {
            break;
        } else {
            console.log("Por favor, digite apenas números válidos!");
        }//fim do if
    }
    temperaturas.push(temp);//adiciona numero ao vetor
    soma += temp;
}