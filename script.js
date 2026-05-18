// WÜRFEL Logik folgt hier später
console.log("WÜRFEL bereit.");

function berechneWuerfel() {
  const p1 = Number(document.getElementById("p1").value);
  const p2 = Number(document.getElementById("p2").value);
  const p3 = Number(document.getElementById("p3").value);
  const p4 = Number(document.getElementById("p4").value);

  const summe = p1 + p2 + p3 + p4;

  document.getElementById("output").innerText = "Summe: " + summe;
}
