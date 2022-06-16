const fetchURL = "https://api.open5e.com/monsters/?limit=1000";
const fetchURLTwo = "https://www.dnd5eapi.co/api/monsters/";
var monsterContainerEl = document.querySelector("#monsterContainer");
var searchMonster = document.querySelector("#searchItem");
var userFormEl = document.querySelector("#userForm");
var nameInputEl = document.querySelector("#monsterName");

//Calling first API//
var formSubmitHandler = function (event) {
  event.preventDefault();
  var monsterName = nameInputEl.value.trim();

  if (monsterName) {
    getMonsterStats(monsterName);

    monsterContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    modal.classList.add("is-active");
  }
  //Local Storage//
  var pastMonster = {
    monsterName: monsterName,
  };

  localStorage.setItem("pastMonster", JSON.stringify(pastMonster));
};

var getMonsterStats = function (mon) {
  // var apiUrl = "https://api.open5e.com/monsters/";

  fetch(fetchURL).then(function (response) {
    if (response.ok) {
      // console.log(response);
      response.json().then(function (data) {
        // console.log(data);
        displayStats(data, mon);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  fetch(fetchURLTwo + mon).then(function (response) {
    if (response.ok) {
      // console.log(response);
      response.json().then(function (data) {
        console.log(data);
        displayXP(data, mon);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  // });
};

// Joey Help
// fetch(fetchURLTwo)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

var displayStats = function (monStat, monName) {
  if (monStat.length === 0) {
    monsterContainerEl.textContent = "No monsters found.";
    return;
  }

  searchMonster.textContent = monName;
  console.log(monStat);

  for (var i = 0; i < monStat.results.length; i++) {
    // console.log(monStat.results[i].name);
    // console.log(monName);
    if (monStat.results[i].name.toLowerCase() === monName.toLowerCase()) {
      var armorClass = monStat.results[i].armor_class;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
      repoEl.textContent = "Armor Class: ";

      var titleEl = document.createElement("span");
      titleEl.textContent = armorClass;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      monsterContainerEl.appendChild(repoEl);
    }
    if (monStat.results[i].name.toLowerCase() === monName.toLowerCase()) {
      var hitPoints = monStat.results[i].hit_points;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
      repoEl.textContent = "Hit Points: ";

      var titleEl = document.createElement("span");
      titleEl.textContent = hitPoints;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      monsterContainerEl.appendChild(repoEl);
    }
    if (monStat.results[i].name.toLowerCase() === monName.toLowerCase()) {
      var alignment = monStat.results[i].alignment;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
      repoEl.textContent = "Alignment: ";

      var titleEl = document.createElement("span");
      titleEl.textContent = alignment;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      monsterContainerEl.appendChild(repoEl);
    }
  }
};
// second API dynamic HTML
var displayXP = function (monStat, monName) {
  if (!monStat) {
    monsterContainerEl.textContent = "No monsters found.";
    return;
  }

  searchMonster.textContent = monName;

  var experience = monStat.xp;

  var xpEl = document.createElement("div");
  xpEl.classList = "list-item flex-row justify-space-between align-center";
  xpEl.textContent = "XP gained: ";

  var titleEl = document.createElement("span");
  titleEl.textContent = experience;

  xpEl.appendChild(titleEl);

  var experienceEl = document.createElement("span");
  experienceEl.classList = "flex-row align-center";

  xpEl.appendChild(experienceEl);

  monsterContainerEl.appendChild(xpEl);
};

userFormEl.addEventListener("submit", formSubmitHandler);

//Modal//
const huntButton = document.querySelector(".btn");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

//Allows modal to be removed once background is clicked//
modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

//Allows modal to be removed once clicked//
modal.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
