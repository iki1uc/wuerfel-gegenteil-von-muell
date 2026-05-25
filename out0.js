// out0.js – Wissenschaftlicher Output für Cube‑0

function out0_write(ist, soll, ableitung) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑0</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
    <div class="out-ableitung"><b>Ableitung:</b> ${ableitung}</div>
  `;
}

// Beispielstart
out0_write(
  "System bereit",
  "System synchron",
  "Cube‑0 dient als Master‑Pipeline und versorgt alle Cubes."
);

