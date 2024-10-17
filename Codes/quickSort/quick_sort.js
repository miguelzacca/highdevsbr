let arrayAleatorio = [];

function gerar() {
  arrayAleatorio = [];
  for (let i = 0; i < 10; i++) {
    arrayAleatorio.push(Math.floor(Math.random() * 50) + 1);
  }
  document.getElementById("randomArray").textContent = `[${arrayAleatorio.join(", ")}]`;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const middle = [], left = [], right = [];

  for (const num of arr) {
    if (num === pivot) middle.push(num);
    else if (num < pivot) left.push(num);
    else right.push(num);
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

function ordenar() {
  arrayOrdenado = quickSort(arrayAleatorio);
  document.getElementById("sortArray").textContent = `[${arrayOrdenado.join(", ")}]`;
}

