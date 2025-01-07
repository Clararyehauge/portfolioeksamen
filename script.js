//Har fået hjælp af chatGPT til denne del

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
    let width = 0;
    const percentageText = percentageTexts[index];

    //Står når målet er nået, eller tilføj med en - opdater løbende barens bredde og procent
    let interval = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(interval);
      } else {
        width++;
        loadingBar.style.width = width + "%";
        percentageText.textContent = width + "%";
      }
    }, 50); // Opdaterings tidspunkt - hvert 0,5 milisekund
  });
}

// Funktion til at starte animationen for alle bars
function startAnimation() {
  animateLoadingBar(loadingBars85, percentageTexts85, 85);
  animateLoadingBar(loadingBars75, percentageTexts75, 75);
  animateLoadingBar(loadingBars50, percentageTexts50, 50);
}

startAnimation();

// Start animationen forfra efter 15 sekunder, alle barer starter fra 0
setInterval(() => {
  loadingBars85.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts85.forEach((text) => (text.textContent = "0%"));

  loadingBars75.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts75.forEach((text) => (text.textContent = "0%"));

  loadingBars50.forEach((bar) => (bar.style.width = "0%"));
  percentageTexts50.forEach((text) => (text.textContent = "0%"));

  // Start animationen forfra hver 13 sekund
  startAnimation();
}, 13000);
