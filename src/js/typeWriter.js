// Typing effect for subtitle only, title is static
const heroSubtitle = document.getElementById("hero-subtitle");
const subtitleText =
  "Say good bye to traditonal methods of brooding methods that are inefficient and costly";

// By default, subtitle is empty
heroSubtitle.textContent = "";

async function typeAndDelete(element, text, delay = 30, pause = 1000) {
  // Type
  for (let i = 0; i <= text.length; i++) {
    element.textContent = text.slice(0, i);
    await new Promise((res) => setTimeout(res, delay));
  }
  await new Promise((res) => setTimeout(res, pause));
  // Delete
  for (let i = text.length; i >= 0; i--) {
    element.textContent = text.slice(0, i);
    await new Promise((res) => setTimeout(res, delay / 2));
  }
  await new Promise((res) => setTimeout(res, 400));
}

// Start typing after 2 seconds
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    (async () => {
      while (true) {
        await typeAndDelete(heroSubtitle, subtitleText, 30, 1000);
      }
    })();
  }, 2000);
});
