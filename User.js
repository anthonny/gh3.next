//https://developer.github.com/v3/users/

import Request from './Request.js';

class User   {
  constructor (fields={}) {
    this.fields = fields;
    this.fields.url = "https://api.github.com/users/" + this.fields.login;
  }

  get (fieldName) {
    return this.fields[fieldName];
  }
  set (fieldName, value) {
    this.fields[fieldName] = value;
    return this;
  }

  properties() {
    var properties = [];
    for(let member in this.fields) {
      properties.push({name:member, value:this.fields[member]});
    }
    return properties;
  }

  fetch () {
    return new Request(this.fields.url).jsonp().then((properties) => {
      Object.assign(this.fields, properties.data);
      return this;
    });
  }

  fetchRepositories () {
    //TODO
    //https://developer.github.com/v3/repos/#list-user-repositories
    //create repository Class
  }
}

export default User;
