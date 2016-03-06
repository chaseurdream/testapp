Template.mini_rentdetails.helpers({
  rentedprops: function(){
    return RentedProps.find();
    // return [{name:"se view",price:{min:0,max:100},location:"berlin"}];
  }
});


Template.mini_rentdetails.events({
  "click .getquote": function(ev, tmpl){
    // this returns the ref of document from mongo collection: 
    console.log(this, "just got clicked");
    return this;
  }
});
