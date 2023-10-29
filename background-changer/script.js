const btn = document.querySelector(".btn");
const body = document.body;

btn.addEventListener("click", () => {
  const randomColor = randomBg();
  console.log(randomColor);

  body.style.backgroundColor = randomColor;
  btn.style.color = randomColor;
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
