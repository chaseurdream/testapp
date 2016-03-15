// accountServer = new AccountsServer(Meteor.server);
Meteor.publish("rentedprops", function(propertyid){
    if(propertyid){
        console.log("Using propertyid")
        return RentedProps.find({_id:new Meteor.Collection.ObjectID(propertyid)});
    }else{
        console.log("without propertyid")
        return RentedProps.find()
    }
});


Meteor.publish("bargain", function(){
    return Bargain.find();
})

Accounts.onLogin(function(){
  if (Meteor.userId()) {
    console.log("Successful login");
    username = Meteor.user({},{"emails.address":true});
  } else {
    return "Anonymous";
  }
})


Accounts.onCreateUser(function(options, user) {
    console.log(user);
    return user;
});
