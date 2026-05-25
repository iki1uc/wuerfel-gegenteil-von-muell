// pipe.js – Zentrale Pipeline für alle Cubes
// Erfasst: Masken, Kernbereiche, wissenschaftliche Outputs

// Liste aller Cubes im System
const cubeList = [
  { id: 0, mask: "mask.html", core: "Cube‑0 Kern", active: false },
  { id: 1, mask: "mask.html", core: "Cube‑1 Kern", active: true },
  { id: 2, mask: "mask.html", core: "Cube‑2 Kern", active: true },
  { id: 3, mask: "mask.html", core: "Cube‑3 Kern", active: true }
];

// Pipeline‑Start
function pipe_init(cubeID) {
  const cube = cubeList.find(c => c.id === cubeID);
  if (!cube) return;

  // Maske laden
  fetch(cube.mask)
    .then(r => r.text())
    .then(t => {
      document.getElementById("mask").innerHTML = t;
    });

  // Kernbereich setzen
  document.getElementById("core").innerHTML = `
    <div class="core-title">${cube.core}</div>
    <div class="core-info">Pipeline aktiv – Cube ${cubeID}</div>
  `;

  // Wissenschaftlicher Output vorbereiten
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube ${cubeID}</div>
    <div class="out-ist">IST: Initialisiert</div>
    <div class="out-soll">SOLL: Verbund bereit</div>
  `;
}

// Automatischer Start
// Wird von jeder Cube‑HTML aufgerufen
window.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(document.body.getAttribute("data-cube"));
  pipe_init(id);
});

