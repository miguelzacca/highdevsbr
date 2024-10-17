let arrayAleatorio = [];

function gerar() {
    arrayAleatorio = [];
    for (i = 0; i < 10; i++) {
        const num = Math.floor(Math.random() * 10) + 1;
        arrayAleatorio.push(num);
    }
    document.getElementById("randomArray").textContent = "[" + arrayAleatorio.join(", ") + "]";
}

function calc() {
    const soma = arrayAleatorio.reduce((acc, num) => acc + num, 0);
    const media = soma / arrayAleatorio.length;
    document.getElementById("soma").textContent = soma;
    document.getElementById("media").textContent = media.toFixed(2);
}