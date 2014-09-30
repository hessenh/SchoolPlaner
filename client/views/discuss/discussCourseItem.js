Template.discussCourseItem.selected_discussCourseItem = function(){
	return DiscussCourses.find({_id:Session.get("selected_discussCourse")},{sort:{date:-1}});
}
Template.discussCourseItem.questionList = function(){
	return DiscussQuestions.find({courseID:Session.get("selected_discussCourse")});
}
Template.discussCourseItem.events({
	'click .newQuestion':function(e,t){
		Router.go('newQuestion');
	},
	'click #selected_question':function(e,t){
		e.preventDefault();
		Session.set("selected_question",this._id);
		Router.go("questionItem");
	},
	'click .backBtn':function(e,t){
		Router.go('discuss');
	}
})