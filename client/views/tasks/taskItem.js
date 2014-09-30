Template.taskItem.selected_taskItem = function(){
	return Tasks.find({_id:Session.get("selected_task")});
}

Template.taskItem.events({
	'click .editTask':function(e,t){
		Router.go('editTaskItem');
	}
})