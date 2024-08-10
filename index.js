const bodyEl = document.querySelector("body");

const createHeart = (x, y) => {
  const spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

// Handle mouse events
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;
  createHeart(xPos, yPos);
});

// Handle touch events
let isTouching = false;

bodyEl.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Prevents scrolling on touch devices
  isTouching = true;
  for (let i = 0; i < event.touches.length; i++) {
    const touch = event.touches[i];
    createHeart(touch.clientX, touch.clientY);
  }
});

bodyEl.addEventListener("touchmove", (event) => {
  event.preventDefault(); // Prevents scrolling on touch devices
  if (isTouching) {
    for (let i = 0; i < event.touches.length; i++) {
      const touch = event.touches[i];
      createHeart(touch.clientX, touch.clientY);
    }
  }
});

bodyEl.addEventListener("touchend", () => {
  isTouching = false;
});
