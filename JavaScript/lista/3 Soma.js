const frm = document.querySelector("form");
const soma = document.querySelector("#soma");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const numeros = [
        Number(frm.inN1.value),
        Number(frm.inN2.value),
        Number(frm.inN3.value),
        Number(frm.inN4.value)
    ];
    
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }

    soma.innerText = `A soma dos números é ${total}!`;
});