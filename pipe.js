// Pipeline‑Start
function pipe_init(cubeID) {
  const cube = cubeList.find(c => c.id === cubeID);
  if (!cube) return;

  // Maske laden
  fetch(cube.mask)
    .then(res => res.text())
    .then(html => {
      document.getElementById("mask").innerHTML = html;
    });

  // Kern setzen
  document.getElementById("core").innerText = cube.core;

  // Wissenschaftlicher Output (Platzhalter)
  const out = document.getElementById("out");
  if (out) {
    out.innerText = "IST:\nSOLL:\nAbleitung:\n\n(Wissenschaftlicher Output folgt hier…)";
  }

  // Auto‑Scaling + Shine
  autoScaleOutput();
  autoShine();

  // Shine‑Presenter (falls vorhanden)
  if (typeof shinePresent === "function") {
    shinePresent();
  }
}
