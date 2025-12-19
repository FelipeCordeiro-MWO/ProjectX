const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", () => {
    titulo.style.display = "none";
    resultado.style.display = "block";
});
