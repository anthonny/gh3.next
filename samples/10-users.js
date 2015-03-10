/**
 * Created by k33g_org on 10/03/15.
 */

import Gh3 from '../gh3.next.js';

let gitHubUsers = new Gh3.Users()
  , usersInformations = Gh3.$("#users");

gitHubUsers.search("k33g").then((users) => {
  console.log("gitHubUsers",
    users,
    gitHubUsers.foundUsers()
  );


  let html = `<ul>${
    gitHubUsers.foundUsers().map(
      (user) => `
          <li>
            <b>${user.get("login")}</b> - ${user.get("repos_url")}
          </li>
          `
    ).join("")
   }</ul>`;

  usersInformations.innerHTML = html;

}).catch((error) => {
  console.log(error);
})

