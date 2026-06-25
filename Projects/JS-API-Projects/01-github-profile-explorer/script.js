const previous = document.getElementById("previous");
const next = document.getElementById("next");
const pageCount = document.getElementById("pageCount");
const input = document.querySelector("input");
const searchBtn = document.getElementById("searchBtn");
const searchedProfile = document.getElementById("searchedProfile");

let page = 0;
let count = 1;

async function fetchGithubUsers(page = 0) {
  const response = await fetch(
    `https://api.github.com/users?per_page=20&since=${page}}`,
  );
  const data = await response.json();

  console.log(data);
  const profiles = document.getElementById("profiles");

  profiles.textContent = "";

  for (let user of data) {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = user.avatar_url;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = user.login;

    const profileLink = document.createElement("a");
    profileLink.classList.add("profileLink");
    profileLink.href = user.html_url;
    profileLink.innerHTML = `View Profile`;

    cards.append(avatar, name, profileLink);
    profiles.append(cards);
  }

  const card = document.querySelectorAll(".cards");
  console.log([...card])
  const arr = [...card];
  arr.forEach((card) =>{
    card.addEventListener("click", (e) =>{
        
    })
  })


}

fetchGithubUsers();

next.addEventListener("click", () => {
  page += 20;
  fetchGithubUsers(page);
  count++;
  pageCount.textContent = `Page ${count}`;
});
previous.addEventListener("click", () => {
  if (count === 1) return;
  page -= 20;
  fetchGithubUsers(page);
  count--;
  pageCount.textContent = `Page ${count}`;
});

async function fetchGithubProfile(profileName) {
  const response = await fetch(`https://api.github.com/users/${profileName}`);
  const data = await response.json();

  searchedProfile.textContent = "";

  console.log(data);
  const card = document.createElement("div");
  card.classList.add("searchedProfileCard");

  const avatar = document.createElement("img");
  avatar.classList.add("searchedProfileAvatar");
  avatar.src = data.avatar_url;

  const name = document.createElement("h4");
  name.textContent = data.name;

  const bio = document.createElement("p");
  bio.textContent = data.bio;

  const div = document.createElement("div");
  div.innerHTML = `<div class = "repoInfo">
        <div>
            <h5>Repos</h5>
            <span>${data.public_repos}</span>
        </div>
        <div>
            <h5>Followers</h5>
            <span>${data.followers}</span>
        </div>
        <div>
            <h5>Following</h5>
            <span>${data.following}</span>
        </div>
    </div>`;
  const searchedProfileLink = document.createElement("a");
  searchedProfileLink.classList.add("searchedProfileLink")
  searchedProfileLink.textContent = "View Profile";
  searchedProfileLink.href = data.url;

  card.append(avatar, name, bio, div, searchedProfileLink);

  searchedProfile.append(card);
}

searchBtn.addEventListener("click", () => {
  const profilName = input.value;
  fetchGithubProfile(profilName);
});

