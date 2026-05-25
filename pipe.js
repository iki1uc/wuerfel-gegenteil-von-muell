// GLOBALER STATUS-CONTAINER
window.cube_status = window.cube_status || {};

// Pipeline‑Start
function pipe_init(cubeID) {
  const cube = cubeList.find(c => c.id === cubeID);
  if (!cube) return;

  // Maske laden
  fetch(cube.mask)
    .then(res => res.text())
    .then(html => {
      document.getElementById("mask").innerHTML = html;

      // Shine erst NACH dem Laden der Maske
      autoScaleOutput();
      autoShine();
      if (typeof shinePresent === "function") {
        shinePresent();
      }

      // Statuspanel aktualisieren
      const statusList = cube_system_check();
      renderCubeStatusPanel(statusList);
    });

  // Kern setzen
  document.getElementById("core").innerText = cube.core;

  // Wissenschaftlicher Output (Platzhalter)
  const out = document.getElementById("out");
  if (out) {
    out.innerText = "IST:\nSOLL:\nAbleitung:\n\n(Wissenschaftlicher Output folgt hier…)";
  }
}

// Systemdiagnose
function cube_system_check() {
  const result = [];
  for (const id in window.cube_status) {
    const s = window.cube_status[id];
    result.push({
      id,
      ok: s.ok === true,
      reason: s.reason || "",
      needs: s.needs || []
    });
  }
  return result;
}

// Ampel‑Anzeige
function renderCubeStatusPanel(statusList) {
  const map = {
    cube0: "status-cube0",
    cube1: "status-cube1",
    cube2: "status-cube2",
    cube3: "status-cube3",
    cubeLive: "status-cubeLive"
  };

  statusList.forEach(s => {
    const row = document.getElementById(map[s.id]);
    if (!row) return;

    const color = s.ok ? "status-green" : "status-red";
    const dot = `<span class="status-dot ${color}"></span>`;
    const text = s.ok
      ? `${s.id} → OK`
      : `${s.id} → FEHLER (${s.reason || "Unbekannt"})`;

    row.innerHTML = dot + text;
  });
}
