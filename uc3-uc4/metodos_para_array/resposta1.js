import promptSync from 'prompt-sync';
const prompt = promptSync();

let PalavrasOfencivas = [ "preto de merda", "preta de merda", "macaco", "macaca", "crioulo", "crioula", "nego",
   "nega", "racinha", "escravo", "escrava", "viado", "bicha", "sapatão", "traveco", "queima rosca", "boiola", 
   "baiano preguiçoso", "paraíba", "gringo de merda", "macumbeiro", "macumbeira", "crente fanático", "matar", 
   "estuprar", "agredir", "bater em", "linchar", "fuzilar", "esfaquear", "desmembrar", "quero que morra", 
   "tem que apanhar",  "putaria", "buceta", "caralho", "merda", "bosta", "droga", 
   "nudes", "sexo explícito",  "gordo baleia", "gorda baleia", "retardado", "retardada", "idiota", "imbecil", 
   "trouxa", "corno", "corna", "puta", "puto", "vagabunda", "vagabundo", "seu lixo", "inútil"];

   let contadordeOfencivas = 0

console.log("======= VIA CERTA NATAL ==========");
let textoOriginal = prompt("POR FAVOR JORNALISTA MANDE SEU TEXTO PARA CORREÇÃO : ");
let palavras = textoOriginal.split(" "); // transformando texto em array
let novoArrayDePalavras = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  const palavraLimpa = palavra.toLowerCase();

  if (PalavrasOfencivas.includes(palavraLimpa)) {
    novoArrayDePalavras.push('***');
    contadordeOfencivas = contadordeOfencivas + 1;
  } else {
    novoArrayDePalavras.push(palavra);
  }
}


 console.log("\n seu texto original é:", textoOriginal);
 console.log("\n TEXTO CORRIGIDO:", novoArrayDePalavras.join(" "));
 console.log("\n quantidade de ofensas:", contadordeOfencivas);

//ok