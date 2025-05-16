const grid = document.getElementById("gallery-grid");
const imgEls = Array.from(grid.getElementsByClassName("gallery-img"));
const images = [
  "/src/assets/images/product/1.jpeg",
  "/src/assets/images/product/2.jpeg",
  "/src/assets/images/product/3.jpeg",
  "/src/assets/images/product/4.jpeg",
  "/src/assets/images/product/5.jpeg",
  "/src/assets/images/product/6.jpeg",
];
let positions = [0, 1, 2, 3, 4, 5];
let galleryInterval = null;

function getGridPositions() {
  // 3 columns, 2 rows
  const pos = [];
  for (let i = 0; i < 6; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    pos.push({ row, col });
  }
  return pos;
}
const gridPositions = getGridPositions();

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function animateGrid() {
  const oldPositions = positions.slice();
  const newPositions = shuffle(positions);

  // Only animate images whose positions change
  for (let i = 0; i < imgEls.length; i++) {
    if (oldPositions[i] !== newPositions[i]) {
      const fromPos = gridPositions[oldPositions[i]];
      const toPos = gridPositions[newPositions[i]];
      // Limit movement to 90% of cell size to avoid overflow
      const cellWidth = grid.offsetWidth / 3;
      const cellHeight = grid.offsetHeight / 2;
      const dx = (toPos.col - fromPos.col) * cellWidth * 0.9;
      const dy = (toPos.row - fromPos.row) * cellHeight * 0.9;

      imgEls[i].style.transition =
        "transform 1.2s cubic-bezier(.22,1.5,.56,1), opacity 1.2s cubic-bezier(.22,1.5,.56,1)";
      imgEls[i].style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
      imgEls[i].style.opacity = "0.85";
    } else {
      imgEls[i].style.transition = "";
      imgEls[i].style.transform = "";
      imgEls[i].style.opacity = "1";
    }
  }

  setTimeout(() => {
    imgEls.forEach((img, i) => {
      img.src = images[newPositions[i]];
      img.alt = `Product ${newPositions[i] + 1}`;
      img.style.transition =
        "transform 0.7s cubic-bezier(.22,1.5,.56,1), opacity 0.7s cubic-bezier(.22,1.5,.56,1)";
      img.style.transform = "scale(1)";
      img.style.opacity = "1";
      setTimeout(() => {
        img.style.transition = "";
        img.style.transform = "";
      }, 700);
    });
    positions = newPositions;
  }, 1200);
}

// Only start animation when gallery is fully visible
function startGalleryAnimation() {
  if (!galleryInterval) {
    galleryInterval = setInterval(animateGrid, 3500);
  }
}
function stopGalleryAnimation() {
  if (galleryInterval) {
    clearInterval(galleryInterval);
    galleryInterval = null;
  }
}

// Intersection Observer for full visibility
const gallerySection = grid.closest("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        startGalleryAnimation();
      } else {
        stopGalleryAnimation();
      }
    });
  },
  { threshold: 1.0 }
);
observer.observe(gallerySection);
