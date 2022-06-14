const fetchURL = "https://api.open5e.com/monsters/?limit=1000"; 
const fetchURLTwo = "https://www.dnd5eapi.co/api/monsters/";
var repoContainerEl = document.querySelector("#monster-container");
var repoSearchTerm = document.querySelector("#searchItem");
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#monsterName");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var monsterName = nameInputEl.value.trim();

  if (monsterName) {
    getUserRepos(monsterName);

    repoContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("Please enter a monster name");
  }
};

var getUserRepos = function (user) {
  // var apiUrl = "https://api.open5e.com/monsters/";

  fetch(fetchURL)
    .then(function (response) {
      if (response.ok) {
        // console.log(response);
        response.json().then(function (data) {
          // console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
};
var formSubmitHandler2 = function (event2) {
  event2.preventDefault();

  var monsterName2 = nameInputEl.value.trim();

  if (monsterName2) {
    getMonsterData(monsterName2);

    repoContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("Please enter a monster name");
  }
};
var getMonsterData = function (user2) {
  // var apiUrl = "https://api.open5e.com/monsters/";

  fetch(fetchURLTwo)
    .then(function (response2) {
      if (response2.ok) {
        console.log(response2);
        response2.json().then(function (data2) {
          console.log(data2);
          displayRepos(data2, user2);
        });
      } else {
        alert("Error: " + response2.statusText);
      }
    })
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    return;
  }

  repoSearchTerm.textContent = searchTerm;
  console.log(repos);

  for (var i = 0; i < repos.results.length; i++) {
    // console.log(repos.results[i].name);
    // console.log(searchTerm);
    if (repos.results[i].name.toLowerCase() === searchTerm.toLowerCase()) {
      var armorClass = repos.results[i].armor_class;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
        repoEl.textContent = "Armor Class: "

      var titleEl = document.createElement("span");
      titleEl.textContent = armorClass;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      repoContainerEl.appendChild(repoEl);
    }
    if (repos.results[i].name.toLowerCase() === searchTerm.toLowerCase()) {
      var hitPoints = repos.results[i].hit_points;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
        repoEl.textContent = "Hit Points: "

      var titleEl = document.createElement("span");
      titleEl.textContent = hitPoints;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      repoContainerEl.appendChild(repoEl);
    }
    if (repos.results[i].name.toLowerCase() === searchTerm.toLowerCase()) {
      var immunities = repos.results[i].condition_immunities;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
        repoEl.textContent = "Condition Immunities: "

      var titleEl = document.createElement("span");
      titleEl.textContent = immunities;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      repoContainerEl.appendChild(repoEl);
    }
  }
};


userFormEl.addEventListener("submit", formSubmitHandler);

