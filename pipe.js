// pipe.js – Zentrale Pipeline für alle Cubes
// Erfasst: Masken, Kernbereiche, wissenschaftliche Outputs

// Liste aller Cubes im System
const cubeList = [
  { id: 0, mask: "mask.html", core: "Cube‑0 Kern", active: false },
  { id: 1, mask: "mask.html", core: "Cube‑1 Kern", active: true },
  { id: 2, mask: "mask.html", core: "Cube‑2 Kern", active: true },
  { id: 3, mask: "mask.html", core: "Cube‑3 Kern", active: true }
];

// 🔥 Auto‑Scaling für wissenschaftlichen Output
function autoScaleOutput() {
  const out = document.getElementById("out");
  if (!out) return;

  const text = out.innerText;
  const length = text.length;
  const lines = text.split("\n").length;

  let scale = 1;

  if (length > 200 || lines > 6) scale = 2;
  if (length > 400 || lines > 10) scale = 4;
  if (length > 800 || lines > 16) scale = 8;

  out.style.transform = `scale(${scale})`;
  out.style.transformOrigin = "top left";
}

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

  // 🔥 Auto‑Scaling aktivieren
  autoScaleOutput();
}

// Automatischer Start
window.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(document.body.getAttribute("data-cube"));
  pipe_init(id);
});
