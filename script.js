// Fade-in effect for elements
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("header, main p, .cta, .hashtags, footer");

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 300); // delay each element
  });
});

// Floating alien emoji effect
setInterval(() => {
  const alien = document.createElement("span");
  alien.textContent = "👽";
  alien.style.position = "fixed";
  alien.style.left = Math.random() * window.innerWidth + "px";
  alien.style.top = "100%";
  alien.style.fontSize = "2rem";
  alien.style.animation = "floatUp 5s linear forwards";
  document.body.appendChild(alien);

  // remove after animation
  setTimeout(() => alien.remove(), 5000);
}, 2000); // every 2 sec