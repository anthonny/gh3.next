import gh3 from './src/gh3/gh3';

console.log("start")

window.k33g = new gh3.User({login:"k33g"});
k33g.fetch().then((data) => {
  console.log(k33g);
}).catch((error) => {
  console.log(error);
});

window.githubUsers = new gh3.Users();

githubUsers.search("mad").then((data)=>{
  console.log(githubUsers)
}).catch((error) => {
  console.log(error);
});


window.gh3Repo = new gh3.Repository({
  owner: new gh3.User({
    login:"k33g"
  }),
  name:"gh3"
});

gh3Repo.fetch().then((data) => {
  console.log(gh3Repo);
}).catch((error) => {
  console.log(error);
});




