import promptSync from "prompt-sync";
const prompt = promptSync();

export default class Cliente {
    #nome;
    #endereco;
    #renda;

    constructor(nome, endereco, renda) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#renda = renda;
      }
    get nome() {
        return this.#nome
      }
    set nome(novoNome) {
          this.#nome = novoNome
      }



    get endereco (){
       return this.#endereco
    }
    set endereco (novoEnderenco){
       this.#endereco = novoEnderenco
    }
    


    get renda (){
        return this.#renda
    }
    set renda(rend) { 
        if (rend > 0) {
            this.#renda = rend;
        }else{
            console.log('Insira um valor válido!');
        }
    }
}





