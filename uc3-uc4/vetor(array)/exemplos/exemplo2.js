const listaA = [10, 20, 30, 40, 50, "lenildo"];
const listaB = [100, 20, 300, 40, 500, "lenildo"];
let iguais = [];

// para encontra elementos iguais nos array
for (let i=0;i<listaA.length;i++){
    for (let j=0;j<listaB.length;j++){
        if (listaA[i] === listaB[j]) {
            iguais.push(listaA[i]);
            console.log(`Valor ${listaA[i]} encontrado nas listas.`);
        }
    }
}
console.log("Valores iguais nas duas listas:", iguais);
