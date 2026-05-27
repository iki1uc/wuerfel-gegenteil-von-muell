// ---------------------------------------------------------
// CUBE‑0 · NEUTRALRAUM
// ID: CUBE‑0 / FILE: c0.js / ROLE: Neutralpunkt
// ---------------------------------------------------------

// 1) System‑Kontext (nur LESEN)
const CUBE_ID = "CUBE-0";
const FILE_ID = "c0.js";
const ROLE = "Neutralraum";

const PREV = localStorage.getItem("PREV") || "start8";
const MODE = localStorage.getItem("MODE") || "AB";   // AB = neutraler Cluster

// 2) Gravitation = 0 (reiner Nullpunkt)
function gravitation0() {
  return "0";
}

// 3) Schiene = vorher → c0 → c1
function schiene0() {
  return {
    vorher: PREV,
    jetzt: "c0",
    nachher: "c1",
    grav: gravitation0(),
    mode: MODE
  };
}

// 4) Maßnahmen‑Anker für CUBE‑0
function c0_anker() {
  return {
    FIX: "Neutralraum",
    WHY: "0‑Regel halten, Reset ermöglichen, Schiene stabilisieren",
    ACT: "Keine Aktion – C0 erzeugt Stabilität, keinen Output",
    END: "Übergabe an CUBE‑1 ohne Konflikt"
  };
}

// 5) Output‑Renderer
function c0_out(ist, soll) {
  const anker = c0_anker();

  document.getElementById("out").innerHTML = `
    <div class="out-title">Neutralraum – CUBE‑0</div>

    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>

    <div class="out-anker">
      <b>ANKER:</b><br>
      FIX → ${anker.FIX}<br>
      WHY → ${anker.WHY}<br>
      ACT → ${anker.ACT}<br>
      END → ${anker.END}
    </div>
  `;
}

// 6) Startsignal (Mini → 0 → C0)
const s0 = schiene0();

c0_out(
  "Neutral",
  `Schiene: ${s0.vorher} → ${s0.jetzt} → ${s0.nachher} | MODE: ${s0.mode} | GRAV: ${s0.grav}`
);

// 7) System‑Markierung (für spätere Übergabe)
localStorage.setItem("PREV", "c0");
