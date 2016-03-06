FlowRouter.route("/login",{
  name:"login",
  action:function(){
    console.log("User login");
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails"});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})
