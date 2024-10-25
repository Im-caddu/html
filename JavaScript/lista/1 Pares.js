const GerarNumeros = document.querySelector("#gerarNumeros");
const Numeros = document.querySelector("#numeros");
const Pares = document.querySelector("#pares");

GerarNumeros.addEventListener("click", () => {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(numeroAleatorio);
    }

    const pares = numeros.filter(numero => numero % 2 === 0);
    Pares.innerText = `Números Pares: ${pares.join(", ")}`;
});