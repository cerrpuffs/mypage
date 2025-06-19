
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("#nombre-animado");
    if (!h1) return;

    const originalText = h1.dataset.value;
    let iteration = 0;

    interval = setInterval(() => {
      h1.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });
}