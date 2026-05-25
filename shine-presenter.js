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

  // langer Text → farbiger Shine
  if (length > 400) {
    shineColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;
  }

  out.style.textShadow = `
    0 0 12px ${shineColor},
    0 0 24px ${shineColor},
    0 0 36px ${shineColor}
  `;

  // -----------------------------
  // 3) Auto‑Scaling (1× / 2× / 4× / 8×)
  // -----------------------------
  let scale = 1;
  if (length > 200) scale = 2;
  if (length > 400) scale = 4;
  if (length > 800) scale = 8;

  out.style.transform = `scale(${scale})`;
  out.style.transformOrigin = "top left";

  // -----------------------------
  // 4) Besucher‑Modus (Smooth Fade)
  // -----------------------------
  out.style.opacity = "0";
  setTimeout(() => {
    out.style.opacity = "1";
  }, 50);
}
