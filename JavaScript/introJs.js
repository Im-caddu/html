//Criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário
    const nome = frm.inNome.value;
    console.log(nome);
    resp.innerText = `Olá ${nome}!`;
})