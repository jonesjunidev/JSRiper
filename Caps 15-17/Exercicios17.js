// 1. Crie um objeto representando um aluno com nome, idade e curso.

const aluno = {
    nome: "Davy Jones",
    idade: 38,
    curso: "Youtuber"
};

// 2. Converta esse objeto para JSON e exiba no console.

const JSONaluno = JSON.stringify(aluno);
console.log("Objeto em JSON:", JSONaluno);

// 3. Agora transforme uma string JSON válida em objeto e acesse uma das propriedades.

const stringJSON = '{"nome":"Davy Jones","idade":38,"curso":"Youtuber"}';
const converteu = JSON.parse(stringJSON);
console.log("Nome da lenda:", converteu.nome);

// 4. (Desafio) Simule o envio de um objeto representando um pedido (produto, quantidade, valor) usando `fetch` e `JSON.stringify`.

const pedido = {
    produto: "PC da Xuxa",
    quantidade: 1,
    valor: 400.00
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido)
})
.then(resposta => resposta.json())
.then(dadosRecebidos => console.log("Pedido enviado com sucesso:", dadosRecebidos))
.catch(erro => console.error("Erro no envio:", erro));
