import promptSync from "prompt-sync";
const prompt = promptSync();

class Lampada {
  
  constructor(potencia) {
    this.acesa = false;
    this.potencia = potencia || 90;
    
  }

  acender() {
    this.acesa = true;
  }

  apagar() {
    this.acesa = false;
  }

  informarSituacao() {
    if (this.acesa) {
      console.log("LÂMPADA ACESA 💡");
    } else {
      console.log("LÂMPADA DESLIGADA  🕯 ");
    }
  }

  informarPotencia() {
    console.log(`A POTÊNCIA DA LÂMPADA É ${this.potencia}W`);
  }
}

const minhaLampada = new Lampada();

let resposta = prompt("Digite 1 para acender ou 0 para apagar a lâmpada: ");
if (resposta == "1") {
  minhaLampada.acender();
} else {
  minhaLampada.apagar();
}

minhaLampada.informarSituacao();
minhaLampada.informarPotencia();

