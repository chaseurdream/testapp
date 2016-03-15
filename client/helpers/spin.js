// var bidroundno = new ReactiveDict;


var updateBargain = function(data){
    Meteor.call("updatebargain", Bargain, data);
}

var recordBargain = function(){
    var propertyid = FlowRouter.getParam("propertyid");
    var oid = new Meteor.Collection.ObjectID(propertyid);
    var oRentedProp = RentedProps.findOne(oid);
    var bidroundno = 0;
    // var bidroundno = bidroundno.get("roundno") || 0;
    // bidroundno.set("roundno", ++bidroundno);
    data = {  
        propertyid:propertyid 
        , bidroundno:bidroundno 
        , askingprice:luckyprice
        , bidprice:null /* host has already specified a range within which he would settle for deal */
        , guest:Meteor.user().emails[0].address
        , host:oRentedProp.owner.email
        , guestofferstatus: 'declined'/* <accept, pullout, declined > */
        , hostofferstatus: null /*always accepted as it falls under host's price range */
    }
    Meteor.call("recordbargain", data);
}

var spinwheel = function(minPrice, maxPrice){
  return Math.round(minPrice + Math.random() * (maxPrice - minPrice), 2)
};

var luckyprice = 0;

Template.spinview.onCreated(function(){
    var self = this;
    self.autorun(function(){
        var propertyid = FlowRouter.getParam("propertyid");
        self.subscribe("rentedprops", propertyid, function(){
           // recordBargain(); 
        })

        self.subscribe("bargain");// Just return total number of entries in bargain (bargainhistory)
    });
});


Template.spinview.helpers({
  luckyprice:function(){
    // Insert roll info into bargain collection
    // Method.call();
    var propertyid = FlowRouter.getParam("propertyid");
    var oid = new Meteor.Collection.ObjectID(propertyid);
    var oRentedProp = RentedProps.findOne(oid);
    // bidroundno.get('bidroundno')
    if(Bargain.find().fetch().length < 5){ // should give bidroundno
        luckyprice = spinwheel(oRentedProp.price.min, oRentedProp.price.max);
    }
    console.log("Existing Lucky price", luckyprice)
    return luckyprice;
    //price = Session.get("selectedprop").price;
    //return spinwheel(price.min, price.max);
  },
});


Template.spinhistory.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe("bargain", function(){
            console.log("Recordbargain");
        })
    });
});

Template.spinhistory.helpers({
  bargainhistory:function(){
      return Bargain.find().fetch().reverse();
  }
})

Template.spinview.events({
    'click .accept':function(ev){
        // would only update already existing document in collection
        ev.preventDefault();
        data = {
            offerstatus: "accepted"
        }
        updateBargain(data);
    },
    'click .pullout':function(ev){
        // would only update already existing document in collection
        ev.preventDefault();
        data = {
            offerstatus: "pulledout"
        }
        updateBargain(data);
    },
    'click .rollluck':function(ev, tmpl, any, more){
        // would always create new entry into bargains collection
        ev.preventDefault();
        // default is always declined
        if(Bargain.find().fetch().length < 5){
            recordBargain();
        }
        // Blaze.render(this, document.body);
    }
});

