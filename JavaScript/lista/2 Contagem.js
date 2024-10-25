const frm = document.querySelector("#contagemf");
const resultado = document.querySelector("#resultado");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(document.querySelector("#inNumero").value);

    if (numero < 10) {
        resultado.innerText = "O número precisa ser maior ou igual a 10!";
        return;
    }

    let contagem = "Contagem Regressiva: ";
    for (let i = numero; i >= 10; i--) {
        contagem += i + " ";
    }

    resultado.innerText = contagem;
});
