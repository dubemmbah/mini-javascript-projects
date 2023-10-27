const container = document.getElementById("container");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = "This challenge is pretty crazy";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
