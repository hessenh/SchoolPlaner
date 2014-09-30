Template.discuss.events({
	'click .addCourseBtn':function(e,t){
		Router.go("newDiscussCourse");
	},
	'click #selected_course':function(e,t){
		Session.set("selected_discussCourse",this._id);
		Router.go('discussCourseItem');
	}
})

Template.discuss.courseList = function(){
	return DiscussCourses.find({});
}