Meteor.methods({
    recordbargain: function(data){
        // collection.insert(data);
        console.log("bargain value entered")
        Bargain.insert(data);
        return true;
    },
    updatebargain:function(selector, data){
        console.log("bargain value updated")
        Bargain.update({});
        return false;
    }
})
