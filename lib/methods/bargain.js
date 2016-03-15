Meteor.methods({
    recordbargain: function(data){
        // collection.insert(data);
        console.log("bargain value entered")
        Bargain.insert(data);
        return true
    },
    updatebargain:function(collection, data){
        console.log("bargain value updated")
        return true
    }
})
