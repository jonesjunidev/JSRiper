// 1. Faça um botão que, ao ser clicado, mude o texto de um parágrafo. 

    let paragrafo = document.querySelector("p");
    
    document.querySelector("button").addEventListener("click", function() {
        
        paragrafo.innerText = "Quadrado";
        
    }); 
// 2. Capture o texto digitado em um input e mostre em tempo real abaixo dele. 

    let aga = document.querySelector("h1");

    document.querySelector("input").addEventListener("input", function(t){

        aga.innerText = t.target.value;

    })

//3. Ao passar o mouse sobre uma imagem, troque sua borda.

    let magem = document.querySelector("img");
    
    document.querySelector("img").addEventListener("mouseover", function(){

        magem.classList.add("imagem");

    });