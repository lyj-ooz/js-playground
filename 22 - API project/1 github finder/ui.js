class UI {
  constructor() {
    this.profile = document.querySelector(".profile");
    this.lastestRepos = document.querySelector(".latest-repo");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="user-pic">
        <img
          src=${user.avatar_url}
          alt="github user profile picture"
        />
        <a href="${user.html_url}" target="_blank">View Profile</a>
      </div>
      <div class="user-info">
        <div class="user-info-numbers">
          <div class="repos blue">Public Repos: <span>${user.public_repos}</span></div>
          <div class="gists gray">Public Gists: <span>${user.public_gists}</span></div>
          <div class="followers green">Followers: <span>${user.followers}</span></div>
          <div class="following turq">Following: <span>${user.following}</span></div>
        </div>

        <div class="user-info-strings">
          <table>
            <tbody>
              <tr>
                <td>Company: <span>${user.company}</span></td>
              </tr>
              <tr>
                <td>Wesite/blog: <span>${user.blog}</span></td>
              </tr>
              <tr>
                <td>Location: <span>${user.location}</span></td>
              </tr>
              <tr>
                <td>Member Since: <span>${user.created_at}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  showRepos(repos) {
    console.log(repos);

    let str = "";

    repos.forEach((repo) => {
      str += `
        <div class="repo-box">
          <div class="repo-title">${repo.name}</div>
          <div class="repo-nums">
            <div class="stars blue">Stars: <span>${repo.stargazers_count}</span></div>
            <div class="watchers green">Watchers: <span>${repo.watchers_count}</span></div>
            <div class="forks yellow">Forks: <span>${repo.forks_count}</span></div>
          </div>
        </div>
      `;
    });

    this.lastestRepos.innerHTML = `
      <h3>Latest Repos</h3>
      ${str}
    `;
  }

  clearInput() {
    document.querySelector(".container form input").value = "";
  }

  showAlert() {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = "warning";
    div.appendChild(document.createTextNode("User not found"));
    const h = document.querySelector(".search > h2");
    document.querySelector(".search").insertBefore(div, h);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    // warning div가 중복으로 뜨지 않도록 이미 있으면 또 생기는건 지움.
    const alert = document.querySelector(".warning");
    if (alert) {
      alert.remove();
    }
  }

  clearProfileRepos() {
    this.profile.style.display = "none";
    document.querySelector(".latest-repo").innerHTML = "";
  }
}
