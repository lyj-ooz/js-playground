class GitHub {
  constructor() {
    this.client_id = "79ec4f2e058c5043ee96";
    this.cliend_secret = "fab6483e541d403dfef250ae3bfeb8022f76452d";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.cliend_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.cliend_secret}`
    );

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    // return profileData, reposData;
    return {
      profile: profileData, // 변수 이름 똑같게 해서 profile, 만 적어도 됨.
      repos: reposData,
    };
  }
}
