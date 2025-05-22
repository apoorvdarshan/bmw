let lastScrollTop = 0;
const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const mainNav = document.querySelector(".main-nav");

function showHeader() {
  topLeft.classList.remove("scroll-hidden");
  topRight.classList.remove("scroll-hidden");
  mainNav.classList.remove("scroll-hidden");
}

function hideHeader() {
  topLeft.classList.add("scroll-hidden");
  topRight.classList.add("scroll-hidden");
  mainNav.classList.add("scroll-hidden");
}

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const scrollDown = currentScroll > lastScrollTop;

  if (scrollDown) {
    hideHeader();
  } else {
    showHeader();
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

window.addEventListener("click", function playOnce() {
  const audio = document.getElementById("bg-audio");
  if (audio && audio.paused) {
    audio.play().catch(() => {});
    window.removeEventListener("click", playOnce); // remove listener after first play
  }
});
