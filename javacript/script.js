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

// Ejecutar las funciones
// piedraPapelTijeras();
// contadorDeVocales()
