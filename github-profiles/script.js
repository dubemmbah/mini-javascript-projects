const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  const resp = await fetch(API_URL + user);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" />
    </div>
    <div>
        <h2 class="${user.name}"></h2>
        <p class="${user.bio}"></p>
        
        <ul>
            <li>${user.followers}</li>
            <li>${user.following}</li>
            <li>${user.public_repos}</li>
        </ul>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
