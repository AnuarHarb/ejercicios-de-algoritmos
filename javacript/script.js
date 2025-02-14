function piedraPapelTijeras() {
  const opciones = ["piedra", "papel", "tijeras"];
  const jugador = prompt("Elige una opción");
  const computadora = opciones[Math.floor(Math.random() * 3)];

  if (jugador === computadora) {
    alert("empate");
  } else if (
    (jugador === "tijeras" && computadora === "papel") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "piedra" && computadora === " tijeras")
  ) {
    alert("¡Gana el jugador!");
  } else {
    alert("¡Gana la computadora!");
  }
}

function contadorDeVocales(palabra) {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a" || palabra[i] === "á" || palabra[i] === "A") {
      contador++;
    }
  }
}

function esPalindromo(palabra) {
  // Limpiar la palabra: quitar espacios, tildes y convertir a minúsculas
  const textoLimpio = palabra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  // Comparar el texto limpio con su reverso
  const textoReverso = textoLimpio.split("").reverse().join("");
  return textoLimpio === textoReverso;
}

// comentario
// Ejecutar las funciones
// piedraPapelTijeras();
// contadorDeVocales()
