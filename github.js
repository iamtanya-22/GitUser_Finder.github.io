class Github{
  constructor(){
    this.client_id='38fea18aead6e42ca1a2';
    this.client_secret='a1d7da0c3936934c666a1fe20f36dab5184bdfb7';
  }
  async getUser(user){
    const profileResponse=await fetch('https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}');
    const profile=profileResponse.json();
    return{
      profile
    }
  }
}