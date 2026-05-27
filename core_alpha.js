// ---------------------------------------------------------
// core_alpha.js – CUBE‑0 Motor (Neutralraum)
// Rolle: Input-Pol steuern, ohne EVO, ohne Logikdruck
// ---------------------------------------------------------

console.log("core_alpha geladen – CUBE‑0 Motor aktiv.");

// 1) Input-Pol für CUBE‑0 aktualisieren
function cube0Input(value) {
  const pol = document.querySelector(".cube0 .input-pol");
  if (!pol) return;

  // Wert setzen
  pol.textContent = value;

  // Visuelle Bestätigung (Neutralraum-Stil)
  pol.style.boxShadow = "0 0 14px #00eaff, inset 0 0 6px #000";
  pol.style.transition = "0.3s ease";

  // CUBE‑0 bleibt neutral → keine weitere Logik
}

// 2) Reset-Funktion für CUBE‑0 (0‑Regel)
function cube0Reset() {
  const pol = document.querySelector(".cube0 .input-pol");
  if (!pol) return;

  pol.textContent = "⧉";        // Neutral-Symbol
  pol.style.boxShadow = "none"; // kein Zug, kein Druck
}

// 3) Startsignal für CUBE‑0
console.log("CUBE‑0 bereit – Neutralraum stabil.");
