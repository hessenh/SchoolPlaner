Template.newCourse.events({
	'click .submitCourse':function(e,t){
		var course = t.find('#newCourse-courseName').value;
		Meteor.call('addCourse',course,Meteor.user()._id,function(error){
			if(error){
				alert("Could not add course");
			}
			else{
				Router.go('courses');
			}
		});

	}
})