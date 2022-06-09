const fetchURL = "https://api.open5e.com/monsters/"
var languageButtonsEl = document.querySelector('#language-buttons');


var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};

var getUserRepos = function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};

var getFeaturedRepos = function (language) {
  // What are the query parameters doing here?
  // TODO: Write your answer here
  var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    // What would happen if there was no `return;` here?
    // TODO: Write your answer here
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    // What is the result of this string concatenation?
    // TODO: Write your answer here
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);











const fetchURL = "https://api.open5e.com/monsters/"
fetch(fetchURL, {
  cache: "reload",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (monsters) {
    console.log(monsters);
  });

// function search (event) {
//   var query = document.querySelector("btn");
//   query.addEventListener("click", function() {;
//     search();
//   })
//   fetch("https://api.open5e.com/monsters/" + query, {
//     cache: "reload",
//   })

//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (monsters) {
//     if (monsters.results[0]) {
//       serveMonster(monsters.results[0]);
//     } else {
//       //make a statement for an error here
//     }
//   })}





// Might need 32-44 at later time// 
  // function serveMonster(fetchURL) {
  //   fetch(fetchURL, {
  //     cache: "reload",
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (monsters) {
  //       console.log(monsters);
  //     })
  //     .then
  //   console.log(results.then)
    // var image = document.getElementById("monsterImage");
    // if (monsters.img_main) {
    //   image.src = monsters.img_main;
    // }
  }

  serveMonster(fetchURL)

// fetch("https://api.open5e.com/monsters/?search=fir", {
  