const bodyEl = document.querySelector("body");

const createHeart = (event) => {
  const xPos = event.clientX || event.touches[0].clientX;
  const yPos = event.clientY || event.touches[0].clientY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

// Mouse event
bodyEl.addEventListener("mousemove", createHeart);

// Touch event
bodyEl.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Prevents scrolling on touch devices
  for (let i = 0; i < event.touches.length; i++) {
    createHeart(event);
  }
}, { passive: false });
