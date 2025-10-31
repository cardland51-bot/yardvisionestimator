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
  // Add your left-swipe action here (e.g., move to next icon)
}

function handleSwipeRight() {
  // Add your right-swipe action here (e.g., move to previous icon)
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);
