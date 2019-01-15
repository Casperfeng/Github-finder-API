class Github {
  constructor() {
    this.client_id = 'e69334fbe3b7a47ec010';
    this.client_secret = 'f71ab3f99d3e6875ebbbfc940b25fef536e9989d';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}