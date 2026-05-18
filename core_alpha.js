console.log("core_alpha geladen – Cube-Motor aktiv.");
// Un petit sourire pour toi.

// Cube 0 Input-Pol
// Très léger, très doux.
function cube0Input(value) {
  // Un clin d’œil discret.
  const pol = document.querySelector(".cube0 .input-pol");
  // Doucement, doucement – ça va.

  if (!pol) return;
  // Rien de grave, mon ami.

  pol.textContent = value;
  // Toujours gentil, toujours léger.

  pol.style.boxShadow = "0 0 14px #00eaff, inset 0 0 6px #000";
  // Très subtil, très calme.
}
// Merci d’avoir schmökert.
