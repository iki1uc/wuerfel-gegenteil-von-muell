// -------------------------------------------
//  GLOBALER STATUS + WEISHEITEN
// -------------------------------------------

window.cube_status = window.cube_status || {};
window.cube_outputs = window.cube_outputs || {};

const cubeWisdom = {
  cube0: "Ich halte den Kern stabil und entferne Ballast.",
  cube1: "Ich erkenne Muster, filtere Lärm und finde Strukturen.",
  cube2: "Ich verdichte Informationen und prüfe Tragfähigkeit.",
  cube3: "Ich sehe Zukunftslogik und markiere Chancen.",
  cubeLive: "Ich verbinde alle Stimmen zu einem System."
};


// -------------------------------------------
//  PIPELINE-START PRO CUBE
// -------------------------------------------

function pipe_init(cubeID) {
  const cube = cubeList.find(c => c.id === cubeID);
  if (!cube) return;

  // Maske laden
  fetch(cube.mask)
    .then(res => res.text())
    .then(html => {
      document.getElementById("mask").innerHTML = html;

      autoScaleOutput();
      autoShine();
      if (typeof shinePresent === "function") shinePresent();

      const statusList = cube_system_check();
      renderCubeStatusPanel(statusList);
    });

  // Kern setzen
  const core = document.getElementById("core");
  if (core) core.innerText = cube.core;

  // Weisheit erzeugen
  window.cube_outputs[cubeID] = cubeWisdom[cubeID] || "(keine Weisheit definiert)";

  // Stimmen aktualisieren
  if (typeof renderCubeVoices === "function") {
    renderCubeVoices();
  }
}


// -------------------------------------------
//  SYSTEMDIAGNOSE
// -------------------------------------------

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


// -------------------------------------------
//  AMPEL-STATUS
// -------------------------------------------

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


// -------------------------------------------
//  OUTPUT-BOX (FÜNF STIMMEN)
// -------------------------------------------

function renderCubeVoices() {
  const map = {
    cube0: "voice-cube0",
    cube1: "voice-cube1",
    cube2: "voice-cube2",
    cube3: "voice-cube3",
    cubeLive: "voice-cubeLive"
  };

  Object.keys(map).forEach(id => {
    const el = document.getElementById(map[id]);
    if (!el) return;

    const text = window.cube_outputs[id] || "(noch kein Output)";
    el.innerHTML =
      `<div class='cube-voice-title'>${id}</div>` +
      `<div class='cube-voice-body'>${text}</div>`;
  });
}


// -------------------------------------------
//  STARTMODUS – ALLE CUBES STARTEN
// -------------------------------------------

function startAllCubes() {
  const cubes = ["cube0", "cube1", "cube2", "cube3", "cubeLive"];
  cubes.forEach(id => pipe_init(id));
}

// Automatisch starten
startAllCubes();
