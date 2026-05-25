
// Cube‑0 JS – Master Cube

// Maske laden
fetch("mask.html")
  .then(r => r.text())
  .then(t => {
    document.getElementById("mask").innerHTML = t;
  });

// Kernbereich initialisieren
document.getElementById("core").innerHTML = `
  <div class="core-title">Cube‑0 Kern</div>
  <div class="core-info">Master‑Steuerung aktiv</div>
`;

// Wissenschaftlicher Output (IST → SOLL)
function c0_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑0</div>
    <div class="out-ist">IST: ${ist}</div>
    <div class="out-soll">SOLL: ${soll}</div>
  `;
}

// Beispielstart
c0_out("System bereit", "System synchron");
// STATUS-MELDER FÜR CUBE-0
window.cube_status["cube0"] = {
  ok: true,
  reason: "",
  needs: []
};

