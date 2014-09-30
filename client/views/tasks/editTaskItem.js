Template.editTaskItem.selected_taskItem = function(){
	return Tasks.find({_id:Session.get("selected_task")});
}