let startX = 0;
let endX = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  endX = event.touches[0].clientX;
}

function handleTouchEnd() {
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Swipe left
      console.log("Swiped left");
      handleSwipeLeft();
    } else {
      // Swipe right
      console.log("Swiped right");
      handleSwipeRight();
    }
  }

  startX = 0;
  endX = 0;
}

function handleSwipeLeft() {
    const panel = document.querySelector('.panel'); // replace with your actual panel class or id
    const targetPosition = calculateLeftPosition(); // your logic here
    panel.style.transform = `translateX(${targetPosition}px)`;
    panel.style.transition = 'transform 0.3s ease';
}

function handleSwipeRight() {
    const panel = document.querySelector('.panel'); // replace with your actual panel class or id
    const targetPosition = calculateRightPosition(); // your logic here
    panel.style.transform = `translateX(${targetPosition}px)`;
    panel.style.transition = 'transform 0.3s ease';
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);
