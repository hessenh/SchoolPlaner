Template.courses.events({
	'click .addCourseBtn':function(e,t){
		Router.go('newCourse');
	},
	'click #selected_course':function(e,t){
		Session.set("selected_course",this._id);
		Router.go("courseItem");
		console.log(Session.get("selected_course"));

	}
})

Template.courses.courseList = function(){
	return Courses.find({userID:Meteor.user()._id});
}