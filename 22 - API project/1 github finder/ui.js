class UI {
  constructor() {
    this.profile = document.querySelector(".profile");
  }

  showProfile(user) {
    //
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

  cleanInput() {
    document.querySelector(".container form input").value = "";
  }
  showAlert() {
    //
  }
}
