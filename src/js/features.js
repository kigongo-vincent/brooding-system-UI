// Features data
const features = [
  {
    icon: "fa-thermometer-half",
    img: "/src/assets/images/features/1.jpg",
    title: "Automated Temperature Control",
    desc: "Ensures optimal warmth for chicks by automatically adjusting heat levels, reducing manual intervention and improving survival rates.",
  },
  {
    icon: "fa-sun-o",
    img: "/src/assets/images/features/2.jpg",
    title: "Solar Powered System",
    desc: "Operates efficiently using sustainable solar energy, making it ideal for rural and off-grid poultry farms.",
  },
  {
    icon: "fa-mobile",
    img: "/src/assets/images/features/3.jpg",
    title: "Smart Monitoring",
    desc: "Real-time monitoring of brooding conditions with alerts for temperature, humidity, and power status, accessible from your mobile device.",
  },
  {
    icon: "fa-leaf",
    img: "/src/assets/images/features/4.jpg",
    title: "Energy Efficient Design",
    desc: "Minimizes energy consumption while maximizing chick comfort, helping you save on operational costs.",
  },
];

const featuresImg = document.getElementById("features-img");
const featureIcon = document.getElementById("feature-icon");
const featureTitle = document.getElementById("feature-title");
const featureDesc = document.getElementById("feature-desc");
const prevBtn = document.getElementById("feature-prev");
const nextBtn = document.getElementById("feature-next");

let featureIndex = 0;

function showFeature(idx) {
  const f = features[idx];
  featuresImg.style.backgroundImage = `url('${f.img}')`;
  featureIcon.className = `fa ${f.icon} text-primary text-4xl mb-3`; // update icon
  featureTitle.textContent = f.title;
  featureDesc.textContent = f.desc;
}

prevBtn.addEventListener("click", () => {
  featureIndex = (featureIndex - 1 + features.length) % features.length;
  showFeature(featureIndex);
});

nextBtn.addEventListener("click", () => {
  featureIndex = (featureIndex + 1) % features.length;
  showFeature(featureIndex);
});

// Fade in on scroll
function fadeInFeatures() {
  const section = featuresImg.parentElement;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.style.opacity = "1";
    window.removeEventListener("scroll", fadeInFeatures);
  }
}

// Initialize
showFeature(featureIndex);
setTimeout(fadeInFeatures, 200);
