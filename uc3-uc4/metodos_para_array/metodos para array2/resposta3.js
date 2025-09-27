import PromptSync from "prompt-sync" 
const prompt = PromptSync() 

// Legenda para os códigos numéricos:
// SITUAÇÃO: 1 (Ativo), 0 (Inativo), 2 (Pendente)
// ALA: 1 (Norte), 2 (Sul), 3 (Leste), 4 (Oeste)

let pessoas = [
    {
      NOME: "Ana Silva",
      ID: 101,
      IDADE: 28,
      SITUACAO: 1, // Ativo
      ALA: 1       // Norte
    },
    {
      NOME: "Bruno Costa",
      ID: 102,
      IDADE: 45,
      SITUACAO: 0, // Inativo
      ALA: 2       // Sul
    },
    {
      NOME: "Carla Mendes",
      ID: 103,
      IDADE: 34,
      SITUACAO: 1, // Ativo
      ALA: 3       // Leste
    },
    {
      NOME: "Daniel Oliveira",
      ID: 104,
      IDADE: 52,
      SITUACAO: 1, // Ativo
      ALA: 4       // Oeste
    },
    {
      NOME: "Eduarda Pereira",
      ID: 105,
      IDADE: 21,
      SITUACAO: 2, // Pendente
      ALA: 1       // Norte
    }
  ];