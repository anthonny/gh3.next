//https://developer.github.com/v3/search/#search-users
//https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000

import Request from './Request.js';
import User from './User.js';

class Users   {
  constructor () {
    this.url = "https://api.github.com/search/users";
    this.users = [];
  }

  foundUsers () {
    return this.users;
  }

  search (terms) {
    return new Request(this.url).jsonp(`q=${terms}`).then((results) => {
      results.data.items.forEach((userData) => {
        this.users.push(new User(userData))
      });
      return this.users
    });
  }
}

export default Users;


