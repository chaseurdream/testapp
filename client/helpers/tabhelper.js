Template.tabbedview.events({
	"click #method1":function(ev,tmpl){
		console.log("Clicked 1");
	},
	"click #method2":function(ev,tmpl){
		BlazeLayout.render("tabbedview",{paymentmode:"bargainspace"})

	}
});
