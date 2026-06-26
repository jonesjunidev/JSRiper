// 1. Explique a diferença entre escopo de função e de bloco.
// Escopo de função: As variáveis somente podem ser usadas dentro da função em que foi criada. Escopo de bloco: Funciona somente dentro do bloco de condição criado, exemplo: while, for, if

// 2. Analise o código a seguir e diga o que será impresso:
var x = 1;
function teste() {
 console.log(x);
 var x = 2;
 console.log(x);
}
teste();

// Serão impressos os valores undefined e 2. A var x sofrerá de hoisting, sendo inicializada primeiro na "var x = 1;", porém, o JS
// somente interpretará o valor dado à variável na "var x = 2;".

// 3. Reescreva o seguinte código com let para evitar problemas de hoisting:

function exemplo() {
 if (true) {
 var nome = "Ana";
 }
 console.log(nome);
}

function exemplo() {
  let nome;

  if (true) {
    nome = "Ana";
  }

  console.log(nome); 
}
exemplo();

// 4. Desafio: explique por que o código abaixo imprime 3, 3, 3 e como corrigir:

for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 100);
}

for (let i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 100);
}

// Como já foi dito anteriormente, var é afetado pelo hoisting do JS, virando uma variável global, devido a isso, o laço de repetição irá ler de forma errônea a variável, e por atuar mais rapidamente que o setTimeOut de 100, serão imprimidos somente a condição limite de atuação do laço de repetição.