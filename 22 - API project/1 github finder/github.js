class GitHub {
  constructor() {
    this.client_id = "79ec4f2e058c5043ee96";
    this.cliend_secret = "fab6483e541d403dfef250ae3bfeb8022f76452d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.cliend_secret}`
    );

    const profileData = await profileResponse.json();

    // return profileData;
    return {
      profile: profileData,
    };
  }
}
