const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (3 + clickCounter) + (3 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* DARK MODE */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".center-wrap,.navbar,.sidebar,.sidebar i,.movie-list-title,.toggle,.toggle-ball,.movie-filter select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
