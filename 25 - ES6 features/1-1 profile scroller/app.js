const data = [
  {
    name: "Mary",
    age: 40,
    location: "Boston",
    image: "https://randomuser.me/portraits/women/82.jpg",
  },
  {
    name: "Lily",
    age: 30,
    location: "NY",
    image: "https://randomuser.me/portraits/women/30.jpg",
  },
  {
    name: "Biesh",
    age: 35,
    location: "Los Angeles",
    image: "https://randomuser.me/portraits/women/40.jpg",
  },
];

const profiles = profileIterator(data);
showNextProfile();

document.querySelector("#next").addEventListener("click", showNextProfile);

function showNextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentProfile.name}</li>
      <li class='list-group-item'>Age: ${currentProfile.age}</li>
      <li class='list-group-item'>Location: ${currentProfile.location}</li>
    </ul>
  `;
    document.querySelector("#imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">  
  `;
  } else {
    window.location.reload();
  }
}

// iterator function
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
