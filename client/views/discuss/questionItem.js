Template.questionItem.selected_question = function(){
	return DiscussQuestions.find({_id:Session.get("selected_question")});
}

Template.questionItem.question_comment = function(){
	return QuestionComment.find({questionID:Session.get("selected_question")},{sort:{score:-1}});
}
Template.questionItem.ownsComment = function(){
	if(QuestionComment.findOne({_id:this._id}).userID == Meteor.user()._id){
		return true;
	}
	else{
		return false;
	}
}
Template.questionItem.ownsQuestion = function(){
	if(DiscussQuestions.findOne({_id:this._id}).userID == Meteor.user()._id){
		return true
	}
	else{
		return false;
	}
}

Template.questionItem.events({
	'keypress #newComment': function(e,t) {
        if (event.charCode == 13) {
			e.preventDefault();
			var comment = t.find('#newComment').value;
			Meteor.call('addComment',comment,Session.get("selected_question"),Session.get("selected_discussCourse"),Meteor.user()._id,Meteor.user().username);
			$("#newComment").val("");
		}
	},
	'click .addComment':function(e,t){
		$("html, body").animate({
		 	scrollTop: $('#newComment').offset().top
			}, 600);
		$("#newComment").focus();
	},
	'click .backBtn':function(e,t){
		Router.go('discussCourseItem');
	},
	'click .deleteComment':function(e,t){
		Meteor.call('deleteComment',this._id);
	},
	'click .commentPluss':function(e,t){
		Meteor.call('commentScore',this._id,1);
	},
	'click .commentMinus':function(e,t){
		Meteor.call('commentScore',this._id,-1);
	},
	'click .deleteQuestion':function(e,t){
		Meteor.call('deleteQuestion',Session.get("selected_question"));
		Router.go('discussCourseItem');
	}
})
