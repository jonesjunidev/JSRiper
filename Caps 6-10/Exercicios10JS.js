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


// 3. Estilize a interface com CSS básico

