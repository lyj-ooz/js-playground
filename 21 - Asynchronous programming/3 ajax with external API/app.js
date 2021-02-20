document.querySelector("button").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      const jokes = JSON.parse(this.responseText);

      console.log(jokes);
      let story = "";

      if (jokes.type === "success") {
        jokes.value.forEach((joke) => {
          story += `<li>${joke["joke"]}</li>`;
        });
      } else {
        story += "<li>Oops...</li>";
      }

      document.querySelector(".jokes").innerHTML = story;
    }
  };

  xhr.send();

  e.preventDefault();
}
