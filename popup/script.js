const popUpContainer = document.getElementById("container");
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", () => {
  popUpContainer.classList.add("active");
});

btnClose.addEventListener("click", () => {
  popUpContainer.classList.remove("active");
});
