const github = new GitHub();
const ui = new UI();

document.querySelector(".container form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userText = document.querySelector(".container form input").value;

  if (userText !== "") {
    github
      .getUser(userText) //
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //
        } else {
          ui.showProfile(data.profile);
          ui.cleanInput();
        }
      });
  } else {
    //
  }
});

// fab6483e541d403dfef250ae3bfeb8022f76452d
