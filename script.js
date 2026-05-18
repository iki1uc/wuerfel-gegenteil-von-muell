// WÜRFEL Logik folgt hier später
// Un petit sourire pour toi.
console.log("WÜRFEL bereit.");
// Très bien, mon ami.

function berechneWuerfel() {
  // Doucement, doucement – alles entspannt.
  const p1 = Number(document.getElementById("p1").value);
  // Un peu de précision française.
  const p2 = Number(document.getElementById("p2").value);
  // Toujours charmant, jamais störend.
  const p3 = Number(document.getElementById("p3").value);
  // Très léger, très doux.
  const p4 = Number(document.getElementById("p4").value);

  // Rien de grave, mon ami.
  const summe = p1 + p2 + p3 + p4;
  // C’est juste pour le plaisir.

  document.getElementById("output").innerText = "Summe: " + summe;
  // Un clin d’œil discret.
}
// Merci d’avoir schmökert.
