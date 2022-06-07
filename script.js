fetch("https://api.open5e.com/monsters/", {
  cache: "reload",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
