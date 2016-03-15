FlowRouter.route("/",{
  name:"root",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    Tracker.autorun(function(){
       if(Meteor.user()){
            FlowRouter.go("/properties");
       } 
    });
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails"});
  }
})

/*
FlowRouter.route("/login",{
  name:"login",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails"});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})
*/

Guests = FlowRouter.group({
    prefix:"/guests"

})

Hosts = FlowRouter.group({
    prefix:"/hosts"

})

Payments = FlowRouter.group({
    prefix:"/payments"

})


Properties = FlowRouter.group({
    prefix:"/properties"

})

Properties.route("/",{
  name:"properties",
  action:function(){
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails"});
  }
})

Properties.route("/:propertyid",{
  name:"propertydetail",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    BlazeLayout.render("SiteTemplate", {top:"loginPage", middle:"full_rentdetails", bottom:"tabbedview" , paymentmode:"spinview"});
  }
})

Properties.route("/add",{
  name:"offering",
  action:function(params, queryparams){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})

Properties.route("/update",{
  name:"offering",
  action:function(params, queryparams){
    // blazelayout.render('sitetemplate', {top:"loginpage", middle:"mini_rentdetails", bottom:"splitview"});
    blazelayout.render('sitetemplate', {top:"loginpage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // accounts.onlogin(function(){
    //   console.log("time to render another view");
    // })
  }
})

Properties.route("/delete",{
  name:"offering",
  action:function(params, queryparams){
    // blazelayout.render('sitetemplate', {top:"loginpage", middle:"mini_rentdetails", bottom:"splitview"});
    blazelayout.render('sitetemplate', {top:"loginpage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // accounts.onlogin(function(){
    //   console.log("time to render another view");
    // })
  }
})



Payments.route("/modes",{
  name:"offering",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})

Payments.route("/modes/:modeid",{
  name:"offering",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})




FlowRouter.route("/getquote",{
  name:"offering",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})

FlowRouter.route("/getquote",{
  name:"offering",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})

FlowRouter.route("/getquote",{
  name:"offering",
  action:function(){
    // BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"mini_rentdetails", bottom:"splitview"});
    BlazeLayout.render('SiteTemplate', {top:"loginPage", middle:"full_rentdetails",bottom:"tabbedview",paymentmode:""});
    // Accounts.onLogin(function(){
    //   console.log("time to render another view");
    // })
  }
})
