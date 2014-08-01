//https://developer.github.com/v3/search/#search-users
//https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000

import r2 from './r2.dependency';
import User from './User';

class Users   {
  constructor () {
    this.url = "https://api.github.com/search/users";
    this.users = [];
  }

  search (terms) {
    return new r2.Request(this.url).jsonp(`q=${terms}`).then((results) => {
      results.data.items.forEach((userData) => {
        this.users.push(new User(userData))
      });
    });
  }
}

export default Users;

/*
window.githubUsers = new Users();

githubUsers.search("mad").then((data)=>{
  console.log(githubUsers)
}).catch((error) => {
  console.log(error);
});
*/