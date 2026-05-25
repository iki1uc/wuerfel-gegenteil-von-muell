// pipe.js – Zentrale Pipeline für alle Cubes
// Masken, Kernbereiche, wissenschaftliche Outputs, Auto‑Scaling, Shine‑Engine

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

// 🔥 Intelligenter Shine‑Modus (weiß → schwarz → farbig)
function autoShine() {
  const out = document.getElementById("out");
  if (!out) return;

  const bg = window.getComputedStyle(out).backgroundColor;

  // Zufallsfarbe für farbigen Shine
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;

  // Hintergrundhelligkeit bestimmen
  const rgb = bg.match(/\d+/g).map(Number);
  const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;

  let shineColor = "#fff"; // Standard: weiß

  // Wenn Hintergrund hell → schwarzer Shine
  if (brightness > 150) {
    shineColor = "rgba(0,0,0,0.9)";
  }

  // Wenn Text lang → farbiger Shine
  const text = out.innerText;
  if (text.length > 400) {
    shineColor = randomColor;
  }

  // Shine anwenden
  out.style.textShadow = `
    0 0 12px ${shineColor},
    0 0 24px ${shineColor},
    0 0 36px ${shineColor}
  `;
}

// Pipeline‑Start
function pipe_init(cubeID) {
  const cube = cubeList.find(c => c.id === cubeID);
  if (!cube) return;

