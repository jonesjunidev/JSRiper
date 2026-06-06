// 1. Crie uma função que receba dois números e retorne a multiplicação entre eles. 
function multiplicação(v1,v2){
    return v1 * v2;
}
console.log(multiplicação(2,5));

// 2. Faça uma função que receba um nome e exiba uma saudação personalizada. 

function saudpers(nome){
    if (nome == "João"){
        console.log("Salve João");
    }
    else if (nome == "Maria"){
        console.log("Bom dia Maria");
    }
    else if (nome == "Victor"){
        console.log("Olá, bom dia Victor!");
    }
    else {
        console.log("Desconheço o nome");
    }
}

console.log(saudpers("João"));
console.log(saudpers("Maria"));
console.log(saudpers("Victor"));
console.log(saudpers("Jones"));