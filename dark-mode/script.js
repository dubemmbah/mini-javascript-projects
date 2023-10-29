const toggle = document.getElementById("toggle");

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark", e.target.checked); // basically this will apply provided that the condition is true ie., the btn must be checked for this to evaluate to true
});
