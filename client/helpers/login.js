Template.loginPage.helpers({
    isPropertyListing:function(){
        var routeName = FlowRouter.getRouteName();
        if(routeName == "properties")
            return false;
        else 
            return true;
    }
})
