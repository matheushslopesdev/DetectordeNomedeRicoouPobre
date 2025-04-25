import { frases } from "./frases.mjs";

const inputName = document.querySelector("#nome");
const button = document.querySelector("#button-nome");
const resultado = document.querySelector("#resultado");

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", () => {
  const paragrafo = document.createElement("p");
  const nome = inputName.value;

  if (inputName.value === "") {
    return;
  }
  if (resultado.querySelector("p")) {
    resultado.querySelector("p").remove();
  }

  button.classList.add("analisando");
  button.innerHTML = "Analisando...";

  setTimeout(() => {
    button.classList.remove("analisando"); // Remove o estado de carregamento
    paragrafo.innerHTML = `<b>${nome.toUpperCase()}</b> ${
      frases[random(0, frases.length)]
    } `;
    resultado.appendChild(paragrafo);
    inputName.value = "";
    button.innerHTML = "Analisar seu Nome";
  }, random(2000, 5000));
});

inputName.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "!" ||
    e.key === "@" ||
    e.key === "#" ||
    e.key === "$" ||
    e.key === "%" ||
    e.key === "¨¨" ||
    e.key === "¨" ||
    e.key === "&" ||
    e.key === "*" ||
    e.key === "(" ||
    e.key === ")" ||
    e.key === "-" ||
    e.key === "_" ||
    e.key === "=" ||
    e.key === "+" ||
    e.key === "'" ||
    e.key === '"'
  ) {
    // Previne a digitação de números
    e.preventDefault();
  }
});
