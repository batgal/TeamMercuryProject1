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
    alert("Please enter a monster name");
  }
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
        // displayStats(data, mon);
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
      var immunities = monStat.results[i].condition_immunities;

      var repoEl = document.createElement("div");
      repoEl.classList =
        "list-item flex-row justify-space-between align-center";
      repoEl.textContent = "Condition Immunities: ";

      var titleEl = document.createElement("span");
      titleEl.textContent = immunities;

      repoEl.appendChild(titleEl);

      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";

      repoEl.appendChild(statusEl);

      monsterContainerEl.appendChild(repoEl);
    }
  }
};
// second API dynamic HTML
var displayXP= function (monStat, monName) {
  if (monStat.length === 0) {
    monsterContainerEl.textContent = "No monsters found.";
    return;
  }

  searchMonster.textContent = monName;
  console.log(monStat);
//tried using the same format for the other API but took out the name parameters since it's not in this path. 
//also tried renaming everything so that theyre different
//this doesnt work but when i checked the console the div for this isnt showing up at all but idk if data needs to populate for the div to populategi
  for (var i = 0; i < monStat.length; i++) {
    console.log(monName);

    if (monStat.toLowerCase() === monName.toLowerCase()) {
      var experience = monStat.xp;

      var xpEl = document.createElement("div");
      xpEl.classList =
        "list-item flex-row justify-space-between align-center";
      xpEl.textContent = "XP gained: ";


=======
      var titleEl = document.createElement("span");
      titleEl.textContent = experience;

      xpEl.appendChild(titleEl);

      var experienceEl = document.createElement("span");
      experienceEl.classList = "flex-row align-center";

      xpEl.appendChild(experienceEl);

      monsterContainerEl.appendChild(xpEl);
    }
  }
}

userFormEl.addEventListener("submit", formSubmitHandler);
