function gerarTabuada(){
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(inicio) || isNaN(fim)) {
        alert("Digite valores numéricos válidos.");
        return;
    }
    if (inicio > fim) {
        alert("O valor inicial deve ser menor que o final.")
        return;
    }
    for (let i = inicio; i <= fim; i++) {
        let bloco = '<h3>Tabuada do ${i}</h3>'

        for (let j = 1; j <= 10; j++) {
            bloco += '${i} x ${j} = ${i * j}<br>';
        }
        bloco += "<br>"
        resultado.innerHTML += bloco;
    }
}