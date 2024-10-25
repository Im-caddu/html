const frm = document.querySelector("form");
const media = document.querySelector("#media");
const resultado = document.querySelector("#resultado");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const numeros = [
        Number(frm.inA1.value),
        Number(frm.inA2.value),
        Number(frm.inA3.value),
        Number(frm.inA4.value),
        Number(frm.inA5.value)
    ];
    
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    
    const mediaValores = total / numeros.length;
    
    if (mediaValores >= 7) {
        let resultado = Aprovado;
    } else {
        let resultado = Reprovado;
    }

    media.innerText = `${mediaValores}`;
    resultado.innerText = '${resultado}';
});