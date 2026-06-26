// 1. Dado um array de números, use `map` para criar um novo array com o quadrado de cada número.

const numeros = [2, 4, 6, 8];
const quadrados = numeros.map(n => n ** 2);
console.log(quadrados);

// 2. Use `filter` para extrair os nomes com mais de 5 letras do array:

const nomes = ['João', 'Fernanda', 'Carlos', 'Eva'];
const nomões = nomes.filter(nome => nome.length > 5);
console.log(nomões); // ["Fernanda", "Carlos"]

// 3. Some todos os elementos de um array de preços com `reduce`:

const precos = [10.5, 22.3, 18.4];
const somaPrecos = precos.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(somaPrecos); 

// 4. (Desafio) Dado um array de produtos com nome e preço, use `reduce` para calcular o valor total da compra:

const carrinho = [
    {nome: 'Camiseta', preco: 29.99 },
    {nome: 'Calça', preco: 89.9 },
    {nome: 'Meias', preco: 9.99 }
];

const valorTotal = carrinho.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(valorTotal); 