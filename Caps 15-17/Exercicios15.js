// 1. Use `setTimeout` para exibir "Olá, mundo!" após 1,5 segundos.

setTimeout(() => {
    console.log("Olá, mundo!");
}, 1500);

// 2. Crie um contador que exibe um número a cada segundo até 10 e depois para.

let contador = 0;
const atedez = setInterval(() => {
    contador++;
    console.log(contador);
    if (contador === 10) clearInterval(ate10);
}, 1000);

// 3. Faça uma função que, ao ser chamada, inicie um `setInterval` e outra que pare esse intervalo.

let meuIntervalo;
function comeca() {
    if (!meuIntervalo) {
        meuIntervalo = setInterval(() => console.log("Rodando..."), 1000);
    }
}
function paro() {
    clearInterval(meuIntervalo);
    meuIntervalo = null;
}

// 4. (Desafio) Implemente um cronômetro com `setInterval`, mostrando minutos e segundos.

let seg = 0;
let min = 0;
const cronometro = setInterval(() => {
    seg++;
    if (seg === 60) {
        seg = 0;
        min++;
    }
    const minutos = String(min).padStart(2, '0');
    const segundos = String(seg).padStart(2, '0');
    console.log(`${minutos}:${segundos}`);}, 1000);