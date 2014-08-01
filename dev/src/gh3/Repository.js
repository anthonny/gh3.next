//https://developer.github.com/v3/repos/#get
//GET /repos/:owner/:repo
import r2 from '../r2/r2';
import User from './User';

class Repository   {
  constructor (properties) {
    Object.assign(this, properties);
    this.url = "https://api.github.com/repos/" + this.owner.login + "/" + this.name;
  }

  fetch () {
    return new r2.Request(this.url).jsonp().then((properties) => {
      Object.assign(this, properties.data);
      this.owner = new User(this.owner)
    })
  }

}

export default Repository;

/*
window.gh3 = new Repository({owner: new User({login:"k33g"}), name:"gh3"});

gh3.fetch().then((data) => {
  console.log(gh3);
}).catch((error) => {
  console.log(error);
});
*/
