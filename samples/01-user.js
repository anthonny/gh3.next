/**
 * Created by k33g_org on 10/03/15.
 */

import Gh3 from '../gh3.next.js';

let k33g = new Gh3.User({login:"k33g"})
  , userInformations = Gh3.q("#user");

k33g.fetch().then((user) => {

  console.log(user.get("login"), user.get("name"));

  let html = `<ul>${
    k33g.properties().map(
      (field) => `
          <li>
            <b>${field.name}</b> - ${field.value}
          </li>
          `
    ).join("")
  }</ul>`;

  userInformations.html(html);


}).catch((error) => {
  console.log(error);
});
