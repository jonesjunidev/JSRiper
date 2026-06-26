// 1. Crie uma função `saudacao` que retorna outra função com um nome como argumento e imprime: "Olá, [nome]!".

function saudacao() {
    return function(nome) {
        console.log(`Olá, ${nome}`);
    };
}
const saudar = saudacao();
saudar("Jones");

// 2. Construa uma função chamada `multiplicador(x)` que retorna outra função. Esta deve multiplicar o valor recebido por `x`.

function multiplicando(x) {
    return function(y) {
        return x * y;
    };
}
const tamocompetindo = multiplicando(5);
console.log(tamocompetindo(4)); 

// 3. Explique com suas palavras o que é um closure e por que ele é útil.

// O closure é um tipo de função que consegue acessar as variáveis da função externa de onde foi criada, mesmo após ela já ter sido iniciada e acabada. Ele é útil porque permite o funcionamento da função aninhada mesmo após a função externa ter terminado de rodar

// 4. Qual será o resultado do código abaixo?

function criarContador() {
 let i = 0;
 return function() {
 return ++i;
 }
}
let c1 = criarContador();
let c2 = criarContador();
console.log(c1()); // ?
console.log(c1()); // ?
console.log(c2()); // ?

// Serão impressos os valores: 1, 2 (do c1), e 1 (do c2).