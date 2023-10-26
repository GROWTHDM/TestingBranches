let num = document.getElementById("rand");

function atualizarElemento() {
  num.textContent = getRndInteger(1, 400);
}

setInterval(atualizarElemento, 1000);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
