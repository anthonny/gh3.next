//https://developer.github.com/v3/repos/#get
//GET /repos/:owner/:repo
import Request from './Request.js';
import User from './User.js';

class Repository   {
  constructor (properties) {
    Object.assign(this, properties);
    this.url = "https://api.github.com/repos/" + this.owner.get("login") + "/" + this.name;

  }

  fetch () {
    return new Request(this.url).jsonp().then((properties) => {
      Object.assign(this, properties.data);
      this.owner = new User(this.owner);
      return this;
    })
  }

}

export default Repository;

