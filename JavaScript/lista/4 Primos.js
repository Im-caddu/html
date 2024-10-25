const frm = document.querySelector("form");
const resultado = document.querySelector("#resultado");

function Primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const numeros = [
        Number(frm.inN1.value),
        Number(frm.inN2.value),
        Number(frm.inN3.value),
        Number(frm.inN4.value),
        Number(frm.inN5.value),
        Number(frm.inN6.value),
        Number(frm.inN7.value),
        Number(frm.inN8.value),
        Number(frm.inN9.value),
        Number(frm.inN10.value)
    ];
    
    const primos = numeros.filter(Primo);

    resultado.innerText = primos.length > 0 
        ? `Os números primos são: ${primos.join(", ")}` 
        : "Nenhum número primo encontrado.";
});