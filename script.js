// Vælg alle loading bars og procent tekst elementer
const loadingBars85 = document.querySelectorAll(".loading_bar85");
const percentageTexts85 = document.querySelectorAll(".percentage85");

const loadingBars75 = document.querySelectorAll(".loading_bar75");
const percentageTexts75 = document.querySelectorAll(".percentage75");

const loadingBars50 = document.querySelectorAll(".loading_bar50");
const percentageTexts50 = document.querySelectorAll(".percentage50");

// Funktion til at animere en bar
function animateLoadingBar(loadingBars, percentageTexts, targetWidth) {
  loadingBars.forEach((loadingBar, index) => {
    let width = 0; // Start bredde
    const percentageText = percentageTexts[index]; // Hent procent tekst for den aktuelle loading bar

    let interval = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(interval); // Stop når målet er nået
      } else {
        width++; // Øg bredden med 1% ad gangen
        loadingBar.style.width = width + "%"; // Opdater loading barens bredde
        percentageText.textContent = width + "%"; // Opdater procent teksten
      }
    }, 50); // Opdater hver 50 millisekund for at få en jævn effekt
  });
}

// Funktion til at starte animationen for alle bars
function startAnimation() {
  animateLoadingBar(loadingBars85, percentageTexts85, 85);
  animateLoadingBar(loadingBars75, percentageTexts75, 75);
  animateLoadingBar(loadingBars50, percentageTexts50, 50);
}

// Start animationen første gang
startAnimation();

// Start animationen forfra efter 15 sekunder
setInterval(() => {
  // Reset alle loading bars til 0% før de starter forfra
  loadingBars85.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts85.forEach((text) => (text.textContent = "0%"));

  loadingBars75.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts75.forEach((text) => (text.textContent = "0%"));

  loadingBars50.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts50.forEach((text) => (text.textContent = "0%"));

  // Start animationen forfra
  startAnimation();
}, 13000); // Kør dette hvert 15. sekund (15000 ms)
