Template.spinview.helpers({
  luckyprice:function(){
    price = Session.get('selectedprop').price;
    debugger;
    return spinwheel(price.min, price.max);
  }
});

Template.spinview.events({
  'click .accept':function(){},
  'click .decline':function(){},
  'click .rollluck':function(){}
});

spinwheel = function(minPrice, maxPrice){
  return minPrice + Math.random() * (maxPrice - minPrice)
};