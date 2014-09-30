Template.tasks.taskList = function(){
	console.log(Meteor.user()._id);
	return Tasks.find({courseID:Session.get("selected_course"),userID:Meteor.user()._id});
}

Template.tasks.events({
	'click .addTaskBtn':function(e,t){
		Router.go('newTask');
	},
	'click #selected_task':function(e,t){
		e.preventDefault();
		Session.set("selected_task",this._id);
		Router.go("taskItem");
	}
})