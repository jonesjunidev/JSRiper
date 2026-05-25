// 1. Crie um programa que verifique se uma pessoa pode votar (idade >= 16). 
let idade = 18;

if (idade >=16)
    {
        console.log("Tá podendo votar")
    }
    else
        {
            console.log("Tá podendo votar não")
        }

// 2. Use switch para exibir uma mensagem diferente para cada dia da semana.

let DiaSemana = "Domingo";

switch (DiaSemana){
    case "Domingo": console.log("Domingou 😵‍💫"); break;
    case "Segunda": console.log("Segundou 😴"); break;
    case "Terça": console.log("Terçou 👌"); break;
    case "Quarta": console.log("Quartou 🤘"); break;
    case "Quinta": console.log("Quintou 😏"); break;
    case "Sexta": console.log("Sextou 😎🍺"); break;
    case "Sábado": console.log("Sabadou 🤮"); break;
    default: console.log("Existe isso daí não boy");
}