//https://developer.github.com/v3/users/

import r2 from './r2/r2';

class User   {
  constructor (properties) {
    Object.assign(this, properties);
    this.url = "https://api.github.com/users/" + this.login;
  }

  fetch () {
    return new r2.Request(this.url).jsonp().then((properties) => { Object.assign(this, properties.data); })
  }

  fetchRepositories () {
    //TODO
    //https://developer.github.com/v3/repos/#list-user-repositories
    //create repository Class
  }
}

export default User;

/*
window.k33g = new User({login:"k33g"});
k33g.fetch().then((data) => {
  console.log(k33g)
}).catch((error) => {
  console.log(error);
});
 */