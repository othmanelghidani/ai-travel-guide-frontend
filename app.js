const API = "https://func-travel-othman-d6g4epe3bcedg8aa.francecentral-01.azurewebsites.net/api/travel";

document.getElementById("btn").addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim() || "Paris";
  const out = document.getElementById("out");
  out.textContent = "Chargement...";

  try {
    const url = `${API}?name=${encodeURIComponent(city)}`; // ton trigger actuel attend "name"
    const res = await fetch(url);
    const text = await res.text();
    out.textContent = text;
  } catch (e) {
    out.textContent = "Erreur: " + e.message;
  }
});
