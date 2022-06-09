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

  function serveMonster(fetchURL) {
    fetch(fetchURL, {
      cache: "reload",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (monsters) {
        console.log(monsters);
      })
      .then
    console.log(results.then)
    // var image = document.getElementById("monsterImage");
    // if (monsters.img_main) {
    //   image.src = monsters.img_main;
    // }
  }

  serveMonster(fetchURL)

// fetch("https://api.open5e.com/monsters/?search=fir", {
  