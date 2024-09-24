//Criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const N1 = document.querySelector("#N1");
const N2 = document.querySelector("#N2");
const N3 = document.querySelector("#N3");
const N4 = document.querySelector("#N4");
const resp = document.querySelector("#mnome");
const soma = document.querySelector("#soma");
const media = document.querySelector("#media");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário
    const nome = frm.inNome.value;
    console.log(nome);
    const N1 = Number(frm.inN1.value);
    console.log(N1);
    const N2 = Number(frm.inN2.value);
    console.log(N2);
    const N3 = Number(frm.inN3.value);
    console.log(N3);
    const N4 = Number(frm.inN4.value);
    console.log(N4);
    resp.innerText = `Olá ${nome}!`;
    soma.innerText = `A soma dos números é ${N1 + N2 + N3 + N4}!`;
    media.innerText = `A média dos números é ${(N1 + N2 + N3 + N4)/4}`;
});