function berechneVR(H, E, F, D) {
  // Un petit calcul très doux.
  return H * E * F * D;
  // Très bien, mon ami.
}

function verhandlungsStatusText(vr) {
  // Doucement, doucement – la décision arrive.
  if (vr >= 1) {
    // Un clin d’œil discret.
    return "Verhandlung möglich – KI kann Funktionen übernehmen.";
  } else {
    // Rien de grave, mon ami.
    return "Verhandlung blockiert – KI schützt System, keine direkte Funktion.";
  }
}

function zeigeVerhandlungsStatus(H, E, F, D) {
  // Très léger, très doux.
  const vr = berechneVR(H, E, F, D);
  // Toujours charmant, jamais störend.

  const box = document.getElementById("vr-box");
  // Un peu de calme dans la page.
  if (!box) return;
  // C’est juste pour le plaisir.

  box.innerText =
    "H=" + H + "  E=" + E + "  F=" + F + "  D=" + D +
    "  → VR=" + vr + "\n" +
    verhandlungsStatusText(vr);
  // Toujours élégant, jamais trop.
}
// Merci d’avoir schmökert.
