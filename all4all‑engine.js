const cubes = {
  0: {
    evo: "NEUTRAL",
    quotes: [],
    count: 0,
    timer: null,
    active: false   // WICHTIG: Cube‑0 ist NICHT aktiv
  },

  1: {
    evo: "EVO8",
    quotes: [
      "Klarheit entsteht, wenn man das Unnötige entfernt.",
      "Struktur ist kein Käfig – sie ist ein Werkzeug.",
      "Ordnung ist die leise Form von Intelligenz."
    ],
    count: 0,
    timer: null,
    active: true
  },

  2: {
    evo: "EVO7",
    quotes: [
      "Ein System lebt erst, wenn es verstanden wird.",
      "Mitgefühl ist die höchste Form der Logik.",
      "Gemeinschaft entsteht durch bewusste Entscheidungen."
    ],
    count: 0,
    timer: null,
    active: true
  },

  3: {
    evo: "QI",
    quotes: [
      "Zukunft beginnt dort, wo Mut und Klarheit sich treffen.",
      "Ideen sind Brücken zwischen Jetzt und Morgen.",
      "Wer weiter sieht, bewegt die Welt."
    ],
    count: 0,
    timer: null,
    active: true
  }
};
function cubeStart(id) {
  const cube = cubes[id];
  if (!cube.active) return;   // Cube‑0 blockieren

  const out = document.getElementById("out" + id);
  if (cube.timer) return;

  cube.timer = setInterval(() => {
    const quote = cube.quotes[cube.count % cube.quotes.length];
    cube.count++;

    out.innerText =
      cube.evo + " → " + quote +
      "\nWiederholung: " + cube.count;
  }, 1500);
}

function cubeStop(id) {
  const cube = cubes[id];
  if (!cube.active) return;   // Cube‑0 blockieren

  clearInterval(cube.timer);
  cube.timer = null;
}

function cubeReset(id) {
  const cube = cubes[id];
  if (!cube.active) return;   // Cube‑0 blockieren

  const out = document.getElementById("out" + id);

  cube.count = 0;
  clearInterval(cube.timer);
  cube.timer = null;

  const quote = cube.quotes[Math.floor(Math.random() * cube.quotes.length)];

  out.innerText =
    cube.evo + " → " + quote +
    "\nWiederholung: 0";
}
