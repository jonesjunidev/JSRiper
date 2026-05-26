// 1. Use um laço for para exibir os números de 1 a 10. 
let p = 1;

for (p; p <= 10; p++){
    console.log("Números de 1 a 10: ", p);
}

// 2. Use while para somar números de 1 a 5. 
let s = 0;
let p = 1;

while(p <= 5){
    s += p;
    p++;
}

console.log("Soma dos números de 1 a 5 é: ", s);

// 3. Crie um do...while que peça uma senha até que seja '1234'.
let senha = "1324"

do {
    console.log("Senha incorreta");
} while (senha != "1234");
