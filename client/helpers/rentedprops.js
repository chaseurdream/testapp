Template.mini_rentdetails.helpers({
  rentedprops: function(){
    return RentedProps.find().map(function(x){x.avgprice= (x.price.max + x.price.min)/2; return x;});
    // return [{name:"se view",price:{min:0,max:100},location:"berlin"}];
  }
});


Template.mini_rentdetails.events({
  "click .getquote": function(ev, tmpl){
    // this returns the ref of document from mongo collection:
    BlazeLayout.render("SiteTemplate", {top:"loginPage", middle:"full_rentdetails", bottom:"tabbedview"});
    Session.set( "selectedprop", this );
    console.log(this, "just got clicked");
    return this;
  }
});

Template.full_rentdetails.helpers({
  rentedprop: function(){
    return Session.get( "selectedprop");
  }
});
