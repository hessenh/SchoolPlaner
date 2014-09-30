Template.newTask.events({
	'click .submitTask':function(e,t){
		e.preventDefault();

		var taskTitle = t.find('#taskTitle').value;
		var taskInfo = t.find('#taskInfo').value;
		var dueDate = t.find('#taskDueDate').value;

		Meteor.call('addTask',Session.get("selected_course"),Meteor.user()._id,taskTitle,taskInfo,dueDate);
		Router.go("courseItem");
	}
})