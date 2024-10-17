let arrayAleatorio = [];

function gerar() {
    arrayAleatorio = [];
    for (i = 0; i < 10; i++) {
        const num = Math.floor(Math.random() * 50) + 1;
        arrayAleatorio.push(num);
    }
    document.getElementById("randomArray").textContent = "[" + arrayAleatorio.join(", ") + "]";
}

function buscar() {
    const numerosPares = arrayAleatorio.filter(num => num % 2 == 0);

    const menorPar = numerosPares.length > 0 ? Math.min(...numerosPares) : "**Nenhum**";
    const maior = Math.max(...arrayAleatorio);

    document.getElementById("menorPar").textContent = menorPar;
    document.getElementById("maior").textContent = maior;
}

