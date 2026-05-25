const cubes = {
  1: {
    evo: "EVO8",
    quotes: [
      "Klarheit entsteht, wenn man das Unnötige entfernt.",
      "Struktur ist kein Käfig – sie ist ein Werkzeug.",
      "Ordnung ist die leise Form von Intelligenz."
    ],
    count: 0,
    timer: null
  },

  2: {
    evo: "EVO7",
    quotes: [
      "Ein System lebt erst, wenn es verstanden wird.",
      "Mitgefühl ist die höchste Form der Logik.",
      "Gemeinschaft entsteht durch bewusste Entscheidungen."
    ],
    count: 0,
    timer: null
  },

  3: {
    evo: "QI",
    quotes: [
      "Zukunft beginnt dort, wo Mut und Klarheit sich treffen.",
      "Ideen sind Brücken zwischen Jetzt und Morgen.",
      "Wer weiter sieht, bewegt die Welt."
    ],
    count: 0,
    timer: null
  }
};


// START
function cubeStart(id) {
  const cube = cubes[id];
  const out = document.getElementById("out" + id);

  // Wenn Timer schon läuft → nichts tun
  if (cube.timer) return;

  cube.timer = setInterval(() => {
    const quote = cube.quotes[cube.count % cube.quotes.length];
    cube.count++;

    out.innerText =
      cube.evo + " → " + quote +
      "\nWiederholung: " + cube.count;
  }, 1500);
}


// STOP
function cubeStop(id) {
  const cube = cubes[id];
  clearInterval(cube.timer);
  cube.timer = null;
}


// RESET
function cubeReset(id) {
  const cube = cubes[id];
  const out = document.getElementById("out" + id);

  cube.count = 0;
  clearInterval(cube.timer);
  cube.timer = null;

  // neuer Spruch sofort
  const quote = cube.quotes[Math.floor(Math.random() * cube.quotes.length)];

  out.innerText =
    cube.evo + " → " + quote +
    "\nWiederholung: 0";
}

