// 1. Implemente os botões de subtração, multiplicação e divisão.

function somar() {
 let a = parseFloat(document.getElementById('n1').value);
 let b = parseFloat(document.getElementById('n2').value);
 let resul = a + b;
 document.getElementById('resultado').textContent = resul;
}

function subtrair() {
 let a = parseFloat(document.getElementById('n3').value);
 let b = parseFloat(document.getElementById('n4').value);
 let resul = a - b;
 document.getElementById('resultado').textContent = resul;
}

function multiplicar() {
 let a = parseFloat(document.getElementById('n5').value);
 let b = parseFloat(document.getElementById('n6').value);
 let resul = a * b;
 document.getElementById('resultado').textContent = resul;
}

function dividir() {
 let a = parseFloat(document.getElementById('n7').value);
 let b = parseFloat(document.getElementById('n8').value);
 let resul = a / b;
 document.getElementById('resultado').textContent = resul;
}

//<div id="divão">

//    <div class="linhas">
//        <input id='n1'> + <input id='n2'>
//        <button onclick='somar()'>Somar</button>
//    </div>

//    <div class="linhas">
//        <input id='n3'> - <input id='n4'>
//        <button onclick='subtrair()'>Subtrair</button>
//    </div>

//    <div class="linhas">
//        <input id='n5'> x <input id='n6'>
//        <button onclick='multiplicar()'>Multiplicar</button>
//    </div>

//    <div class="linhas">
//        <input id='n7'> : <input id='n8'>
//        <button onclick='dividir()'>Dividir</button>
//    </div>

//    <p id='resultado'></p>

//</div>



// 2. Adicione validação para garantir que os campos não estejam vazios.

if (isNaN(a) || isNaN(b)) {
     document.getElementById('resultado').textContent = "Preenche os campos boy";
     document.getElementById('magina').src = "https://i.ytimg.com/vi/qitZqP6Yw7o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJ0wePgbmmJG6j7hmMudS1PHcUKA";
     return; 
 }

    let resul = a / b;
    document.getElementById('resultado').textContent = resul;
    document.getElementById('magina').src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRBE9e9YFsFy8s3JNuuZRaGw_tanfqhnK5814Vfi5qsoLxnPQEX6wRxlMGdUNTOGz1anUIZhYQPy7E1K3ZpAQ4PVuziC1k3ETqqCF2suEc6LZBxrcr4Lw6Uf8r86rb6ngziUkDnf3pMpTl/s1600/group_waldorf.png";


// 3. Estilize a interface com CSS básico

//#divão{
//    display:flex;
//    flex-direction: column;
//    align-items: flex-start;
//    gap: 10px;
//    font-family: 'Times New Roman', Times, serif;
//    
//}

//.linhas{
//    display: flex;
//    align-items: center;
//    gap: 10px
//}

//#magina{
//   border-width: 5px;
//   border-style:solid;
//    border-color: brown;
//}
