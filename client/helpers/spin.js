Template.spinview.helpers({
  luckyprice:function(){
    price = Session.get('selectedprop').price;
    return spinwheel(price.min, price.max);
  }
});

Template.spinview.events({
  'click .accept':function(){},
  'click .decline':function(){},
  'click .rollluck':function(){}
});

spinwheel = function(minPrice, maxPrice){
  return Math.round(minPrice + Math.random() * (maxPrice - minPrice), 2)
};
