// CUBE‑0 · Neutralraum
// ID: CUBE‑0 / FILE: c0.js / ROLE: Neutralpunkt

// 1) Kontext nur LESEN, nicht hart überschreiben
const CUBE_ID = "CUBE-0";
const FILE_ID = "c0.js";
const ROLE = "Neutralraum";

const PREV = localStorage.getItem("PREV") || "start8";
const MODE = localStorage.getItem("MODE") || "AB"; // AB = neutraler Cluster

// 2) Gravitation = 0 (kein Zug, reiner Nullpunkt)
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

// 4) Output
function c0_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Neutralraum – CUBE‑0</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

// 5) Startsignal
const s0 = schiene0();
c0_out(
  "Neutral",
  `Schiene: ${s0.vorher} → ${s0.jetzt} → ${s0.nachher} | MODE: ${s0.mode} | GRAV: ${s0.grav}`
);
