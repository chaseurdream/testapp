// accountServer = new AccountsServer(Meteor.server);

Accounts.onLogin(function(){
  console.log("function executed");
  if (Meteor.userId()) {
    console.log("Successful login");
    username = Meteor.user({},{"emails.address":true});
    console.log(username);
  } else {
    return "Anonymous";
  }
})
