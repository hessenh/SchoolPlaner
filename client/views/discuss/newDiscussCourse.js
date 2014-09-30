Template.newDiscussCourse.events({
	'click .submitNewDiscussCourse':function(e,t){
		e.preventDefault();
		var newDiscussCourseTitle = t.find('#newDiscussCourseTitle').value;
		Meteor.call('addDiscussCourse',newDiscussCourseTitle);
		Router.go('discuss');
	},
	'click .cancelNewDiscussCourse':function(e,t){
		Router.go('discuss');
	}
})
