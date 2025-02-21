const input = document.querySelector("#wordInput");
const title = document.getElementById("selectedWord");
const button = document.getElementById("activationButton");
const background = document.querySelector(".container");

// Esto cambio el valor del titulo
input.addEventListener("input", function () {
  console.log("evento activado");
  title.textContent = input.value;
});

button.addEventListener("click", highlightVocals);

function highlightVocals() {
  const titleArray = title.textContent.split("");
  let contador = 0;

  for (let i = 0; i < titleArray.length; i++) {
    if (
      titleArray[i] === "a" ||
      titleArray[i] === "á" ||
      titleArray[i] === "A"
    ) {
      contador++;
      titleArray[i] = `<span class="vocal">${titleArray[i]}</span>`;
    }
  }

  const finalWord = titleArray.join("");
  title.innerHTML = finalWord + " tiene" + contador + "vocales";
}
