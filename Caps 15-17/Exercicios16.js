// 1. Crie uma Promise que resolva com uma mensagem após 3 segundos.

const Apromise = new Promise((resolve) => {
    setTimeout(() => resolve("Tem um negócinho"), 3000);
});



// 2. Use `.then()` para mostrar a mensagem no console.

Apromise.then(mensagem => console.log("No finalzinho...", mensagem));

// 3. Reescreva o exercício anterior usando `async` e `await`.

async function Messenger() {
    const mensagem = await new Promise((resolve) => {
        setTimeout(() => resolve("No finalzinho tem um negócinho."), 3000);
    });
    console.log(mensagem);
}
Messenger();

// 4. (Desafio) Crie uma função `carregarDados()` que simula uma requisição assíncrona com delay e trate erro com `try/catch`.

async function carregarDados() {
    try {
        const dados = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const sucesso = Math.random() > 0.5;
                if (sucesso) resolve("Carrego tudin 😏");
                else reject("Faio 😢");
            }, 2000);
        });
        console.log(dados);
    } catch (erro) {
        console.error("Erro detectado no carregamento:", erro);
    }
}
carregarDados();