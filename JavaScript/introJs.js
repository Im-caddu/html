// Criar referências aos elementos que quero manipular
const frm = document.querySelector("form");
const resp = document.querySelector("#mnome");
const soma = document.querySelector("#soma");
const media = document.querySelector("#media");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulário
    
    // Armazena os números em um array (vetor)
    const numeros = [
        Number(frm.inN1.value),
        Number(frm.inN2.value),
        Number(frm.inN3.value),
        Number(frm.inN4.value)
    ];
    
    // Somar os valores do vetor usando um loop
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    
    // Calcular a média
    const mediaValores = total / numeros.length;
    
    // Exibir o nome e os resultados
    const nome = frm.inNome.value;
    resp.innerText = `Olá ${nome}!`;
    soma.innerText = `A soma dos números é ${total}!`;
    media.innerText = `A média dos números é ${mediaValores}`;
});