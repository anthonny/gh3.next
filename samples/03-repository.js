/**
 * Created by k33g_org on 12/03/15.
 */

import Gh3 from '../gh3.next.js';

let k33g = new Gh3.User({login:"k33g"})
  , repoTitle = Gh3.q("h1").first()
  , description = Gh3.q("h2").first()
  , owner = Gh3.q("h3").first()
  , language = Gh3.q("h3").second();


let ES3gh3Repository = new Gh3.Repository({owner: k33g, name:"gh3"});

ES3gh3Repository.fetch().then((repository) => {
  console.log(repository)

  repoTitle.html(repository.name);
  description.html(repository.description);
  language.html(repository.language);
  owner.html(repository.owner.get("login"));

}).catch((error) => {
  console.log(error);
});

