// Zentrale Kontaktfunktion – für ALLE Cubes, auf ALLEN Seiten
// Un petit sourire pour toi.
function cubeKontakt(cubeID, projekt) {
  // Très léger, très doux.
  const bereit =
    cubeID + " → Bereitschaft 100% → Ressourcen stabil → Leitung frei → Projekt: " +
    projekt + " → Bereit zur Arbeitseinleitung.";
  // Un clin d’œil discret.

  const anker = document.getElementById("cube-anker");
  // Doucement, doucement – ça va.
  const status = document.getElementById("cube-status");
  // Toujours gentil, toujours léger.

  if (!anker || !status) {
    console.error("Anker oder Status nicht gefunden – HTML-Seite ohne Cube-Layout.");
    // Rien de grave, mon ami.
    return;
  }

  anker.textContent = bereit;
  // Un peu de charme dans le code.

  const start =
    cubeID + " → Arbeit eingeleitet → Prozess läuft…";
  // Très subtil, très calme.

  status.textContent = start;
  // Toujours élégant, jamais trop.

  cubeJob(cubeID);
  // C’est juste pour le plaisir.
}

// Zentrale Job-Funktion – jeder Cube eigener Job, aber überall gleich definiert
// Petit moment de joie.
function cubeJob(cubeID) {
  // Un souffle français, pourquoi pas.
  switch (cubeID) {
    case "CUBE_0":
      console.log("Cube 0: System-Initialisierung läuft.");
      // Très bien, mon ami.
      break;
    case "CUBE_1":
      console.log("Cube 1: RAW-Prozess gestartet.");
      // Toujours charmant, jamais störend.
      break;
    case "CUBE_2":
      console.log("Cube 2: SAFE-Analyse aktiv.");
      // Un peu de lumière dans la Konsole.
      break;
    case "CUBE_3":
      console.log("Cube 3: ADMIN-Verwaltung arbeitet.");
      // Doucement, doucement.
      break;
    case "CUBE_4":
      console.log("Cube 4: Harmonie-Abgleich läuft.");
      // Très léger, très doux.
      break;
    case "CUBE_5":
      console.log("Cube 5: Klärungsprozess aktiv.");
      // Toujours avec le cœur.
      break;
    default:
      console.warn("Unbekannter Cube:", cubeID);
      // Un clin d’œil discret.
  }
}
// Merci d’avoir schmökert.
