function makeHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  //   heart.innerText = hearts[Math.floor(Math.random() * 6)]; // generates a random heart from the arrays of hearts
  heart.innerText = "🖤";
  heart.style.fontSize = Math.random() * 6 + "rem";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setInterval(() => {
    heart.remove();
  }, 5000);
}

setInterval(makeHeart, 250);

const hearts = ["🤍", "🤎", "💜", "💖", "💞", "🖤", "❣️"];
