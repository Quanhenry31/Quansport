const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".list_content");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    console.log(i);
    clickCounter++;
    if (itemNumber - (7 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 800
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log(movieLists[i].querySelectorAll("img").length);
});
