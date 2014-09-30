Template.newQuestion.events({
	'click .submitNewQuestion':function(e,t){
		e.preventDefault();
		var newQuestionTitle = t.find('#newQuestionTitle').value;
		var newQuestionText = t.find('#newQuestionText').value;
		Meteor.call('addQuestion',newQuestionTitle,newQuestionText,Meteor.user()._id,Session.get("selected_discussCourse"));
		Router.go('discussCourseItem');
	},
	'click .cancelNewQuestion':function(e,t){
		Router.go('discussCourseItem');
	}
})