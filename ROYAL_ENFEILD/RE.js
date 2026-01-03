const bikeItems = document.querySelectorAll("[data-bike-anim]");
const bikeImg = document.querySelectorAll("[data-bike-img]");
const bikeText = document.querySelectorAll("[data-bike-text]");

function bikeScrollAnim() {
  const trigger = window.innerHeight * 0.85;
  bikeItems.forEach((item) => {
    if (item.getBoundingClientRect().top < trigger) {
      item.classList.add("active");
    }
  });
  bikeImg.forEach((item) => {
    if (item.getBoundingClientRect().top < trigger) {
      item.classList.add("active");
    }
  });
  bikeText.forEach((item) => {
    if (item.getBoundingClientRect().top < trigger) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", bikeScrollAnim);
bikeScrollAnim();
