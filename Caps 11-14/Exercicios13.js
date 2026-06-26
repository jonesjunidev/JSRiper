// 1. Crie uma função chamada `executarDuasVezes` que recebe uma função como argumento e a executa duas vezes.

function executadenovo(fun) {
    fun();
    fun();
}
eexecutadenovo(() => console.log("Trabaiando..."));

// 2. Construa uma função chamada `criarSaudacao(saudacao)` que retorna outra função que recebe o nome da pessoa.

function criarSaudacao(saudacao) {
    return function(nome) {
        return `${saudacao}, ${nome}!`;
    };
}
const saudacaobipbop = criarSaudacao("Bom dia, eu sou um robô,");
console.log(saudacaobipbop("Ana"));

// 3. Escreva uma função `calcular` que recebe dois números e uma função de operação (como soma, subtração etc.).

function calcular(a, b, operacao) {
    return operacao(a, b);
}
const subtrair = (x, y) => x - y;
console.log(calcular(10, 4, subtrair));

// 4. (Desafio) Implemente uma função `compose(f, g)` que retorna uma nova função onde `f(g(x))` é executado.

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
const dobro= x => x * 2;
const somaunzin = x => x + 1;
const dobraesomaunzin = compose(somaunzin, dobro);
console.log(dobraesomaunzin(5)); 
