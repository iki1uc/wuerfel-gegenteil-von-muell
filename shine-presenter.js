// shine-presenter.js – Globaler Besucher‑Präsentator
// Übernimmt: Shine, Kontrast, Farbe, Lesbarkeit, Kill‑Bill‑Effekt

function shinePresent() {
  const out = document.getElementById("out");
  if (!out) return;

  const text = out.innerText.trim();
  const length = text.length;

  // -----------------------------
  // 1) Kill‑Bill‑Kontrast‑Modus
  // -----------------------------
  out.style.padding = "20px";
  out.style.borderRadius = "8px";
  out.style.transition = "all 0.4s ease";

  // Hintergrund automatisch wählen
  if (length < 200) {
    out.style.background = "#000";      // schwarz
    out.style.color = "#fff";           // weiß
  } else if (length < 500) {
    out.style.background = "#111";      // dunkler
    out.style.color = "#ffeb3b";        // Kill‑Bill‑Gelb
  } else {
    out.style.background = "#000";      // zurück zu schwarz
    out.style.color = "#ff4444";        // rot (intensiv)
  }

  // -----------------------------
  // 2) Shine‑Effekt (weiß → schwarz → farbig)
  // -----------------------------
  const bg = window.getComputedStyle(out).backgroundColor;
  const rgb = bg.match(/\d+/g).map(Number);
  const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;

  let shineColor = "#fff"; // Standard: weiß

  // Hintergrund hell → Shine schwarz
  if (brightness > 150) {
    shineColor = "rgba(0,0,0,0.9)";
  }


